# Walkthrough evidence

## Current draft refresh (November 9)

The 316-position gallery incorporates later local iOS captures and two service-error images were removed from the walkthrough at the user’s request. Error observations remain in the separate audit. An OCR pass screened the 318 prior positions for common error text; it is not a substitute for visual review. Some earlier captures still need recapture, and the gallery combines separate fictional sessions and app revisions. It does not establish production behavior, external delivery, Android or screen-reader coverage.

## Walkthrough viewer (November 9)

A 390-pixel local browser check opened a direct image link and a gallery image, moved to the previous screen with the keyboard, and closed with Escape. A later fix also opens a screen link when its address changes while the gallery is already open; both occurrences of the reused season and Scan images opened in the correct chapters and restored focus after Escape. Both returned focus to the button for the screen last viewed. No page errors occurred. An automated WCAG-tagged check at 390 pixels reported no violations on the page or open viewer in light and dark modes after contrast and keyboard-scroll fixes. A focused viewer advanced with the arrow key. The check used Chromium; Safari, screen-reader and touch operation were not tested. A later 390-pixel check of the 294-position draft reported no WCAG-tagged automated violations on the page or open Scan viewer in light and dark modes, and no page errors. These checks do not assess the app screens inside the images.

## Team invitation (November 9)

In the isolated iOS app, Casey selected Women’s doubles and created a fictional partner invitation. The native share sheet opened and the League home showed a seven-day invitation waiting for a recipient, with share and cancel actions. The iOS Copy action was pasted into a local test field and included both invitation text and a link. Jade opened that same fictional link on a second simulator and accepted; the app immediately said the team formed. Jade saved Tuesday 6–9 PM and the team page showed both players available then, but still no shared venue. The first venue attempt did not change the saved list. On retry, after selecting the visible Favorite control, Jade saved Mueller; the team page then showed it as shared while matchmaking remained off waiting for both partners to be ready. A later capture of Jade’s cached team times shows Tuesday 6–9 PM and the note that times apply to all her searches; the lower days require scrolling. The team times screen earlier showed a retryable local-service error. After it loaded, Jade used Find another match and the screen said the team’s matchmaking was on. No team match was booked. No external recipient was selected. A local service error and database timeouts occurred; these are observed app states, not independent proof of external delivery. The earlier team-formation and match examples remain separate and need current verification.

## Current season detail (November 9)

The current local Casey record screenshot is reused at the start of Your season as a separate snapshot before the older season sequence. It shows standings updating; it does not establish the final rank or a completed refresh. The older sequence, share payload, larger text and Android remain unverified in the current app.

## Current Scan host setup (November 9)

After a retryable local service failure, Casey searched for Mueller, chose rotating doubles and created a fictional Scan plan in the isolated iPhone app. The host screen showed one of four players, a disabled Start action and Scan a player. The plan initially said results go to DUPR; adding players can change that choice. Three fictional players were then added with simulated actor context through the local server function, not camera scanning. Jade opened that same four-player plan on her own simulator and reviewed it; she confirmed in the app. After an initial refresh failure, her phone and the local database showed her confirmed while the other two guests were still waiting. Maya and Priya were subsequently confirmed through local server functions with simulated actor context, and the local database showed all three guests confirmed. After the host screen refreshed, it showed all three guests confirmed and Ready to start. Casey pressed Start in the app and the resulting match showed the same four fictional players and first rotation. Casey opened See all games to inspect the three planned rotations; the match refresh had failed and the sheet used the content already loaded on the phone. Casey opened score reporting and entered fictional scores of 11–7, 9–11 and 11–8 with the shown partnerships. The first submission returned an error and preserved the form; a retry returned “Circuit is busy.” The capture is a draft, not proof of a sent or confirmed result. Camera recognition, physical attendance and external DUPR submission were not established. The guest chapter reuses Jade’s current review image, while its earlier Priya invitation and cancellation show a different plan.

## A conduct reminder and its destination (November 9)

A fictional Elena–Casey match was prepared in the isolated database; Elena reported it unplayed through the authenticated app function. Casey’s local home showed a report awaiting response, its deadline and the consequence of not challenging it. She tapped the reminder, opened her conduct record, then opened that no-show report. A separate late-cancellation case was already under review. The no-show example was not challenged or decided; the report does not establish physical attendance or external notice delivery. The home initially showed cached content after a local refresh failure, then loaded the reminder. Android, larger text and screen-reader operation were not tested.

## Withdrawing a challenge link (November 9)

Casey created a separate fictional singles link challenge, dismissed the share sheet without sending it, then used the options menu and confirmation to withdraw it. The app showed the withdrawn message, and the isolated database showed closed/withdrawn. The list also displayed the challenge under Closed. The confirmation says people challenged are told; no external message or notification delivery was tested.

## Private-place entry (November 9)

In the isolated iOS app, Casey selected Not listed, entered a fictional place name and manually chose Austin, Texas. The form presented an unverified-city notice during manual entry, a privacy and standings explanation, and a time-zone selector. The screenshot shows the match check still running after local service trouble. No challenge was submitted from this form; the notice was not independently verified against permissions or rating outcomes.

## Challenge link acceptance (November 9)

Casey created a fictional singles link challenge at Mueller in the isolated iOS app. A native share sheet opened, but no link was sent. Jade opened the local test link on a second simulator and accepted; the app then showed both players accepted and offered to set a time. This separate challenge was not scheduled. After an initial database timeout, a later check showed the challenge in needs-time state. Notification delivery, Android and assistive technology were not tested.

## Chat reactions and blue messages (November 9)

On an isolated iPhone simulator with the locally committed chat change `3c8f9969c`, Casey opened a fictional conversation with Riley, held Riley’s message, opened the quick reactions and the eight-choice picker, and selected a heart. The app displayed the heart on the message and its accessibility label said Casey reacted. The reply and message-report examples were also re-opened; no report was submitted. The blue bubble change is local and not a released app build. External notification delivery, Android and screen-reader operation were not tested.

## Direct challenge response (November 9)

On isolated app revision `5faf151a7`, fictional Casey sent a singles challenge to fictional Jade, who opened it on a second iPhone simulator, accepted, selected Tuesday at 8 AM, and saved the time. The app opened a confirmed match and the local challenge record moved to set with a match ID. The venue, ratings and people are fictional. No notification delivery, calendar action, chat message, physical play, DUPR submission, Android, screen-reader or enlarged-text behavior was verified. These screenshots show current local behavior, not a production release.

## Current League home (November 9)

Riley’s local iOS home shows a prepared fictional singles match and the notification-off warning. The match screen eventually loaded after a service delay and displayed the same opponent, venue and time, along with fixture rating values. Opening match chat produced a retryable local-service error; one retry returned to the same error. After the service recovered, chat loaded with an unsent suggested-message draft; the exact trigger for recovery is not established. Opening the inbox remained in a loading state during the capture attempt; notification delivery was not verified.

## Format selection (November 9)

Three captures show fictional Riley choosing and saving Mixed rotating doubles in League settings on isolated app revision `5faf151a7`. Earlier attempts timed out during local service trouble. After checking the local saved state, a retry returned to settings showing Singles and Rotating doubles; reopening How you play showed Mixed selected. Android, VoiceOver and larger text remain unverified. All 255 gallery images loaded at 360, 390 and 1280 pixels with no page errors or document overflow; the saved-state image was inspected in the 390-pixel gallery.

## Settings and usual times (November 9)

Seven iOS captures show the fictional Riley profile’s current League settings, notification preferences, next-week usual times, saved venues and venue detail. Navigation was exercised against isolated app revision `5faf151a7`; no setting was changed in this sequence. The venue detail initially showed a retryable local popular-times error; after the service recovered, its empty-data state appeared and was captured. A populated popular-times state is still needed. The phone’s notification permission was off; the switches do not demonstrate message delivery. All 255 local gallery images loaded at 360, 390 and 1280 pixels without horizontal overflow or page errors. Android, VoiceOver and enlarged text were not tested in this sequence.

## Missed-match report and answer (November 9)

Five captures follow a fictional match prepared directly in the local database. Riley used the app to report that Taylor did not come; Taylor used a separate simulator to answer. The app displayed Not played and then a pending Circuit review. This is an allegation and response, not evidence of physical attendance or a final conduct decision. The first report attempt encountered a local service error; after the app showed retry and the match was still confirmed, a retry succeeded. The match record then had cancelled status and a newer version, while its UI labeled the outcome Not played. All 255 local gallery images loaded at 360, 390 and 1280 pixels without horizontal overflow or page errors. No live delivery, Android, VoiceOver or larger-text behavior was verified.

## Cancellation (November 9)

Seven captures use three separately prepared fictional Casey–Riley singles matches on the local stack. Casey cancelled the first before the late window. For the second, inside the late window, Casey requested a mutual call-off and Riley agreed on a separate simulator. For the third, Casey directly cancelled inside the late window. Each match’s local database status became cancelled; the app labels the second Called off by agreement. All 255 local gallery images loaded at 360, 390 and 1280 pixels without horizontal overflow or page errors. The direct-cancellation result does not itself show the conduct consequence; no notification delivery, actual booking, Android or accessibility behavior was verified. The retained team cancellation image is an explicitly older example awaiting recapture.

## Match and chat (November 9)

A fictional future Casey–Riley match was inserted as a local fixture; its booking was not exercised. Casey sent a suggested message in the app and Riley responded from a separate simulator. Casey reopened chat to see Riley’s response, then opened People, message options and reactions, sent a reply, and opened the report form without submitting it. No mute or block was applied. Captures used the isolated `5faf151a7` app, local data, iOS 26.4, dark mode and default text. All 254 gallery images loaded locally at 360, 390 and 1280 pixels without horizontal overflow or page errors. Live update timing, notification delivery, Android, VoiceOver and larger text were not established.

## Join and notifications (November 9)

Blake chose singles and rotating doubles, favorited Mueller, saved Thursday 6–9 PM, accepted both items, joined and started matchmaking. He declined the in-app notification prompt. The setup was entered through a test link from the DUPR profile page, so the page shown after completion cannot establish normal navigation. No DUPR account was linked. Drew, a separate fictional profile, supplied the landing, favorite-venue and checked-terms screenshots to replace frames captured during transitions. The map, times, success, prompt and home belong to Blake. Both profiles used the isolated `5faf151a7` app and local data, iOS 26.4 dark mode and default text. All 255 gallery images in the previous local version loaded in the local page at 360, 390 and 1280 pixels without horizontal overflow or page errors. The capture does not establish push delivery, Android or accessibility behavior.

## Score disagreement (November 9)

Four captures follow another fictional Riley–Taylor match. Riley reported a directly prepared one-game match as 11–7. On a separate simulator, Taylor proposed 11–9; Riley accepted the proposal in the app. The local match became Final with one recorded game. All 253 image assets loaded locally at 360, 390 and 1280 pixels without horizontal overflow or page errors. The capture environment and external delivery limits match the score review below.

## Score correction (November 9)

Four native captures follow a separate fictional Riley–Taylor singles match. A directly prepared unscored fixture was reported as 11–7 in the app; Riley used Fix the score and sent 11–9, then Taylor reviewed and confirmed it on a separate simulator. The local database shows a completed match with one game. All 249 image assets loaded in the local page at 360, 390 and 1280 pixels, with no page overflow or JavaScript errors. A fifth capture shows the same corrected match after Taylor confirmed it. The same simulator, source revision, local migrations, appearance and delivery limits as the one-game score review below apply.

## One-game score review (November 9)

Eight native captures show a single fictional Riley–Taylor match from score due through reporting, the same-phone confirmation restriction, opposing review and Final. The unscored match and its participants were prepared directly as local fixture data; Riley entered the one played game and submitted 11–8 in the app. Taylor first opened review on the reporting simulator, which displayed the confirmation restriction, then signed in on a separately created iPhone simulator and confirmed the same score. The local database reports the match completed with one game. The current result screen says a DUPR send is pending; this local fixture does not establish or perform external DUPR delivery.

Both simulators ran iOS 26.4 with Dark appearance and default system text against app revision `5faf151a764de03143aceac3794d077a148ea586` and its two added local ranking migrations. Images are unpainted lossless WebP derivatives. The two remaining score-reference images after this sequence are earlier captures; they do not depict this match.

## Pause and return (November 9)

Five native captures follow fictional member Riley from an active singles search through Pause until November 16, the home banner, End pause and an active search again. His saved Wednesday time was prepared through the local authenticated command; pausing and ending it were performed in the app. No upcoming match existed in this example, so the visible booked-match statement is product copy, not a test that a booking survived. The simulator, isolated app revision and local stack match the Usual times capture below; the Pause and home owners did not change in the subsequent local `5faf151a7` commit. Captures are unpainted lossless WebP derivatives. Three later inactivity/return examples in that chapter remain earlier captures and need refresh.

## Usual times (November 9)

Four native captures follow Casey adding Thursday 6–9 PM and reopening next week, where both Tuesday and Thursday remain. The selection, saved view and following-week view were observed on a task-created iPhone 17 Pro simulator using iOS 26.4, Dark and default system text. The app ran from committed app revision `e0531b714ff6e4b5601aed78f81baf16258b373d` against an isolated local fixture. The times owners did not change in the subsequent local `5faf151a764de03143aceac3794d077a148ea586` commit; this does not verify other source dependencies or a deployed build. Images are unpainted lossless WebP conversions of the simulator captures. The initial times were fixture setup; adding Thursday and opening next week were performed in the app. No notification or external service delivery is claimed. The local API stalled during setup and recovered; the other fixture branches remain incomplete.

## Live season progress (November 8)

Six new captures show the implementation in local app commit `016cb496c`: Your season on home, season detail, expanded private DUPR history, native season sharing, a subsequent rank change and the corresponding live board. Earlier screenshots are retained at their captured revisions; the earlier leaderboard chapter is labeled accordingly.

- **Device and source.** A separate iPhone 17 Pro simulator on iOS 26.4, Dark appearance, Default app text size and default system text size. The capture checkout contains exactly the reviewed feature source committed as `016cb496c`, on the prior app baseline `bf391af6d`. Existing compatible dev client; no native rebuild. Screenshots were converted to WebP without painting over or constructing UI. No production app or backend release is implied.
- **Fictional season.** An isolated local stack with cron disabled, fictional members and venues, and historical matches reported and confirmed through the normal player RPCs. Weekly publications were frozen with the existing shared engine. This season begins September 29; the first fixture DUPR observation is September 30, so Since first sync is intentional. The values 3.92 and 4.11 are fixture observations, not evidence of a live DUPR synchronization.
- **Verified transition.** Casey starts this capture at #1, 5–3 over eight matches. A further match against Maya is reported 0–11, 0–11 and confirmed by the opposing player. The actual rating RPC and shared projection publish the live board; the native home then shows #2, Down 1 place, first/best #1 and 5–4 over nine matches. Archived weekly publications were retained. This capture exercises real calculation/publication RPCs; worker dispatch and race deferral are additionally covered by the worker tests, rather than by a running Edge worker in this minimal stack.
- **Native review.** Home → View season → expanded history → Share season was exercised. The native share sheet opened; nothing was sent. Default screenshots and a separate enlarged iOS text inspection were reviewed. The final match also mounted the season summary. The owned stack was stopped with its backup retained.
- **Checks and limits.** Shared calculations/contracts: 85 tests; native home/stats/season: 68 tests; Deno worker: 47 tests. The database cohort passed three tests, with the final privacy case rerun after tightening owner-only output; an authenticated owner/non-owner smoke also passed. Final migration replay and all 20 changed function bodies/ACLs matched canonical source. Full mobile typecheck still reports an existing organizer route typing error. Android, physical devices and live-provider synchronization were not verified. The prepared 178-screen publication was checked at 360×800, 390×844 and 1280×900: all images loaded, no page overflow, all six new captures were present, and viewer opening, next-screen navigation and closing passed with no page errors. The new chapter thumbnails and phone/desktop viewer were visually reviewed. The capture manifest rebuild was byte-identical.


Updated November 8, 2026 (challenges, following and growth).

This capture set has 282 phone screens and one exported result card and uses image version `20261109ci`. The 171-screen count and image version below describe the earlier capture set recorded in that section.

## Scan and rotating score completion

The Scan chapter uses one plan and one published match throughout: Alex, Ben, Chris and Diego at Harborview. Alex created and started the plan in the app. The three guest additions and confirmations used the genuine authenticated RPCs with separate actor installation headers; Ben’s invitation, review and confirmed views were captured in the app. QR camera recognition itself was not exercised. The published four-player match was verified in the database.

Alex entered all three scores and revised game 3 in the app. Ben reviewed and confirmed his opposing games on the separate Circuit Video Guest 1108 simulator, with a different installation from Alex’s device. Chris confirmed the remaining opposing game through his authenticated RPC. The completed record, all three final scores, named confirmers, match history and reopened native result agree. The 1080 × 1350 result card is the untouched image generated by the app and passed to the share sheet, copied from the owned app cache. No message or external DUPR submission was sent.

A genuine receipt grammar defect found in this capture was corrected in authored mobile source: singular and plural reviewers now use “will review.” The 61 existing score-stage component tests and changed-file formatting passed, and the corrected native receipt was checked. Local infrastructure timeouts required retries; recordings retain those attempts privately. These screenshots are edited workflow selections, not a claim of continuous error-free recording. The earlier receipt/correction examples remain historical reference until the planned replacements are complete.

## Rotating doubles matching and coordination

Ten new native captures form one Honolulu example: Alex saves Friday availability, the actual matching worker returns two groups, and his booked group is Alex, Jordan, Marcus and Nolan. The chapter shows the same November 13 match through its plan, all three rotations and a delivered chat reply. It does not yet show play, score reporting or confirmation for that match.

The isolated app uses base bf391af6de7f633062104b526378a33a7bfbc8b9 plus the current local snapshot recorded in the private runtime identity. Captures are unpainted 1206×2622 simulator pixels converted losslessly to WebP. No production data or external delivery was used. A local Docker memory failure interrupted several attempts; failed attempts remain private and are not presented as successful actions. The source PNGs, matching response and raw recordings are retained privately. At the time of that capture, these additions were local and unpublished.

## Challenges, following and growth (November 8)

Three chapters were added (171 screens in 26 chapters, IMAGE_VERSION 20261108c). Nothing earlier was retaken. After a design pass, 15 of the new screens were retaken the same day: 70, 70c, 71, 72, 73, 76, 79, 82, 86, 87, 87b, 88, 89, 90 and 92.

- **New chapters.** Challenge a friend (70–86: the menu entry, the empty and grouped Challenges list, a link challenge to a Not listed place, Sofia taking it, Maya's Let's find a time challenge accepted and timed, and withdrawing a link), Following players (87–89, 96: following from stats and after a match, Following and Followers), and Growing your local League (90–95, 98: the not-joined count, See who plays near you, the home city bar, venue pool bars and Founder spots, a venue board that needs more players, Friends you've brought and the result share card).
- **App.** Pickleball-Tournaments `bd10ac775` with the League mobile changes of local commit `2d9b7b023` applied: creating a challenge sends the phone's installation header (before, every challenge from the app was refused with "Update the Circuit app, then open this match again."); New challenge is pinned full width; the link page has a header and back button; the time choices stack full width; Set time leaves one green button; a withdrawn challenge says "You withdrew"; Follow and Challenge lead a stats page with Block at the end; Your friend no longer repeats badges or says "0-week streak"; the screen is titled Friends; and a caught-up player on a thin venue board reads "You're one of them." Nothing is pushed or deployed.
- **Data.** Isolated local stack with no cron. Sofia took Casey's link, and Maya, Jade and Priya sent or answered challenges, through the API with their own installation ids, because the own-phone rule refuses a second player on the same simulator. Maya, Sofia and Jade were set to follow Casey; Diego and Hannah were marked as invited by Casey (Diego credited) with Casey's Brought a friend badge added directly. Screen 98 is the generated 1080×1350 card centred on a phone-sized dark canvas. On the retaken screens the iOS "◂ Safari" return link, left in the status bar by opening deep links, is painted over in the status bar colour; nothing else in an image was edited. The retaken link page (76) is a second driveway link for Sunday 10 AM, because Casey's Saturday 10 AM is already booked by screens 77–78.
- **Checks.** Every image was reviewed; Dark appearance, Default text size.
- **Known gaps.** The link page leaves out the challenger's note by design: someone without a seat sees the plan only. Opened straight after signing in, the link page told Sofia, a member, to join the League until it was reopened. Pick a time lists every half hour from 12 AM, as ruling #128 allows, so the start-time list opens at midnight. An opponent Casey has played but not followed gets Share challenge link instead of Challenge until they have played three matches together. Join (03b–11) still says DUPR is required; DUPR became optional on November 7 and those screens were not retaken.

## After the League simplification (November 2–3)

The tour was recaptured after the League dropped its intro screens, setup options, other-time proposals, the booking switch, the share-sheet invite steps, the daily suggestion notice, the one-week Mixed row and Pause offers (140 screens in 23 chapters).

- **Dropped.** 01–03 intro, 08 and 08b setup options, 10b notification prompt, 10d check-in step, 11c–11e invite prompt and share sheet, 15 other times, 17b booking switch, 48b suggestion notice, 60d–60f Mixed for a week and Pause offers. Discover is folded into Join, which now opens with the landing (03b).
- **New chapters.** Booked from your times (Blake's first booked match, with the check-in and alerts cards), A time for one week (Diego approves an added Saturday time, then the matching-time list and grid), and Taking a break and coming back (Casey and Jordan on a break, Nina paused after four quiet weeks, Riley's Monday message for a search he switched off).
- **Added inside chapters.** 11h and 11i waiting searches that offer doubles or Mixed, 17e alerts, 27b Reconnect DUPR, 34b Place, 58a How you play from a team link, 58g and 58h an existing member accepting a team invite and the team searching.
- **Retaken.** 03b–07, 10, 11, 11f, 11g, 12–12c, 14, 14b, 16, 17, 17c, 17d, 22, 23, 24, 25, 27, 29, 34, 35, 39–40d, 46–49, 54, 58–58f and 60–60c.
- **App.** Pickleball-Tournaments local main `4405371cb` plus the uncommitted team-link copy changes (the first person to accept is no longer called the partner). Nothing is pushed or deployed.
- **Data.** Rebuilt on an isolated local database with no cron. Matching only offers between 7 AM and 10 PM Chicago time, so the offer, booking and inbox screens were taken in the morning. The alerts card shows only while notifications are off, so they were turned off in iOS Settings for that shot and back on afterwards. For the matching-time screens a new fictional player, Ethan, was added and three searches were dated two days back. One stale Match found notice from a re-run offer was removed from Casey's inbox. Held fixture deliveries were moved aside so only Riley's Monday message was delivered.
- **Checks.** Every image was reviewed; Dark appearance, Default text size. Page checks are listed in the capture report.
- **Kept from earlier captures.** 07b, 07c, 09, 09b, 11a, 11b, 13, 19–21, 22b, 26, 28, 29b–33, 36–38, 41–45, 50–53, 55–57 and 59 are unchanged screens from October 26–29.
- **Known gaps.** Screen 48c lists Saturday 10 AM as a match possible now although Diego has just saved that hour; matching had not run yet. The Until a date calendar's Done did not save a break in the simulator, so the break screens use Until Monday and a date set directly. Screen 63b, opened from "Your search is off. Turn it on", asks Riley to add times rather than showing a switch.

## Booked matches, suggested times and invite moments (October 29)

Ten screens were added and five retaken after the League started booking matches that fit a player's saved times, suggesting a time that would match, and asking new members to bring their regulars (99 screens in 17 chapters).

- **New chapters.** Times that would match (48b–48e) and Booked from your times (17b–17d), both Casey. The invite chapter is now Bring your friends and opens with Blake's welcome notice (11a) and the empty-time line on his times (11g) before Jordan's screens. The weekly recap chapter adds a week with no match (40d).
- **Retaken.** 02 intro (new wording: a match that fits your times is booked for you), 08 matching options (Confirm matches that fit my times, on), 11 Blake's home (new first-time line and the Bring your regulars card), 45 My QR (the private friends-joined count) and 48 Your times (next week, with Reuse last week's times).
- **App.** Pickleball-Tournaments local main `04f49b8b2` plus uncommitted copy fixes to the League intro and the first-time line. Nothing is pushed or deployed.
- **Data.** Same isolated local database and fictional story. Casey's singles search was backdated two days, and a new fictional player, Nora, saved Saturday 10 AM–1 PM. The time suggestion came from the League's own suggestion worker; it was first suppressed by Casey's daily notice limit, so her earlier fixture notices were dated a day back and the suggestion was produced again. Casey saved the suggested time and turned on Confirm matches that fit my times in the app; the next matching run booked Saturday against Nora and the outbox delivered the confirmation. Five backfilled recap rows and a duplicate score reminder were removed from Casey's inbox and older rows marked read, so the inbox reads like a real week. The two friends who joined with Casey's code were recorded directly in the database. Older fixture deliveries were held back so the new notices were not stuck behind them.
- **Checks.** Every new image was reviewed for development banners, loading states and keyboards. Dark appearance, Default text size. The page loads all 99 images at full size with `?v=20261029a`, has no sideways scroll at 360, 390 and 1280 px, and the full-screen viewer opens, steps and closes.
- **Known gaps.** Jordan's screens 23–26 are from October 28 and still show the earlier first-time line ("You'll get a Match found to accept or skip") above the invite prompt. Screen 38 says "Everyone still needs to accept" because Casey's switch was still off when it was taken; it was turned on in screen 41. The no-match recap (40d) offers Start matchmaking although Casey's singles search is on.


## Invite friends chapter (October 28, evening)

Five screens were added in a new chapter, No match yet: invite friends (89 screens in 15 chapters). The owner noticed the tour never showed what happens when matchmaking finds nobody.

- **Player.** Jordan, a new fictional Men's singles player added to the same story, with Thursday 6–9 PM saved and no tournament entries (so no Event live chip in the header). Jordan's singles search was backdated to 26 hours, which is when the prompt and the inbox nudge become due.
- **Screens.** 11b inbox nudge, 11c the Invite friends sheet, 11d the iOS share sheet with Jordan's invite link, 11e Copy invite link after closing the share sheet without sending, 11f the League home after Also search doubles started a Men's rotating doubles search.
- **App.** Pickleball-Tournaments local main `40fe473c7` plus the uncommitted League follow-up changes: the prompt names the category and format without a count, and Also search doubles is offered only to a singles player who is not already searching doubles. Nothing is pushed or deployed.
- **Data.** The story was rebuilt on an isolated local database. The inbox notice was produced by the League's own growth pass and delivered through the outbox worker; Jordan's queued delivery was moved ahead of older fixture events so it would not wait behind them.
- **Checks.** Every new image was checked for development banners, loading states and keyboards. Dark appearance, Default text size.
- **Not shown.** Invite friends also appears on small leaderboards and in a recap after a week with no match; those placements are not captured.
- **Fixed since the last retake.** A weekly recap now names every opponent in the week, including one who was not ranked when the week froze, so the "Recap names" gap listed below is closed in the app (not yet deployed).


## Later retake (October 28)

Nine screens were taken again and one was removed after four app changes on local main (`b68390248`, `738989d82`, `e51c34c53`, `40fe473c7`; app 40fe473c7, nothing pushed). The tour now has 84 screens.

- **Removed.** 05b Category rule. The setup step no longer has a Read the category rule link or sheet, and League Help no longer states the rule. Screen 05 How you play was retaken without the link.
- **Chat.** 20, 20b, 20c, 20d, 20e, 20f and 20g were retaken because the chat header action is now People. 20b shows the new People sheet: Sofia's name as the title, Mute and Block side by side.
- **Score report.** 22 Report form was retaken: the planned date and venue are one line, with Change date or venue below it.
- **Not retaken.** The Accepted · Waiting on group status on Your matches appears on no screen of the tour, so no image changed for it.
- **Data.** The same story as the full recapture, rebuilt on an isolated local database. Captures use the same device, Dark appearance and Default text size. Every retaken image was checked for development banners.
- **Not rechecked.** The other 75 images are unchanged from the full recapture below, so they still come from app `2605990fa`.


## Full recapture (October 28)

All 85 screens except one were taken again after the Circuit League full-audit fixes, so every screen comes from the same app build and the same story.

- **App.** Pickleball-Tournaments local main `2605990fa` (the full-audit fixes). Nothing is pushed, and its database change has not been deployed.
- **Device.** iPhone 17 Pro simulator, iOS 26.4, Dark appearance, Default app text size and the normal iOS text size. The simulator was placed in Austin with location allowed.
- **Data.** An isolated local database, rebuilt from empty, with fictional players, venues, matches, a team and a safety report. Blake joins today with Thursday 6–9 PM saved. Casey is seven weeks in, with Sofia's Thursday 6 PM match, Maya's Sunday score, Elena's Saturday report to review, a noon match with Priya to report, a Women's doubles team with Maya, a Friday offer against a new player, Nora, and Elena's no-show report about Tuesday's 7:30 AM match.
- **Kept from before.** The iOS notification permission prompt (screen 18) can't be shown again on this simulator once answered, so it is the October 26 capture.
- **Actions taken in the app.** Casey accepted Sofia's and Nora's offers, sent chat replies and a reaction, reported Priya's score, confirmed Elena's score, created a team invite, started and cancelled a Scan to play plan, and challenged the no-show report. The other players' answers (Sofia accepting, Maya's messages, Maya accepting the team invite, Elena's no-show report) were made through the same server functions the app calls. No dispute or message report was sent.
- **Standings.** Last week's standings were frozen again after the fictional match history was in place, so the leaderboard, recap and records agree (6 ranked players; Casey #1 at 5–2).

Every image was checked for development banners, loading states, keyboards and stray menus before it was used.

### Changes to the tour

- **Captions.** Every caption was checked against its new screen. Notable changes: Sofia's match and Blake's times moved to Thursday; Casey's home now has one task, Tuesday's score; the second offer is against Nora on Friday; score deadlines fall on Friday; the recap's last screen shows badges and notable results; the no-show report is about Tuesday and can be challenged until Friday at 3:41 PM; inbox notices no longer name a time zone.

### Found while capturing (not fixed here)

- **Recap names.** A weekly recap names the people in each result only if they were ranked when the week was frozen. A recap frozen before an opponent's match was recorded shows that opponent as "Player". The fictional data hit this; refreezing fixed the data, but the product gap remains.

## Page checks

The page was rendered in a headless browser at 360×800, 390×844 and 1280×900, in dark mode. At each size:

- No page scrolled sideways.
- All 84 images loaded at full size, each with the `?v=20261028b` version so browsers fetch the new captures.
- A `#s14` link opened the viewer on screen 14, the right arrow moved to screen 15, and Escape closed it.
- No script errors.

The SHA-256 hash of every image file is in the [capture list](current-captures.json).

## Earlier capture limits

- **Earlier Popular times.** The earlier venue fixture has too little data. The current Honolulu doubles chapters show populated popular starts and the time picker.
- **Earlier suggested times.** The earlier singles fixture has no compatible suggestions. The current doubles journey shows compatible starts followed by an actual matcher booking.
- **Earlier partner branch.** Maya’s earlier invite branch stops before her acceptance. The current Alex/Ben chapter shows a real native link review and acceptance on a separate simulator.

Push, email, DUPR submission and payments were not exercised.

## Honolulu doubles expansion

The appended doubles chapters use two dedicated native iPhone simulators and the owned local Circuit stack. They cover a real matcher booking, a named Team doubles challenge through a saved time and retained chat, Pause/resume, an early cancellation, a missing-player report, and completed weekly/season views. Actor-side writes use the normal authenticated League commands. Some counterpart actions are orchestrated through those RPCs rather than filmed taps; no camera QR recognition or external message delivery is claimed.

The historical season fixture spans August31–October25,2026:32 completed matches,96 confirmed games,eight weekly snapshots and a final snapshot. Match plans and audit timestamps are fixture preparation; score reports and opposing confirmations run through the actual server commands, and ratings, boards and recaps use the canonical shared projection engines. Current November matching and recovery examples are separate from that historical season. This is not an uninterrupted eight-week recording. Captures retain their real app pixels.

Popular doubles times and Ben’s own-phone invitation/score review are now present in the new chapters. Earlier thin-data or missing-partner captures remain historical examples. The app’s rotating history count is corrected to use the player’s side in each game; a regression fails before the fix and all12 selected shared tests pass after it. The native corrected history is verified. No production apply, provider DUPR send, push/email delivery or publication is established.

### November 9 inbox refresh

The current Riley inbox capture comes from the isolated local iPhone fixture at app commit `5faf151a764de03143aceac3794d077a148ea586`. It shows four in-app notices; it does not establish push or email delivery. Tapping the first cancellation notice navigated to the match screen, which was still loading during the observation, so a completed destination is not claimed.

### November 9 home and menu refresh

Riley’s local iPhone captures show the current per-format matchmaking controls and the current League actions menu. They are separate from Casey’s earlier home and standings examples. The first cancellation notice in Riley’s inbox later resolved to a retryable match-load error in this local environment; no successful destination or production failure is claimed.

### November 9 standings explanation

Riley opened About on the current leaderboard to capture the current standings explanation. A retryable local refresh error appears behind the sheet; no production behavior is inferred. This is the leaderboard About sheet, not the earlier home information sheet.

### November 9 current home

The home chapter now uses Riley’s current local iPhone match, search, weekly progress and menu captures. The first image is reused from the confirmed-match example; the October 19 recap link is fixture history, not a claim about the prior week.

### November 9 offer preview

The Riley/Morgan proposal was inserted directly into the isolated database to inspect the current pending offer, player details and decline-choice sheet. It is not a matcher-produced offer and does not demonstrate eligibility or delivery. The decline sheet was not submitted; an acceptance attempt returned “This match isn’t available,” so the current response and confirmation journey remain unverified.

### November 9 matcher booking

The local matcher created the Casey/Sofia confirmed match from saved fictional availability; Casey’s iPhone captured the resulting match detail. The later Riley/Marcus matching call ended with an upstream error and the database showed no additional proposal at the time of inspection. Push and email delivery were not exercised.

### November 9 first-match permission

Blake’s match with Theo was directly prepared in the isolated database. Its first-match screen showed the current optional location prompt; tapping Not now dismissed it. No system location permission or actual check-in was exercised.

After Blake chose Not now, League settings showed automatic check-in off and the switch remained available. Enabling it, the system permission dialog and actual check-in were not exercised.

On the same prepared Blake/Theo match, notifications were denied on the test iPhone. The current recovery card appeared; Open Settings led to Circuit’s iOS settings with Notifications Off. Push delivery and enabling notifications were not tested.

### November 9 leaderboard refresh

Blake’s local iPhone captures show fictional populated singles boards, DUPR details, the fewer-than-five near-you fallback, category selection and About. Applying the category filter loaded the women’s board. Populated near-you, Android, VoiceOver and external DUPR synchronization remain unverified.

### November 9 search and player record

Blake searched the fictional women’s board for Elena and opened Jade’s record separately. One match row expanded to show individual games. No follow or challenge was submitted. The no-results search state was subsequently checked as described below.

### November 9 leaderboard recovery and place

An unmatched search showed zero results; Clear search restored the full board. Blake selected Mueller from the current place sheet and saw a venue board with two listed players and a five-player threshold. This fictional local fixture does not establish the availability of every venue board.

### November 9 badge detail

Blake opened Jade’s Founding Member badge in the local iPhone app. The number and record are fictional. The local board catalog exposed only singles, so current doubles and team board captures remain outstanding.

### November 9 current Casey record and badges

Casey’s local iPhone record includes Your season and showed standings updating when captured. The Court explorer and grouped Venue founder sheets were opened. Counts, rank, ratings and venues are fictional test data; no external DUPR synchronization or physical play is established.

### November 9 current weekly recap

Casey’s fictional October 19 weekly snapshot was opened on the current local iPhone app. Four captures follow one scrollable recap from summary through match scores, badges and actions; those actions were not exercised in this capture. The separately opened no-match image was subsequently refreshed as described below.

### November 9 no-match recap

Casey’s October 5 fictional empty snapshot was opened directly. Its matching-times action navigated to the times editor, where no suggestions appeared in this fixture. Other actions, external delivery and discovery through the recap list were not exercised.

### November 9 no matching-time suggestions

Casey’s local iPhone times editor displayed no suggested singles times after opening it from the empty recap. The displayed invitation was not used. Earlier Diego suggestion examples are separate fixtures and still need current verification.

### November 9 conduct challenge

Casey’s local late-cancellation report was challenged with a fictional explanation through the iPhone app. The app showed a saved receipt and then the same report under review. The report was not adjudicated; no real incident, external communication or final finding is asserted.

### November 9 block and unblock

On the isolated local iPhone, Casey opened the block confirmation on Jade’s fictional record, blocked her, saw her in the list and unblocked her. The app confirmed each change and the list became empty. Message visibility, matching exclusion and absence of notifications were not independently tested.

### November 9 following and visibility

In the isolated fixture, Casey followed Jade from Jade’s stats page and saw her in Following. Riley separately followed Casey from another simulator; Casey’s Followers tab displayed Riley. No challenge was sent and push/email delivery was not tested.

### November 9 direct challenge

Casey selected fictional Jade and a venue, chose to agree a time later and sent a direct singles challenge on the isolated iPhone app. The sender’s screen showed Casey accepted and Jade waiting. Recipient response, delivery outside the local app and any match outcome were not exercised.

### November 9 interim publication check

The 269-position gallery was checked in Chromium at widths of 360, 390 and 1280 pixels: all page images decoded, there was no horizontal page overflow or JavaScript page error, and the viewer opened, advanced with the right arrow and closed with Escape. Automated WCAG 2 A/AA and 2.1 A/AA checks returned no violations for the page and open viewer in light and dark modes at 390 pixels. These checks do not establish Safari, touch, VoiceOver, Android or the completeness of earlier captures. The refresh and image audit continue after this publication.

The leaderboard place picker and favorite images were captured on an iPhone simulator using app commit `01b4fa297` and a fictional local fixture. The favorite moved into the Favorites section after it was selected. Search, location permission, reopening, Android, and accessibility were not verified in this capture. The earlier weekly recap images do not show the newer recap story and archive; those captures remain outstanding.
