# Current League walkthrough evidence

The single current tour follows the League player journey across 83 iOS and mobile-web screens. All screens are on one page, with an optional enlarged viewer. There is no historical comparison or chapter-link navigation. Retired tour URLs redirect to the current root.

Original record-polish source: `a51a03869daeaf437dd45fe0f568f457dbd15c52` (local commit). Search and recap-story additions have separate provenance below. The manifest preserves original provenance for unchanged screens. Nine original iOS Dark/Default captures refresh records, match history, weekly recap, report history, lifted restrictions and appearance preferences; the recap ranking detail is an added view. Images are original native pixels.

## Recent PD

Leaderboard and pinned own rows show PD% and the actual sample count, up to ten games. The selected season/category/pool bounds the current sample; each fixed pair has its own sample. Individual Doubles includes fixed and rotating games. Only confirmed fully played games count; voided, disputed, unplayed and stopped games do not. A finished game before a session stop remains eligible. Zero eligible games says No PD yet. All points are combined before dividing: (scored − conceded) ÷ total × 100. Recent form is current within the season even on a historical/geographic rank board; rank and published season records remain frozen. Player records show season-total PD% separately from concise recent form. Match history has a per-match PD value from its eligible games. PD does not change ranking or label players as smurfs.

Text-only leaderboard rows retain full-width own highlights with side padding and vertically centered You. Fixed pairs retain separate alphabetical names; Provisional remains on details. The category-only filter omits Season when only one season exists.

## Verification

- Original iPhone 17 Pro / iOS 26.4 captures inspected in Dark appearance, Default app text size and system content size large (iOS default). Three pools, pinned row, list end, filter sheet, individual/pair records and match history are current. Nine-game and ten-game sample labels are visible.
- Focused shared formula/schema tests: 14 passed. Native board/stats suites: 34 passed; final empty-record correction separately passed all 17 stats tests. Broader unchanged League tests retained their passing results; the required schema fixture was updated and its six tests passed.
- A separate owned local database was reset through the generated migration. Recent-form and snapshot suites: 16 passed, covering ten-game cutoff, shorter samples, sides/pairs, stopped/unsettled games, helper API refusal and frozen rank versus live form. Types regenerated from the replayed database.
- Full workspace/Edge typecheck passed. Lint: 29 tasks passed before the migration was staged; corrected migration/ACL parity and final root oxlint then passed. Formatting and diff checks passed. Required review and simplify completed with no unresolved in-scope issue.
- Full database lint retains 159 pre-existing function reports. The isolated database produced an identical report with the changed RPC definitions reverted; final definitions were restored. None of the three changed functions appears in those reports. This is a baseline limitation, not a green full DB-lint claim.
- Every referenced image matches its manifest hash. Public publication is checked against the exact gallery commit and all original assets, followed by a browser check of the current screens.

## Limits and release boundary

Fictional local people, games and moderation records only. This illustrated tour is not an exhaustive audit of every loading/error/permission/lifecycle state. Android, enlarged text, light theme, physical geolocation, camera/provider delivery and store artifacts are not visually verified in this requested Dark/Default pass. Retained captures are identified rather than claimed as new.

The app and server migration are committed locally. Production database deployment, app push, OTA and store release are separate from publishing this gallery. The new client requires the server migration first. All task-owned databases, Metro and simulator were stopped; retained development data and other sessions' services were preserved.

## PD colors and series verification

Positive displayed PD is green, negative PD uses the canonical coral/red result color, and zero or no sample is neutral. Signed percentages remain the non-color signal. The existing whole-match calculation remains separate from rolling recent form. Tapping the actual Luis result was verified in native iOS Dark/Default: its three games total 27 scored and 31 conceded, so the expanded and collapsed row both show red PD −6.9%. Positive neighboring rows are green. All nine current PNGs were visually inspected.

This follow-up passes nine shared PD tests, 35 native tests, full workspace/Edge typecheck and all 30 lint tasks. A dedicated expanded-series test keeps +2.3% for the selected three-game match while recent form independently shows +10%. No new API/schema/server changes. Review and simplify completed with no unresolved in-scope finding; owned runtime stopped before committing. Previous database baseline evidence remains applicable to the unchanged server migration.

## 48-hour score confirmation and reminders

App commit: `b53a1788df6767818b1af2b9b568e9c1682670fd`. Three original iOS simulator captures refresh League home, score review and the dispute sheet, inspected in Dark mode at app Default text size and iOS default Dynamic Type (large). A Tuesday 3:19 PM report displays Thursday 3:19 PM as its automatic-confirmation deadline. Disputes keep their separate 24-hour correction agreement window. Other captures are retained unchanged with their existing provenance.

The review schedule is push on report, push plus enabled results email at hour 24, and push only six hours before the hour-48 deadline. Confirmed/disputed games suppress pending reminders; rotating doubles targets the actual opposing players. Server-side and Edge tests prove scheduling, delivery posture, retry dedupe and stale suppression; simulator screenshots prove the deadline and dispute UI, not real push/email provider delivery. No real recipient was emailed or pushed during verification.

The migration extends only pending played games and does not reopen settled results. Production backend deployment remains a separate staging-first release; publishing this gallery does not deploy the app or server.

Verification for this change: 172 shared notice/job tests, 116 notice delivery tests, 43 worker tests and all 139 affected database contracts pass across final replay and scoped reruns. Full workspace/Edge typecheck, generated type drift, schema contracts, touched lint and migration parity pass. Database lint retains 156 prior function reports, removes three prior clock-volatility reports and introduces none. The final clean migration reset succeeds. One earlier seeded reset timed out waiting for storage health; the final no-seed reset completed, with the standard nonmember fixture restored for the authorization tests. Both owned local stacks and native tooling were stopped before the app commit.

## Final score guidance and capture correction

App commit: `257888a12979c00e1e876085ea07a116a0080674` (following the server/reminder commit `b53a1788df6767818b1af2b9b568e9c1682670fd`). The mobile score-due and report-form explanations, authored web help and generated help search index now all use 48 hours. Four further original iOS Dark/Default captures replace the score-due view, report form, scrolled date/venue section and selected appearance preferences. The date/venue capture visibly shows the 48-hour statement above the fixed footer. Dispute agreement copy intentionally remains 24 hours. All four originals were inspected; 49 native report/stage tests and full workspace/Edge typecheck pass, as do lint, formatting and help content checks. No Android testing was run, per the owner's explicit scope. Owned runtime was stopped before committing. Backend/mobile/web deployment remains separate from this published gallery.


## Record and navigation readability

App commit: `a51a03869daeaf437dd45fe0f568f457dbd15c52`. Season record headers replace point totals with the full season’s PD%; Recent form keeps PD% and Last X games without point totals or an explanation paragraph. The individual fixture visibly separates season PD +8.6% from recent PD +10% over ten games; the pair uses all nine available games. Recap leaderboard rows group locations by format, keep ranks aligned at the right and retain their frozen snapshot destinations. Conduct reports open directly from the entire dated/status row, without View report buttons.

Current native verification: iPhone 17 Pro / iOS 26.4, Dark, Default app text and system content size large (iOS default). Original captures inspected; report-row navigation opens the correct challenged report, match expansion retains red −6.9% for that series, and the recap destination opens the selected city/format. Fifty-three focused native tests, full workspace/Edge typecheck and all 30 lint tasks pass; the final recap touch-target adjustment also passes its 16 tests and mobile typecheck. Review and simplify found no unresolved in-scope issue. No Android testing, app OTA, store release or production backend deployment was performed. The owned local runtime was stopped before committing.

## Search and season story coverage

The current one-page tour now contains 83 screens. Six original iOS Dark/Default leaderboard captures replace the three pre-search pool views and add search results, no matches and partner search. They come from the leaderboard-search verification at `ff4c8ea62` and show synced per-player DUPR, independent pair PD and preserved published ranks. Transitioning navigation and Refreshing-banner captures were inspected and excluded.

Nine original recap-design captures add the shared weekly story opening, native Default season opening and all seven mobile-web season scenes: opening, record, final position, standout week, qualifying result, DUPR journey and closing/replay. These are explicitly labeled fictional ladder fixtures. The shared recap-player feature is committed in `cd4719716`; the originating design pass records working-tree source hashes with base HEAD `234041146` in its source-fingerprint.json. They are existing verification captures inspected for this gallery update, not a new device test. Later `8cb5f13da` changes identity erasure and per-game rotating result presentation; the chosen own-player season scenes do not demonstrate those states. Populated native Circuit League weekly/season stories remain an unpictured case; the existing Circuit League summary and ranking views remain included.

Gallery-only update: no app code, backend, notification delivery or release changed. All referenced image hashes and gallery/manifest ordering were checked before publication.
