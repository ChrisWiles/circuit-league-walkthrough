# Walkthrough evidence

Updated October 27, 2026.

## Full recapture (October 27)

All 85 screens except one were taken again in a single pass, so every screen comes from the same app build and the same story.

- **App.** Pickleball-Tournaments local main `446eb02e0` (the persona-audit fixes), plus the setup fix described below, committed as `07d69be1e`. Nothing is pushed.
- **Device.** iPhone 17 Pro simulator, iOS 26.4, Dark appearance, Default app text size and the normal iOS text size. The simulator was placed in Austin with location allowed.
- **Data.** An isolated local database, rebuilt from empty, with fictional players, venues, matches, a team and a safety report. Blake joins today. Casey is seven weeks in, with Sofia's Wednesday 6 PM match, Maya's Sunday score to report, Elena's Saturday report to review, a noon match with Priya to report, a Women's doubles team with Maya and Elena's no-show report about Monday.
- **Kept from before.** The iOS notification permission prompt (screen 18) can't be shown again on this simulator once answered, so it is the October 26 capture.
- **Actions taken in the app.** Casey accepted Sofia's offer, sent chat replies, reported Priya's score, confirmed Elena's score, created a team invite, started and cancelled a Scan to play plan, and challenged the no-show report. The other players' answers (Sofia accepting, Maya's messages and reactions, Maya accepting the team invite, Elena's no-show report) were made through the same server functions the app calls. No dispute or message report was sent.

Every image was checked for development banners, loading states, keyboards and stray menus before it was used.

### Changes to the tour

- **New screens.** The category rule sheet (screen 7) and the Same times every week switch in setup (screen 14).
- **Removed.** The separate suggested-times screen. Your times now fits on one screen with its suggested-times note.
- **Captions.** Every caption was checked against its new screen. Notable corrections: automatic check-in is shown off, the setup default it really has; Casey's record is now 5–3 over 8 matches; deadlines and times match the new captures.

### Fix found while capturing

On Blake's Matching options step, Same times every week started off, though the persona-audit fix was meant to turn it on. The League stores an off value for every player from the start of setup, and the app read it as the player's own choice. App commit `07d69be1e` counts a stored off as a choice only after the player has saved that step. Screen 14 was taken after the fix.

## Page checks

The page was rendered in a headless browser at 360×800, 390×844 and 1280×900, in dark mode. At each size:

- No page scrolled sideways.
- All 85 images loaded at full size, each with the `?v=20261027c` version so browsers fetch the new captures.
- A `#s14` link opened the viewer on screen 14, the right arrow moved to screen 15, and Escape closed it.
- No script errors.

The SHA-256 hash of every image file is in the [capture list](current-captures.json).

## Known gaps the tour shows as they are

- **Popular times.** Venue detail has too little local data to show popular times.
- **Suggested times.** Your times has no suggested times for Singles, because too few nearby players have saved times.
- **The partner's side of a team invite.** The tour doesn't show Maya opening the invite link, because the fictional partner has no simulator account.

Push, email, DUPR submission and payments were not exercised.
