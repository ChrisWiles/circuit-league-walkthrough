# Circuit League walkthrough

[Open the tour](https://chriswiles.github.io/circuit-league-walkthrough/).

The reference gallery contains 268 iPhone screens and one exported result card in 41 chapters. The Your season chapter illustrates rank, season movement, DUPR observations and highlights from an earlier app revision; a current comparison is pending. It covers joining, saved courts and times, searching and booking, chat, cancellations and absence responses, score reporting and correction, boards and records, weekly recaps, Team doubles, Scan to play, challenges, following, local growth, settings, Pause and safety.

The recommended doubles route links courts and times, matching, Scan, reporting, regular partners, changed plans, replacement scheduling and season results. Earlier reference views remain available for additional options; they do not form one continuous match.

Tap a screen to open the viewer. Arrow keys and swipes step through the gallery; `#s12` opens screen 12. Chapters provide direct links to the main tasks.

## Capture records

[current-captures.json](current-captures.json) lists every image, source filename and SHA-256 hash. [current-evidence.md](current-evidence.md) records the contributing app builds, fixture preparation, retakes and known gaps. The gallery combines captures from several local revisions; an image is evidence of its captured state, not proof that every pictured control remains current or that a provider integration ran.

The supplied captures use an iPhone 17 Pro simulator, iOS 26.4, Dark appearance and Default app text size. People, matches and safety records are local demonstration fixtures. No production gameplay, push/email delivery or DUPR submission is established by this gallery.

## Local maintenance

Preview with `python3 -m http.server 8093 --bind 127.0.0.1`. Keep each demonstrated transition consistent in player, match, venue, time and score. Update captions and the capture manifest together when replacing images. Source capture tooling lives in the Circuit app repository under `scripts/league-walkthrough`.

GitHub Pages serves this repository's main branch. Local edits do not publish the tour or deploy the Circuit app/backend. Commit, push and publication require their own authorization.
