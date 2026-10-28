# Walkthrough evidence

Updated October 28, 2026.

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
- All 85 images loaded at full size, each with the `?v=20261028a` version so browsers fetch the new captures.
- A `#s14` link opened the viewer on screen 14, the right arrow moved to screen 15, and Escape closed it.
- No script errors.

The SHA-256 hash of every image file is in the [capture list](current-captures.json).

## Known gaps the tour shows as they are

- **Popular times.** Venue detail has too little local data to show popular times.
- **Suggested times.** Your times has no suggested times for Singles, because too few nearby players have saved times.
- **The partner's side of a team invite.** The tour doesn't show Maya opening the invite link, because the fictional partner has no simulator account.

Push, email, DUPR submission and payments were not exercised.
