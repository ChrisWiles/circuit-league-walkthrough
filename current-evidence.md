# Current League walkthrough evidence

Updated October 21, 2026. App source: local main `ce075ef6a512eb90598925f53f08bb3aa5a4d2f1`. The current single-page tour contains 93 views, including 33 refreshed original native images. Retained unchanged screens preserve their individual provenance in `current-captures.json`; they are not claimed as newly captured. No historical-design or chapter-link navigation is shown.

## Current native verification

The compatible installed client ran on iPhone 17 Pro / iOS 26.4, Dark appearance, Default app text and system content size large (iOS default). Appearance selections and OS scale were checked explicitly. The owner authorized Maestro after the Simulator control interface timed out and authorized restarting the dev server/client. Connection failures, refresh banners and transitional screenshots were excluded; original settled native pixels were inspected.

The fresh captures cover Singles, individual Doubles and fixed Teams; text-only rows with padded full-width own highlights; actual rating dates for an individual and a partner; six selectable partnerships with one pinned record; season-total versus recent PD; match history; player-record Block preview; score-ending choices and a two-game review with a named between-game stop; populated conduct restrictions, dated report links and report details; one favorite without ordering controls; and Dark/Default appearance.

Weekly and season stories now come from Circuit League itself. The fictional account's actual confirmed games were published through the normal local snapshot/recap producers and persistence APIs. The tour shows five weekly scenes, six season scenes, the summaries and a saved badge explanation. It no longer substitutes organized-ladder stories for these League examples. The weekly sample shows PD +9.1%; the separate completed season shows +12.5%. Neither is reconstructed from recent-form data.

Menu-to-chat navigation was checked with the old match menu open: the destination composer remains reachable and the old menu is absent. No chat message or Block action was submitted. Headers, footer/tab-bar clearance, typography, signed PD colors and the exercised bottom-of-list states were inspected separately from source tests.

## Behavior and source checks

The approved backlog and item-by-item acceptance live in the app repository at `apps/docs/docs/operations/circuit-league-audit-fixes-plan-2026-10-21.md`.

- The affected shared batch passes 145 tests. Final PD/time/recap checks pass 66 tests; final story checks pass 24.
- Native affected suites pass through the recorded batch and scoped reruns. Final score suites pass 55 tests; popularity passes 10. A worker SIGSEGV was resolved by rerunning its isolated suite. A six-partnership regression covers switching one pinned record; a real-store check-in test covers arrival after two minutes of continuous foreground time, followed by background suspension.
- A generated forward migration replays on a clean owned local database. The post-reset declarative diff is empty. Ninety affected database contracts pass; a final 21-test discovery/conduct run includes distant explicit court search and stable report offsets. Database types were regenerated. Database lint retains 156 existing function reports, including an existing unused venue-search local variable; full database lint is not claimed green.
- Full workspace typecheck cleared shared/web/export stages; the mobile failure was corrected and final mobile/DB checks pass, with Edge typecheck separately passing. The full lint batch passed 29 tasks; its two oxlint findings were corrected and final root oxlint passes. Formatting, migration parity, staged checks and the commit hook's help checks pass. Review and simplify completed on the exact staged app content.

PD uses confirmed fully played games. Completed games before a stop count; unfinished, unplayed, disputed and voided games do not. Total, last-up-to-ten, selected match and frozen recap periods retain their separate scopes. PD does not determine rank or identify a player as a smurf. Individual Doubles includes fixed and rotating games.

New local ranking publications use the reviewed metro, with city fallback outside a metro and state based on the played venue. Old published ranks and links remain historical facts. The tour uses current consolidated publications. Popular weekly guidance filters eligible categories; general venue browsing explicitly labels all-category counts and retains the privacy floor.

The existing 48-hour score-review schedule remains: push on report, push plus enabled results email at hour 24, and push six hours before confirmation. Disputing stops automatic confirmation for the disputed games and starts the separate 24-hour correction agreement window. This pass did not send real push/email or call DUPR.

## Gallery checks

Matched enlarged-leaderboard views were inspected at 360×800, 390×844 and 1280×900. Previous, Next and Close work; narrow content fits without horizontal overflow. All 93 manifest image hashes and gallery ordering were checked. The published page, manifest and asset bytes are verified separately after the gallery push.

## Coverage and release limits

This is changed-feature verification, not exhaustive clearance of every reachable route, overlay, error, permission or lifecycle state in the ten-audit inventory. Physical location arrival, actual push/email/DUPR receipt, visual long-history pagination, Android, alternate app/system text sizes and light theme are not claimed as current device passes. Retained unchanged examples are identified rather than presented as fresh tests.

The app commit is local only. The server migration must precede a client release. No app push, OTA, store release or persistent database/Edge deployment is included. The owner limited publication to this walkthrough: the authored Rules article still requires a separate Circuit website release. Task-owned native/backend services were stopped; other development stacks and unrelated local changes were preserved.
