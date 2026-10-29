# Walkthrough evidence

Updated October 29, 2026 (booked matches, suggested times and invite moments).

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

## Known gaps the tour shows as they are

- **Popular times.** Venue detail has too little local data to show popular times.
- **Suggested times.** Your times has no suggested times for Singles, because too few nearby players have saved times.
- **The partner's side of a team invite.** The tour doesn't show Maya opening the invite link, because the fictional partner has no simulator account.

Push, email, DUPR submission and payments were not exercised.
