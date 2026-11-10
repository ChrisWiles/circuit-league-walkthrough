# Walkthrough refresh: interim report

Published draft prepared November 10, 2026. The refresh goal is still in progress.

## What is ready to review

The gallery now contains **222 images in 42 chapters**, reduced from 318 screenshot positions. Repeated scheduling, score reporting and Scan steps link to a shared flow. Format-specific examples remain for fixed partners, changing partnerships, team availability and opposing-player score confirmation. Existing chapter links remain. Old numbered screenshot links open the original gallery. Named links for replaced interim images open the 239-image interim archive, preserving their original captures and captions. Both archives have frozen manifests; 557 archived references match their stored hashes. New screenshot links use image names.

Score disagreement now follows native Alex reporting 11–7, native Ben proposing 11–9 on his simulator, and native Alex accepting. Alex then files the final correction request successfully in the app; the open review item leaves the counted score intact. The rotating sequence now uses one consistent report: native Alex reports all three games, Ben confirms his opposing games 2 and 3, and Chris’s local test-call confirmation finishes game 1. Ben’s freshly exported result card shows 11–8, 11–9 and 7–11; it was not sent externally.

New native captures now follow Drew through joining, venue choice and expanded map, saving usual times, both agreements and starting two searches. Permission examples include optional check-in, its saved-off state, and recovery after an actual iOS notification denial. The prepared team offer and grouped confirmed roster also use the current design, with the intermediate duplicated views linked to shared examples.

New native captures also replace late cancellation, joint call-off, absence reporting and the opposing answer, player stats and Friends lists, the rotating board, badge details, and Pause with retained bookings. Alex and Ben use separate simulators for responses. Pausing until November 16 and ending early were checked in the database; automatic date-based return was not tested.

New native captures show direct and link challenges, participant responses, choosing a time, withdrawing a link, cancellation, singles scoring and correction, following after a match, the fixed-team roster, rotating lineups, shared availability, season details and badges. Chat includes blue outgoing bubbles, quick reactions, the expanded emoji picker, a saved heart and reply examples.

## Image review progress

- **103** retained images were captured or exported on app revision `d96da8215` during this refresh.
- **102** earlier images have a scoped source comparison supporting their pictured presentation. This does not reverify their interactions or backend behavior. This group includes the current recap story, whose sources were unchanged through that revision.
- **17** images still require a design comparison or retake. These include waiting guidance, offers, a booked-match detail, partner invitation and ended-team states, same-phone and reconnect recovery, a one-week suggestion and inactivity.

All retained images were visually inspected, including new replacements. No unintended service-error banner was visible in that pass. A private-place image with a transient check was replaced, and a clipped duplicate times grid was removed. Legitimate pending, unavailable-data and dispute states remain when they explain the journey. The historical gallery preserves the earlier publication and is not covered by this refreshed-image claim.

## Audit findings so far

1. **Scheduling fields can be missed.** After accepting a challenge and tapping Set time, the pinned action changes to Save time while the day/time fields remain below the fold. The player must scroll past the participant and rating content. Reveal the first field when entering scheduling, or move the fields above supporting detail. Observed at Default text size on iPhone.
2. **Recent-result targets are narrow.** Ten result buttons fit across a 402-point screen. Their roughly 32-point widths fall short of the project’s 44-point target width, although vertical hit slop expands height. Consider a horizontal list with wider targets and verify with VoiceOver and enlarged text. Source and screenshot finding; missed taps were not measured.
3. **Team dates need investigation.** One next-week view showed a November 16–22 heading with a first row dated November 15 in Hawaii time. The cause and production impact are not established. Retake and check the date/time-zone boundary before treating that example as current proof.
4. **Reactions need target-size verification.** Earlier chat quick reactions measured about 39 points. The refreshed gallery shows the full picker and saved reaction, but Android, VoiceOver and enlarged-text operation remain untested.
5. **Acceptance is clearer in the new design.** Current challenge captures show response counts, participant statuses and “Your response needed.” The walkthrough now includes these states and distinguishes accepting from agreeing on a time. A broader usability check is still needed.

6. **Recovery responses start below the fold.** The call-off response buttons initially sit beneath the floating tabs; scrolling reveals Agree and Keep the match. Put a pending decision ahead of supporting detail or provide a primary action that reveals it. The controls remain reachable.
7. **Empty rank heading adds noise.** Cancelled and not-played fixtures show Current ranks above Players even when neither player has a local rank. Omit the empty heading or group the no-rank explanation meaningfully.

8. **Notification prompts repeat after Not now.** Drew dismisses the initial matchmaking explanation, then immediately sees a second notification sheet on League home. Their device-local dismissal records are separate. Respect the recent dismissal before showing another reminder. Both searches remain on.
9. **Settings recovery needs a device check.** After denying notifications, Open Settings from Drew’s first match launches Settings at its root on this simulator. Verify the destination on a physical device and provide useful fallback guidance.

The expanded venue map now keeps its title and Close map clear of the status bar at Default size on the tested iPhone simulator, resolving that earlier observation for this configuration.

10. **Partial review feedback can be missed.** After Ben confirms games 2 and 3 of a rotating report, Your answer is saved appears above his scrolled viewport. Game 1 remains pending for an opposing player, while the stage says Score sent. Keep the acknowledgement near the action or reveal it, and name the games and remaining reviewers.

These are audit observations and recommendations, not app fixes made by this publication.

## Capture provenance and limits

The `nov10-*` captures use the isolated local app at `d96da8215`, except `nov10-recap-*`, captured at `01b4fa297` with recap sources subsequently checked through `d96da8215`. Older captures use multiple earlier revisions; their detailed capture history is retained in [the earlier evidence log](evidence-history-20261109.md). [The manifest](current-captures.json) lists every retained file and its SHA-256 hash.

The current Court explorer detail uses a display-only award inserted into the isolated fictional fixture; its earning logic was not exercised. Venue founder shows two existing fictional venue awards.

All native captures use fictional local fixtures, an iPhone 17 Pro simulator, iOS 26.4, Dark appearance and Default app text size. Some fixtures were prepared through local authenticated calls. Scan participants were added by test calls; camera recognition was not exercised. Opposing score and challenge responses were exercised on a second simulator where described. The private-place capture is an unsent draft. Share sheets were opened without sending to external recipients.

No production gameplay, physical attendance, push/email delivery or external DUPR submission is established. Android, VoiceOver, enlarged app text and a full iOS Dynamic Type sweep remain outside the completed evidence. Source comparisons establish only the specific pictured state, not every action available from it.

## Remaining work

Finish the 17 pending design checks and necessary retakes, review new commits against the final image set, consolidate the final audit, and validate and republish the completed tour. The authorized Docker restart restored the capture service. Current capture work continues against the isolated committed revision, preserving concurrent app edits.

## November 10 local update checks

The local gallery verifier passed all 222 file paths, order entries and SHA-256 hashes. Chromium checks at 360, 390 and 1280 pixels found 42 chapters, 222 images, no page overflow, no broken chapter anchors and no page errors. A current image link opened the intended viewer; keyboard navigation and Escape restored focus. The old `#s100` link opened its original archived image. Mobile and desktop page captures and a loaded challenge viewer were visually inspected. All 239 previously published named image links have a current or archived target. Two replaced named links opened and loaded their original archived images; their archived chapter data and all 557 historical image hashes were also checked. These checks cover the walkthrough website, not app accessibility or every native interaction.
