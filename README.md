# Circuit League walkthrough

[Open the tour](https://chriswiles.github.io/circuit-league-walkthrough/).

The gallery covers joining, courts and times, matchmaking, chat, results, standings, teams, Scan, challenges and recovery. Refreshed Maestro images show their app commit. Earlier references are clearly labeled while their replacements are captured. See [capture evidence](current-evidence.md) and [the per-image manifest](current-captures.json) for current counts and limits.

The images use fictional local data on retained iPhone 17 Pro simulators, iOS 26.4, Dark appearance and Default app text. Chapters combine separate journeys. They do not establish production gameplay or external provider delivery.

Tap an image for the viewer; use arrows, swipes and Escape. Named links use `#shot-<image-id>`. Older numbered links such as `#s12` open the original archived gallery. Preserve archived HTML, manifests and image assets.

## Refreshing images

Source automation lives in the Circuit app repository at `scripts/league-walkthrough`. Inspect captures, explicitly accept them there, then import its generated review manifest:

```sh
node import-captures.mjs --review /absolute/path/to/review/manifest.json
```

The importer requires reviewed images, checks their original PNG hashes, writes separate WebP assets and records provenance. It never overwrites archived files. `capture-assets.json` selects refreshed assets; `capture-assets.js` supplies the same map to the browser. Reimport after additional accepted captures.

Preview with `python3 -m http.server 8093 --bind 127.0.0.1`. Check image paths and hashes, named and archived links, the viewer and responsive layouts before publishing. GitHub Pages serves this repository's main branch. Publishing this site does not deploy Circuit.
