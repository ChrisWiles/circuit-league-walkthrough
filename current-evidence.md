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

## Second polish pass (2026-10-26 evening)

A later pass, not yet committed to the app repository when these captures were taken, changed these screens. The tour shows the new versions of the leaderboard, League stats and match history, the weekly recap, My QR, the hour grid, partner search and the Final screen:

- The Final screen glows green only on a win.
- Match rows show a labeled count of unread chat messages instead of a dot.
- Leaderboard rows drop the "You" label and show each record large on the right.
- League stats match history puts the result and opponent on the left and the score and PD on the right.
- My QR is Circuit green and black, and still decodes with the iOS camera detector.
- The hour grid no longer shows a check mark on selected hours.
- Partner search lists only players who fit the chosen category, and the server refuses an invite that does not fit. (Partner search was removed in the fifth pass below.)
- The conduct notice on League home is a flat row instead of a large brown card.
- Setup no longer repeats the category rule in a paragraph, but keeps the confirmation checkbox.
- Match chat has hold-to-react with eight reactions, shown as two new screens after Mute or block.

The setup and conduct-notice changes above reached the app in that pass, but their screens (6 and 80) still showed the old versions until the third pass below.

## Third pass (2026-10-26, late evening)

App commit `b9c600d12` on local main (not pushed) changed reactions and This week. Six screens were taken again, and one is new:

- Reactions sit in a small badge on the bubble's outer top corner, as in Messages, without covering the text: top-right on someone else's message, top-left on your own (screen 34).
- The hold sheet no longer repeats the message, and your own reaction has a green ring (screen 33).
- This week drops the rank explanation and Provisional progress lines. A small info button beside Published standings opens "How standings work" (screens 20 and 21, new).
- How you play is shown without the category rule paragraph (screen 6).
- The conduct reminder on League home is shown as the flat row (screen 80).

Other screens in the tour are still the earlier captures.

## Fourth pass (2026-10-26, night)

App commits `c2f902156`, `17e272bc5`, `5aea79394` and `01e6c876f` on local main (not pushed) changed time zones and the Scan to play venue list. The world was rebuilt from an empty database, and the simulator was placed in Austin with location allowed. Eighteen screens were taken again:

- In the app, a time names its zone only when the phone's clock differs from the venue's, or in the repeated hour on the night daylight saving ends. The simulator is on Central time, so every retaken time reads without "Central (CT)" (screens 10, 21, 22, 24, 29, 35, 36, 40, 42, 43, 48 and 76 to 80). The inbox (screen 81) keeps its zone on purpose, because notifications are read outside the app.
- Scan to play lists the nearest venues first, each with its distance, as flat rows (screen 64). Choosing one folds the list to it (screen 65, which replaces the old venue sheet).
- The story state differs slightly from earlier passes. The score to review is from Elena, not Jade, and ends in a loss (screens 40 and 42). The challenge deadline is 8:26 PM (screen 77).

## Fifth pass (2026-10-26, night)

App commits `7d3a83d79` and `ee207be70` on local main (not pushed) made League partner invites link-only. The owner decided that a fixed partner is someone a player already knows, so there is no in-app player search. The world was rebuilt from an empty database, and three screens were taken again:

- New team asks only for the category and offers Create invite link (screen 60).
- Creating it opens the share sheet with the link (screen 61, which replaces the old partner search).
- The invite then waits under Matchmaking, with Share link and Cancel invite, and reads "Expires in 7 days" (screen 62, which replaces the old selected-partner screen). Before `ee207be70`, a link made while the League tab was already open could briefly read "Expires in 8 days".

The tour does not show the partner opening the link, because the fictional partner has no simulator account. That screen did not change in this pass.

## Page checks

The page was rendered at 360×800, 390×844 and 1280×900 in a headless browser. At those widths:

- No page scrolled sideways.
- All 81 images loaded.
- The screen viewer fit between its counter and caption.
- Next and the arrow keys stepped through the screens.
- Escape closed the viewer.
- A `#s40` link opened screen 40.

## Known gaps the tour shows as they are

- **Popular times.** Venue detail has too little local data to show popular times (screen 71).
- **Older captures.** The inbox and suggested-times screens predate the second pass. Recap notifications now name their week, and the empty suggested-times message now explains that it fills in once nearby players save times.

Push, email, DUPR submission and payments were not exercised.
