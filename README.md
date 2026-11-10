# Circuit League walkthrough

[Open the tour](https://chriswiles.github.io/circuit-league-walkthrough/).

The reference gallery contains 217 iPhone screens and one exported result card in 42 chapters. The Your season chapter includes a current local record and a separately labeled earlier example; the earlier sequence still needs current comparison. It covers joining, saved courts and times, searching and booking, chat, cancellations and absence responses, score reporting and correction, boards and records, weekly recaps, Team doubles, Scan to play, challenges, following, local growth, settings, Pause and safety.

The recommended doubles route links courts and times, matching, Scan, reporting, regular partners, changed plans, replacement scheduling and season results. The route combines separate fictional examples, including the newer Alex Scan plan and earlier doubles chapters; it does not follow one continuous match.

Tap a screen to open the viewer. Arrow keys and swipes step through the gallery; new screenshot links use `#shot-<image-name>`; older numbered links such as `#s12` open the original gallery with their original images and captions. Named links for images replaced since the interim publication open that interim archive. Each archive keeps its own capture manifest. Chapters provide direct links to the main tasks.

## Capture records

[current-captures.json](current-captures.json) lists every image, source filename and SHA-256 hash. [current-evidence.md](current-evidence.md) records the contributing app builds, fixture preparation, retakes and known gaps. The gallery combines captures from several local revisions; an image is evidence of its captured state, not proof that every pictured control remains current or that a provider integration ran.

The supplied captures use an iPhone 17 Pro simulator, iOS 26.4, Dark appearance and Default app text size. People, matches and safety records are local demonstration fixtures. No production gameplay, push/email delivery or DUPR submission is established by this gallery.

## Local maintenance

Preview with `python3 -m http.server 8093 --bind 127.0.0.1`. Keep each demonstrated transition consistent in player, match, venue, time and score. Update captions and the capture manifest together when replacing images. Source capture tooling lives in the Circuit app repository under `scripts/league-walkthrough`.

GitHub Pages serves this repository's main branch. Local edits do not publish the tour or deploy the Circuit app/backend. Commit, push and publication require their own authorization.

The local checkpoint contains 218 images. The latest inspected source overlay is `5d2ae9139` with its committed category migration and the requested rank-plus-percent history change. Newer app commits `e44eb7ef8` and `4d6915883` still need comparison. The refresh is paused and incomplete; the live interim publication remains `433f573`.
