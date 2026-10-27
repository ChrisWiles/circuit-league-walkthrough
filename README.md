# Circuit League walkthrough

[Open the tour](https://chriswiles.github.io/circuit-league-walkthrough/).

One page follows two fictional players through Circuit League on iPhone. Blake joins: intro, the four setup stages, notifications and automatic check-in. Casey has played for seven weeks: offers, chat, score reporting and review, leaderboards, player records, the weekly recap, fixed teams, Scan to play, settings, safety and notifications.

All 84 screens were captured on October 26, 2026 on an iPhone 17 Pro simulator (iOS 26.4) in Dark appearance at the Default app text size. Most come from one walkthrough of the app on local main, after commit `e4e2ed091` and the setup check-in step fix that followed it. Ten were recaptured that evening after the second polish pass and the new match chat reactions (local main `8babf9c93`). Seven more were captured or recaptured later that night after the reaction badge and standings info changes (local main `b9c600d12`). Eighteen were recaptured after that, once in-app times showed a zone only when the phone's clock differs and Scan to play listed the nearest venues first (local main `01e6c876f`). Three team screens were recaptured last, once partner invites became link-only (local main `ee207be70`). Two chat screens were replaced and three added after League and Ladder chat moved to one shared message menu, with Reply, Copy, Mute, Report and Block (local main `8d80f68cc`). Tap any screen to step through the tour full size; arrow keys and swipes move between screens, and `#s12`-style links open a specific screen.

All people, matches, venues and safety records are fictional local test data. [Capture list](current-captures.json) names every screen and its source file. [Verification and known gaps](current-evidence.md) records what was checked and what the tour does not show.

GitHub Pages publishes this repository's main branch. Publishing the walkthrough does not deploy the app, backend or Circuit website. Preview locally with `python3 -m http.server 8093 --bind 127.0.0.1`.
