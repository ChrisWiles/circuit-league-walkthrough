# Walkthrough refresh: interim report

Published draft prepared November 10, 2026. The refresh goal is still in progress.

## What is ready to review

The gallery now contains **239 images in 42 chapters**, reduced from 318 screenshot positions. Repeated scheduling, score reporting and Scan steps link to a shared flow. Format-specific examples remain for fixed partners, changing partnerships, team availability and opposing-player score confirmation. Existing chapter links remain; old numbered screenshot links open the earlier gallery. New screenshot links use stable image names.

New native captures show direct and link challenges, participant responses, choosing a time, withdrawing a link, cancellation, singles scoring and correction, following after a match, the fixed-team roster, rotating lineups, shared availability, season details and badges. Chat includes blue outgoing bubbles, quick reactions, the expanded emoji picker, a saved heart and reply examples.

## Image review progress

- **44** retained images were captured on app revision `d96da8215` during this refresh.
- **107** earlier images have a scoped source comparison supporting their pictured presentation. This does not reverify their interactions or backend behavior. This group includes the current recap story, whose sources were unchanged through that revision.
- **88** images still require a design comparison or retake. These include older setup and offer screens, recovery flows, some team backgrounds, badges and result details.

All retained images were visually inspected, including new replacements. No unintended service-error banner was visible in that pass. A private-place image with a transient check was replaced, and a clipped duplicate times grid was removed. Legitimate pending, unavailable-data and dispute states remain when they explain the journey. The historical gallery preserves the earlier publication and is not covered by this refreshed-image claim.

## Audit findings so far

1. **Scheduling fields can be missed.** After accepting a challenge and tapping Set time, the pinned action changes to Save time while the day/time fields remain below the fold. The player must scroll past the participant and rating content. Reveal the first field when entering scheduling, or move the fields above supporting detail. Observed at Default text size on iPhone.
2. **Recent-result targets are narrow.** Ten result buttons fit across a 402-point screen. Their roughly 32-point widths fall short of the project’s 44-point target width, although vertical hit slop expands height. Consider a horizontal list with wider targets and verify with VoiceOver and enlarged text. Source and screenshot finding; missed taps were not measured.
3. **Team dates need investigation.** One next-week view showed a November 16–22 heading with a first row dated November 15 in Hawaii time. The cause and production impact are not established. Retake and check the date/time-zone boundary before treating that example as current proof.
4. **Reactions need target-size verification.** Earlier chat quick reactions measured about 39 points. The refreshed gallery shows the full picker and saved reaction, but Android, VoiceOver and enlarged-text operation remain untested.
5. **Acceptance is clearer in the new design.** Current challenge captures show response counts, participant statuses and “Your response needed.” The walkthrough now includes these states and distinguishes accepting from agreeing on a time. A broader usability check is still needed.

These are audit observations and recommendations, not app fixes made by this publication.

## Capture provenance and limits

The `nov10-*` captures use the isolated local app at `d96da8215`, except `nov10-recap-*`, captured at `01b4fa297` with recap sources subsequently checked through `d96da8215`. Older captures use multiple earlier revisions; their detailed capture history is retained in [the earlier evidence log](evidence-history-20261109.md). [The manifest](current-captures.json) lists every retained file and its SHA-256 hash.

All native captures use fictional local fixtures, an iPhone 17 Pro simulator, iOS 26.4, Dark appearance and Default app text size. Some fixtures were prepared through local authenticated calls. Scan participants were added by test calls; camera recognition was not exercised. Opposing score and challenge responses were exercised on a second simulator where described. The private-place capture is an unsent draft. Share sheets were opened without sending to external recipients.

No production gameplay, physical attendance, push/email delivery or external DUPR submission is established. Android, VoiceOver, enlarged app text and a full iOS Dynamic Type sweep remain outside the completed evidence. Source comparisons establish only the specific pictured state, not every action available from it.

## Remaining work

Finish the 88 pending design checks and necessary retakes, review new commits against the final image set, consolidate the final audit, and validate and republish the completed tour. Docker’s API is currently timing out, which blocks further local app captures; this interim site publication is independent of that service.

## Interim publication checks

The local gallery verifier passed all 239 file paths, order entries and SHA-256 hashes. Chromium checks at 360, 390 and 1280 pixels found 42 chapters, 239 images, no page overflow, no broken chapter anchors and no page errors. A current image link opened the intended viewer; keyboard navigation and Escape restored focus. The old `#s100` link opened its original archived image. Mobile and desktop page captures and a loaded challenge viewer were visually inspected. These checks cover the walkthrough website, not app accessibility or every native interaction.
