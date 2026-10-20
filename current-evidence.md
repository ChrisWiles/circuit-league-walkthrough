# Current League walkthrough evidence

The single current tour follows the League player journey across 70 native iOS screens. All screens are on one page, with an optional enlarged viewer. There is no historical comparison or chapter-link navigation. Retired tour URLs redirect to the current root.

App source: `5883567457b016b86685dfdc7afb90cc2faa04c5` (local commit). The manifest distinguishes 35 current refreshed captures from 35 retained unchanged screens with original provenance. This update adds nine original simulator captures: three boards, filters, list end, individual and pair records, match history and an expanded match series. Eight replace earlier current screens and one adds the expanded series. Images are original native pixels.

## Recent PD

Leaderboard and pinned own rows show PD% and the actual sample count, up to ten games. The selected season/category/pool bounds the current sample; each fixed pair has its own sample. Individual Doubles includes fixed and rotating games. Only confirmed fully played games count; voided, disputed, unplayed and stopped games do not. A finished game before a session stop remains eligible. Zero eligible games says No PD yet. All points are combined before dividing: (scored − conceded) ÷ total × 100. Recent form is current within the season even on a historical/geographic rank board; rank and published season records remain frozen. Player records explain the distinction and show points. Match history has a per-match PD value from its eligible games. PD does not change ranking or label players as smurfs.

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
