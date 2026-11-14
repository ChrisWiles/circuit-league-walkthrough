# Walkthrough refresh: interim report

Unpublished working update, November 10, 2026. The live interim publication is commit `433f573` with 222 images. The local draft now has 218 images; the refresh goal is still in progress.

## What is ready to review

The local gallery now contains **218 images in 42 chapters**, reduced from 318 screenshot positions. Repeated scheduling, score reporting and Scan steps link to a shared flow. Format-specific examples remain for fixed partners, changing partnerships, team availability and opposing-player score confirmation. Existing chapter links remain. Old numbered screenshot links open the original gallery. Named links for replaced interim images open the 239-image interim archive, preserving their original captures and captions. All three earlier publications have frozen manifests; 779 archived references match their stored hashes. New screenshot links use image names.

Score disagreement now follows native Alex reporting 11–7, native Ben proposing 11–9 on his simulator, and native Alex accepting. Alex then files the final correction request successfully in the app; the open review item leaves the counted score intact. The rotating sequence now uses one consistent report: native Alex reports all three games, Ben confirms his opposing games 2 and 3, and Chris’s local test-call confirmation finishes game 1. Ben’s freshly exported result card shows 11–8, 11–9 and 7–11; it was not sent externally.

New native captures now follow Drew through joining, venue choice and expanded map, saving usual times, both agreements and starting two searches. Permission examples include optional check-in, its saved-off state, and recovery after an actual iOS notification denial. The prepared team offer and grouped confirmed roster also use the current design, with the intermediate duplicated views linked to shared examples.

New native captures also replace late cancellation, joint call-off, absence reporting and the opposing answer, player stats and Friends lists, the rotating board, badge details, and Pause with retained bookings. Alex and Ben use separate simulators for responses. Pausing until November 16 and ending early were checked in the database; automatic date-based return was not tested.

New native captures show direct and link challenges, participant responses, choosing a time, withdrawing a link, cancellation, singles scoring and correction, following after a match, the fixed-team roster, rotating lineups, shared availability, season details and badges. Chat includes blue outgoing bubbles, quick reactions, the expanded emoji picker, a saved heart and reply examples.

## Image review progress

A new 60-file app design commit, `3c0ffd47b`, landed during the remaining-image pass. It changes shared backgrounds, artwork headers, setup, offers, scoring and several other surfaces. The isolated app has moved to that committed target without a native rebuild; its shared package build passed. Earlier freshness decisions through `d96da8215` are preserved as history, but do not establish the newest design.

The user also requested the in-progress screens. A fixed snapshot of 17 tracked and 15 new mobile source files was copied into the isolated checkout, preserving the original working tree. These are design-preview captures, not a committed or released app version. Later edits remain outside that snapshot until the next comparison.

The isolated capture app now also contains the exact mobile changes committed in `faa81db03`, preserving the requested rank-history implementation. Twenty-five inspected retakes/exports update the booked match, cancellation outcomes, final result and correction status, notifications, and conduct challenge. The second conduct-list example is removed; a separate no-show detail preserves the report-type difference. The newer committed Friends/venue-board changes (`5d2ae9139`) are now in the capture app and all three Friends tabs are retaken. The board and home views now have current captures. The category removal is now committed as `e7e327827`; its migration has been applied transactionally to the backed-up owned review database, and the matching committed shared sources are built. The focused rotating-category SQL contract passes with rollback. Shared development and production databases are untouched.

The next batch replaces 26 more images with current board controls, home/navigation, settings and own-history/badge views. Four positions are removed: two obsolete format/category suggestions, a repeated preference selection and the repeated final individual board. Both individual and fixed-partnership final standings remain.

Against the reviewed design targets:

- **84** images are current native captures on `3c0ffd47b`, its frozen WIP snapshot `51045dc15228`, or the subsequent `faa81db03` and `5d2ae9139` mobile/shared overlays with the committed category migration on the isolated review DB, with source-specific comparisons for unchanged pictured branches. They include current settings, formats, times, venues, team detail, social tabs, records, badges, QR, Scan drafts and score recovery.
- **9** images have scoped source comparisons supporting their pictured presentation: seven nonempty chat views including emoji reactions and two ready full-screen story pages. The result card is now a fresh export from the committed-design rotating run. This does not renew interaction or backend proof.
- **125** images require a renewed source comparison or retake. This is a review queue, not a claim that every image must be replaced. Shared headers and backgrounds affect many retained views.

Before this new commit, the remaining pass had refreshed waiting suggestions, inactivity recovery, one-week approval, invite waiting, ended-team presentation and invitation-specific setup. The old-revision queue had narrowed to five image decisions; the prepared singles offer was also exercised through both players accepting. Those runtime facts remain useful, while their pictures now need the new design check.

All retained images were visually inspected, including new replacements. No unintended service-error banner was visible in that pass. A private-place image with a transient check was replaced, and a clipped duplicate times grid was removed. Legitimate pending, unavailable-data and dispute states remain when they explain the journey. The historical gallery preserves the earlier publication and is not covered by this refreshed-image claim.

## Requested profile-history update

The local app change shows exact position and a smaller Top % on both own and other-player weekly-history charts. The line plots rank: #6 of 8 to #6 of 10 stays level while Top 75% becomes Top 60%. Missing populations omit the percentage, and unlisted weeks remain gaps. Two current native captures show Ben reviewing Alex’s early and recent Season 1 weeks; point navigation opened the selected historical board. The combined chart labels were also inspected at Large and Larger app text sizes, with Default restored afterward. This targeted check does not cover other gallery screens or OS Dynamic Type extremes.

Focused shared tests passed (21), native stats tests passed (39), scoped lint/format and the shared typecheck passed. A fresh mobile typecheck passes on the current main checkout. The app change is included in this local checkpoint; no app push or release is performed. Other-player summary labels elsewhere retain their existing Top % presentation.

## Audit findings so far

1. **Scheduling fields can be missed.** After accepting a challenge and tapping Set time, the pinned action changes to Save time while the day/time fields remain below the fold. The player must scroll past the participant and rating content. Reveal the first field when entering scheduling, or move the fields above supporting detail. Observed at Default text size on iPhone.
2. **Recent-result targets are narrow.** Ten result buttons fit across a 402-point screen. Their roughly 32-point widths fall short of the project’s 44-point target width, although vertical hit slop expands height. Consider a horizontal list with wider targets and verify with VoiceOver and enlarged text. Source and screenshot finding; missed taps were not measured.
3. **Week labels obscure the local boundary.** A next-week team view showed a November 16–22 heading with a November 15 Hawaii row. Current native times show the same Sunday boundary. Source `leagueWindowsByDay` deliberately groups every local day intersecting a Central League week, so this is not evidence of an incorrect instant. Make the displayed range and local-week explanation agree; the current wording can still confuse a player planning in Hawaii.
4. **Reactions need target-size verification.** Earlier chat quick reactions measured about 39 points. The refreshed gallery shows the full picker and saved reaction, but Android, VoiceOver and enlarged-text operation remain untested.
5. **Acceptance is clearer in the new design.** Current challenge captures show response counts, participant statuses and “Your response needed.” The walkthrough now includes these states and distinguishes accepting from agreeing on a time. A broader usability check is still needed.

6. **Recovery responses start below the fold.** The call-off response buttons initially sit beneath the floating tabs; scrolling reveals Agree and Keep the match. Put a pending decision ahead of supporting detail or provide a primary action that reveals it. The controls remain reachable.
7. **Empty rank heading adds noise.** Cancelled and not-played fixtures show Current ranks above Players even when neither player has a local rank. Omit the empty heading or group the no-rank explanation meaningfully.

8. **Notification prompts repeat after Not now.** Drew dismisses the initial matchmaking explanation, then immediately sees a second notification sheet on League home. Their device-local dismissal records are separate. Respect the recent dismissal before showing another reminder. Both searches remain on.
9. **Settings recovery needs a device check.** After denying notifications, Open Settings from Drew’s first match launches Settings at its root on this simulator. Verify the destination on a physical device and provide useful fallback guidance.

The expanded venue map now keeps its title and Close map clear of the status bar at Default size on the tested iPhone simulator, resolving that earlier observation for this configuration.

10. **Partial review feedback can be missed.** After Ben confirms games 2 and 3 of a rotating report, Your answer is saved appears above his scrolled viewport. Game 1 remains pending for an opposing player, while the stage says Score sent. Keep the acknowledgement near the action or reveal it, and name the games and remaining reviewers.

The current conduct-detail layout improves action discovery: Challenge this report stays pinned above the floating tabs at Default text size. Alex submitted an explicitly fictional explanation in the native app; a fresh local read confirms challenged status and the saved text. Its receipt and subsequent under-review screen are captured. This does not close the separate match call-off response finding.

These are audit observations and recommendations, apart from the explicitly requested profile-history implementation described above.

11. **Leaderboard controls delay comparison.** With two familiar-venue shortcuts, area selection, pool choices, filters and Near you, the initial402-point view exposes little of the first result row. Scrolling reveals the list. Keep the shortcuts useful while giving comparison rows more initial space.
12. **Empty-board reasons can start below the viewport.** The early Season2 individual Doubles view initially leaves a large blank area above its empty explanation; scrolling reveals0listed,5needed and the viewer’s remaining-match requirement. Show that reason and recovery closer to the controls.

## Capture provenance and limits

The gallery combines several local source revisions. Current capture batches include the earlier `3c0ffd47b` and frozen WIP screens, the `faa81db03` recovery/scoring captures, and the latest `5d2ae9139` home, board, settings and season captures. The latter use the committed shared package and category migration on the isolated review database. The requested rank-history implementation is an additional local app change. Earlier retained pictures include `d96da8215` and older revisions and still need their recorded comparison or retake. Detailed historical provenance remains in [the earlier evidence log](evidence-history-20261109.md); [the current manifest](current-captures.json) lists every retained file and hash. Capture dates alone do not establish the app revision.

The current Court explorer detail uses a display-only award inserted into the isolated fictional fixture; its earning logic was not exercised. Venue founder shows two existing fictional venue awards.

All native captures use fictional local fixtures, an iPhone 17 Pro simulator, iOS 26.4, Dark appearance and Default app text size. Some fixtures were prepared through local authenticated calls. Scan participants were added by test calls; camera recognition was not exercised. Opposing score and challenge responses were exercised on a second simulator where described. The private-place capture is an unsent draft. Share sheets were opened without sending to external recipients.

No production gameplay, physical attendance, push/email delivery or external DUPR submission is established. Android, VoiceOver, enlarged app text and a full iOS Dynamic Type sweep remain outside the completed evidence. Source comparisons establish only the specific pictured state, not every action available from it.

## Remaining work

Complete the renewed comparison against committed `faa81db03` and the remaining coherent user WIP, retake changed presentations, consolidate the final per-image audit, and validate and republish the completed tour. Current capture work uses the isolated source overlay, preserving concurrent app edits. The recovery retakes read earlier native transitions except for Alex’s newly submitted conduct challenge. A new rotating match separately exercises native three-game reporting and Ben’s opposing confirmations on the committed design; Chris’s last confirmation uses an authenticated local test call. Its actual app-generated export is fresh, with the native share sheet dismissed without sending. Provider delivery and adjudication remain untested.

## Current local gallery checks

The 218-image draft passes all current path, order and hash checks, and all 779 archived references match their hashes. Browser checks at 360×800, 390×844 and 1280×900 find 42 chapters, 218 images, no overflow, no broken chapter anchors and no page errors. Loaded Team doubles final-board viewers were visually inspected at all three sizes. Viewer keys and Escape restore focus; both published named-link sets (239 and 222 IDs) have current or archived targets. An original numeric link and three retired named links load their proper archives. These are local checks; final review and publication remain outstanding.

## Prior 222-image publication checks

The local gallery verifier passed all 222 file paths, order entries and SHA-256 hashes. Chromium checks at 360, 390 and 1280 pixels found 42 chapters, 222 images, no page overflow, no broken chapter anchors and no page errors. A current image link opened the intended viewer; keyboard navigation and Escape restored focus. The old `#s100` link opened its original archived image. Mobile and desktop page captures and a loaded challenge viewer were visually inspected. All 239 previously published named image links have a current or archived target. Two replaced named links opened and loaded their original archived images; their archived chapter data and all 557 historical image hashes were also checked. These checks cover the walkthrough website, not app accessibility or every native interaction.

## Earlier capture-batch evidence

The earlier 220-position manifest passed its path, order and hash checks before further consolidation. Waiting-clock and inactivity states were prepared directly in the isolated fixture. Drew exercised both widening buttons natively; Alex restarted an idle search natively. A separately prepared one-week offer was approved natively, with an added `is_one_week`/`is_offer_time` window while current and next usual Thursday windows stayed unchanged.

The current invitation-specific setup uses a separate Noah draft and stops before completing membership or accepting the invite. Alex’s ended partnership is a display-only fixture; no actual account departure, historical retention or removal operation is proved by it. The new score guard uses Alex’s native report followed by Ben signing in on the actual reporting simulator. The DUPR reconnect example changes only a local delivery fixture on an existing send-to-DUPR match and does not demonstrate a provider failure or external reconnect.

## Frozen work-in-progress pass

Native captures now include the new explicit Push/Email notification layout in two readable views, current Friends tabs, and the pinned Save times footer. Ben saved Wednesday 6–9 PM in the native editor; current and next-week rows were checked as usual times. Alex’s record shows the current season hierarchy and badge/history views; the separate Ben singles record has three losses and correctly shows the viewer Alex’s 3–0 head-to-head from three native-confirmed local test matches.

A repeated generic expanded-result screenshot was removed: its shared control is now linked to the current fixed-team result. The frozen latest published 222-image gallery was also preserved, so its newer named screenshot links retain their original images and captions.

The ordinary settings capture now shows a linked synthetic DUPR account. The separate reconnect recovery image remains labeled as a simulated provider problem. Refreshing local fixture entitlement timestamps and resetting that test delivery row did not contact DUPR or prove provider verification.

A further UX observation: the Brought to the League tab says No friends yet even though the same player has a followed player and a follower. Use a referral-specific empty-state heading, such as No friends brought yet, to distinguish invitation credit from following. This is a provisional observation against the frozen WIP snapshot.

## Paused checkpoint

The user requested local commits and a stop. The goal remains paused and the site has not been republished. New app commits `e44eb7ef8` and `4d6915883` arrived after the latest capture overlay and still require comparison; the 84 current decisions refer to the reviewed source target, not those newer commits.

The latest coherent Scan sequence replaces nine images and adds the native transition into the match. Alex creates and edits the rotating plan; Ben confirms natively; Chris and Diego confirm through authenticated local test calls; Alex starts natively. A fixed-team editor draft shows the meaningful format difference without repeating the flow. Separate cancellation evidence uses a prepared open plan. Camera recognition, push delivery, physical play and provider submission remain unverified.

Ben’s Scan review shows rotation slots but no named game partnerships before confirmation. Preview the first partnership or offer See all games before Confirm, so guests can understand the arrangement they accept. Per-player waiting and Confirmed states make response ownership clearer.

A newer Emerson join sequence is only partly captured through saved venues, usual hours and the unaccepted agreements screen. It is excluded from this coherent gallery checkpoint. The clean onboarding simulator is prepared but not signed in; notification first-ask retakes remain unfinished. Raw evidence is retained locally for resumption.
