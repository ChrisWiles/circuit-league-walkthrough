# October 20 published walkthrough update

The current tour contains **49 iOS screenshots**: two uncapped-partnership captures from app commit `8e24ab144` and 47 retained polish captures from `0b97fffa6`. The obsolete three-team-limit screen has been removed. The partnership captures show five active pairs and the New team form reached through Add a team, without retiring a pair. All captures were made on October 19 and inspected individually. Per-image commits and SHA-256 values are recorded in `current-captures.json`.

The app change passed 341 targeted tests, full typecheck, repository lint and enforced Knip. Database lint retained 388 findings identical to the previous functions, with none in the changed functions. This publishes only the walkthrough; it does not deploy the app or database.

## Retained polish evidence

All seven approved CLV polish changes are implemented in app commit `0b97fffa6b119cda5ebe6a955112f24125a4fa63`, based on `7f19d2fae`. The original polish page contained 48 individually inspected iOS screenshots collected after those source changes; 47 remain in the current tour. This is development evidence, not an app release or exhaustive route/state audit. Earlier CLR functional findings remain separate in the app audit report.

The polish chapter shows aligned format choices, quieter venue actions, compact Scan player rows, chat with the iOS keyboard, QR-first ordering, a single partner identity and a receipt explicitly labeled Matchmaking: Off. Later chapters cover introduction/setup, preferences, map/flyer, offers/teams, two- and four-player Scan, chat/reply, scores and empty/preparing records.

`current-captures.json` records the original app-workspace file, caption and SHA-256 for every image. All current gallery PNGs match their originals byte for byte at 1320×2868 pixels (440×956 points). No screenshot pixels were edited. The previous page and provenance are retained as `before-ios-polish.html`, `before-ios-polish-captures.json` and `before-ios-polish-evidence.md`; its older screenshots do not count as fresh evidence.

The app checks passed: five targeted mobile suites, 91 tests; full `npm run lint:typecheck`; all 30 tasks in `npm run lint`; source formatting and staged diff checks. Code review and simplify passes covered the final app changes. The owned fictional test stack, Metro, Edge Functions and simulator were stopped with data retained; the local gallery server remains running for review.

Default app text, normal OS scaling and dark theme were used. Android and enlarged text were excluded by the owner. Physical QR scanning, real location/provider delivery, final legal acceptance/enrollment, published standings, ready recaps, valid stats/history and populated safety cases remain unverified. Preparing/empty records are captioned as such. An early local Times error is excluded in favor of the settled frame after Edge Functions started. A setup collection assertion expected an outside-area notice but encountered the available loaded map; the settled map capture is shown. These collection issues do not establish product regressions or a full Maestro release-suite pass.

The original 48-screen gallery was visually inspected at 360×800, 390×844 and 1280×900: one column on phones, four columns on desktop, readable captions and no horizontal page overflow. All 48 image files match their provenance; all 48 full-size images loaded successfully in the browser viewer. The browser renders 48 screen buttons, every chapter link resolves, and the full-size viewer supports Next, Previous, Close and Escape. No browser console error was observed. The current page and retained archive are published through GitHub Pages; app deployment is separate.

## Publishing verification

Before publication, the 49-image tour was checked at 360×800, 390×844 and 1280×900. The desktop grid keeps consistent thumbnail sizes even in two-screen chapters; phones use one column. No horizontal page overflow occurred, every chapter anchor resolved, the two new full-size images displayed, and the existing viewer navigation remained functional. JavaScript syntax and diff checks passed. Original screenshot pixels and source hashes are preserved. Public completion requires a successful GitHub Pages build of the pushed commit and a matching live page.
