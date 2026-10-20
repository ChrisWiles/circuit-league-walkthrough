# Current League walkthrough evidence

The single tour follows the League player journey across 68 native iOS screens: introduction, setup, play settings, venues, partnerships, offers, scan, chat, score reporting/review, populated standings, records, blocked players and conduct. All screens appear on one page; the image viewer supports Previous, Next, Close and keyboard navigation. There is no sticky chapter navigation, version comparison or link to an older tour. Retired tour URLs redirect to the current root.

App commit: `211db73b87d0fa1fe0c58776fbf78e0293c0be27` (local). The tour contains 32 refreshed captures and 36 retained current screens with their original provenance.

## Leaderboard change

Singles and Doubles show individual names without profile photos, initials or provisional badges. Teams show each partner on a separate alphabetical line. The pinned own record uses the same identity treatment. Rank, record, movement, qualification guidance and the current-player highlight remain. Tapping a Teams row was verified to open its pair record, where Provisional remains visible. Ranking and eligibility rules, APIs and database schemas are unchanged.

The latest correction extends own-player highlights across the full list width with 16-point horizontal content padding. You is vertically centered beside the entire record, including pairs and the pinned own record. Five original iOS Dark/Default captures were refreshed for this correction; other capture revisions remain identified in the manifest.

## Native verification

Current checks used the retained iPhone 17 Pro simulator with iOS 26.4, OS Dark appearance, Default app text size and iOS content size large (the system default). Original simulator PNGs were visually inspected for all three boards, the pinned record, list end, filter sheet and pair-record navigation. Preferences show Dark and Default selected. Current captures also refresh the wider tour's home, settings, venue, partner, score and chat surfaces. The camera was not exercised and print/share, legal acceptances and message sends were not submitted in this pass.

The first development-client load failed before the bundler was ready; restarting the installed client loaded the current source. An initial filter tap occurred before navigation had settled; a subsequent settled interaction opened the sheet. Some exact-text selectors did not see a visible modal button; the reply capture used one coordinate grounded in the visible button. Temporary development refresh and iOS keyboard-tip overlays were excluded from the final gallery images.

Capture provenance in current-captures.json distinguishes refreshed images from retained unchanged current screens, with original capture dates, hashes and source revisions. Retained screens represent current alternative states, not historical comparisons. All people, results and moderation scenarios are fictional local fixtures. A fictional opposing account submitted the pending score used for the review/dispute examples through the real score RPC; it was not confirmed from the reporter's account. The temporary offer-display fixture was restored after capture. Scan captures use temporary fictional display states for waiting, ready and four-player sessions; alphabetical names preserve their actual side/rotation labels. The original session states were restored and Start match was not submitted.

## Checks

- Board and stats component suites: 2 passed, 33 tests passed.
- Shared needs-you roster suite: 45 tests passed.
- Full npm run lint:typecheck: passed, including all workspace and Edge checks.
- Full npm run lint: all 30 tasks passed for the highlight correction.
- Changed-file formatting and git diff --check: passed.
- Required code review and simplify: completed against the final app content; no unresolved in-scope findings.
- Gallery: matched page and opened-viewer checks at 360×800, 390×844 and 1280×900, with current assets and retired-tour redirects checked before publication.

## Limits

This is a complete illustrated player tour, not an exhaustive visual audit of every loading, error, refusal, permission or lifecycle state. Android, enlarged app/system text, light theme, physical geolocation, provider delivery and store artifacts were not visually verified in this explicitly requested iOS Dark/Default pass. Unchanged retained screenshots are identified in the manifest rather than claimed as newly captured. App changes are committed locally; publishing the gallery does not push or deploy the app, backend, OTA update or store release.

## Single-season filter correction

The native season picker is hidden when the catalog offers only one season. Category changes preserve that season. Multiple-season selection and historical snapshot behavior retain their existing tests. The new original iOS Dark/Default filter capture was inspected; all 17 board tests passed, full typecheck passed, and the sole lint test-style finding was corrected with full-root oxlint passing afterward. Other 29 lint tasks passed. No web board-picker equivalent, API/schema, telemetry or communication changes.
