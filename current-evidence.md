# Walkthrough evidence

Updated October 26, 2026.

## How the screens were captured

Every screen comes from one hands-on walkthrough of the Circuit League player app on an iPhone 17 Pro simulator, iOS 26.4, Dark appearance, Default app text size and the normal iOS text size. The app ran from local main after commit `e4e2ed091` plus the setup check-in fix described below, against an isolated local database with fictional players.

Screens taken before a fix were taken again after it. Screens showing a development refresh banner, a loading state or a keyboard were discarded. Earlier tours' images were removed so that every image on the page comes from this pass.

## Fixes made during this walkthrough

Commit `e4e2ed091` fixed what players saw on 16 League screens. The changes included:

- Past matches label their week correctly.
- Standing rows name the category.
- Recap places spell out state names.
- Chat hides the tab bar.
- The score receipt is titled "Score sent".
- The review buttons are stacked full width.
- Scan to play explains its disabled button.
- The terms step explains its disabled Join button in the footer.
- Rank history rows name every week.
- Near you copy is corrected.
- The duplicate setup task is gone.
- The check-in setting shows its saved value.
- Notifications without a body show no empty line.

After that commit, a second pass found that the automatic check-in step at the end of setup had no heading and an inline Continue. It is now a normal setup step: "Check in when you arrive", with Continue pinned in the footer (screen 17). Mobile tests for setup and check-in pass (6 suites, 99 tests).

## Page checks

The page was rendered at 360×800, 390×844 and 1280×900 in a headless browser. At those widths:

- No page scrolled sideways.
- All 78 images loaded.
- The screen viewer fit between its counter and caption.
- Next and the arrow keys stepped through the screens.
- Escape closed the viewer.
- A `#s40` link opened screen 40.

## Known gaps the tour shows as they are

- **Provisional and Established together.** League stats show "Provisional" beside "Established" progress (screen 49). The weekly board is frozen at the last publication, while progress is live.
- **Repeated recap notifications.** The inbox lists several "Your weekly recap is in" items that do not name their week (screen 78).
- **Suggested times.** These stay empty after times are saved, because nobody else's times are in the local data (screen 69).
- **Popular times.** Venue detail has too little local data to show popular times (screen 71).
- **Partner search.** For a Women's doubles team, partner search also lists men. This is not shown in the tour.

Push, email, DUPR submission and payments were not exercised.
