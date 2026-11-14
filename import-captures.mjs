// Import explicitly reviewed native captures without changing archived assets.
// node import-captures.mjs --review /absolute/path/to/review/manifest.json
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import { runInNewContext } from 'node:vm';
const { values } = parseArgs({ options: { review: { type: 'string' } } });
if (!values.review) throw new Error('--review is required');
const root = dirname(fileURLToPath(import.meta.url));
const review = JSON.parse(readFileSync(values.review));
if (review.schemaVersion !== 1 || !/^[a-f0-9]{40}$/.test(review.sourceHead)) throw new Error('Invalid capture review');
if (review.sourceFreshness?.fresh === false) throw new Error('Review source is stale');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const statePath = join(root, 'capture-assets.json');
const assets = existsSync(statePath) ? JSON.parse(readFileSync(statePath)) : {};
let imported = 0;
for (const row of review.rows) {
  if (row.status !== 'accepted') continue;
  const image = row.current;
  if (!image || image.visualReviewStatus !== 'reviewed' || image.sourceHead !== review.sourceHead || !/^[a-zA-Z0-9_-]+$/.test(row.id)) throw new Error(`Invalid accepted image ${row.id}`);
  if (image.url !== `images/${row.id}.png`) throw new Error(`Invalid image URL ${row.id}`);
  const sourcePath = join(dirname(values.review), image.url);
  const bytes = readFileSync(sourcePath);
  if (hash(bytes) !== image.sha256) throw new Error(`Capture changed after review: ${row.id}`);
  const file = `img/captures/${image.sourceHead.slice(0, 9)}/${row.id}-${image.sha256.slice(0, 12)}.webp`;
  const target = join(root, file);
  mkdirSync(dirname(target), { recursive: true });
  if (!existsSync(target)) execFileSync('cwebp', ['-quiet', '-q', '88', sourcePath, '-o', target]);
  assets[row.id] = { file, sourceHead: image.sourceHead, stage: image.stage, actor: image.actorAlias,
    capturedAt: image.capturedAt, evidenceLevel: image.evidenceLevel, originalSha256: image.sha256,
    sha256: hash(readFileSync(target)), profile: review.profile, review: 'accepted' };
  imported++;
}
writeFileSync(statePath, JSON.stringify(assets, null, 2) + '\n');
writeFileSync(join(root, 'capture-assets.js'), 'const CAPTURE_ASSETS = ' + JSON.stringify(assets) + ';\n');
console.log(`Imported ${imported} reviewed captures; ${Object.keys(assets).length} total fresh replacements`);

const html = readFileSync(join(root, 'index.html'), 'utf8');
const start = html.indexOf('const CHAPTERS = ');
const end = html.indexOf('\n];', start);
if (start < 0 || end < 0) throw new Error('Missing chapter inventory');
const chapters = runInNewContext(html.slice(start + 'const CHAPTERS = '.length, end + 2));
const manifest = JSON.parse(readFileSync(join(root, 'current-captures.json')));
manifest.screens = chapters.flatMap(chapter => chapter.shots.map(([id, title]) => {
  const capture = assets[id];
  const file = capture?.file ?? `img/oct26/${id}.webp`;
  const sha256 = hash(readFileSync(join(root, file)));
  if (capture && sha256 !== capture.sha256) throw new Error(`Published capture changed: ${id}`);
  return { n: 0, chapter: chapter.title, person: capture?.actor ?? chapter.person,
    title, file, source: `${id}.png`,
    status: capture ? 'reviewed-native-capture' : 'earlier-reference',
    ...(capture ? { capture } : {}), sha256 };
}));
manifest.screens.forEach((row, index) => row.n = index + 1);
manifest.count = manifest.screens.length;
manifest.capturedOn = new Date().toISOString().slice(0, 10);
manifest.appBase = 'Per-image sources are recorded below. Earlier references remain labeled; this is a collection of separate local journeys, not one continuous pass.';
manifest.freshReplacements = manifest.screens.filter(row => row.capture).length;
writeFileSync(join(root, 'current-captures.json'), JSON.stringify(manifest, null, 1) + '\n');
