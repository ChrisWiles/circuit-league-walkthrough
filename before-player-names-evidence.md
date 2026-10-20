# October 20 action-design walkthrough

The current gallery contains **40 original native screenshots in 14 chapters**: 38 implementation captures on iOS and Android, plus two matched iOS before frames. Every selected image was visually inspected. Screenshot pixels are unchanged; `current-captures.json` records dimensions, original source paths and SHA-256 values. The previous 49-screen full League walkthrough and its provenance are preserved as `before-action-design.html`, `before-action-design-captures.json` and `before-action-design-evidence.md`.

## App implementation

The owner approved replacing routine green underlined actions across Circuit League. The source inventory covered 52 uses: 51 now use outlined commands, flat destination/reporting rows or neutral dismissal/disclosure controls. Read the League terms retains its document-link treatment. Venue identity navigation is separate from preference selection. Directions moves below the address for larger app or system text. Existing eligibility, loading, disabled, recovery, confirmation and server-authoritative mutation behavior is preserved.

The native source is based on app commit `7f783bb38e8e12e79fcf992fc7475962e1a63c3d` plus local, uncommitted action-design changes. The file fingerprint is `5d7c79cfbc2de0a57a7be486dcb3adedb64b0618d0c59164400aea5eb22c1848`; the manifest lists each changed file hash. A later concurrent app-repository commit changes an unrelated store-launch document only. Before frames use the same mobile source at the base commit, without the action changes. The before venue and saved-venue images match the implementation device, fictional fixture, Default app text and dark theme. An unsettled before-times transition frame was excluded.

No API, schema, cache, legal acceptance, analytics, communication or privacy contract changed. League play remains native-only. **This publication updates the walkthrough gallery; it does not deploy the app, database, Edge Functions or an OTA update.**

## Verification

- Full mobile unit suite: **876 suites, 6,491 tests passed**. After final accessibility and wrapping refinements, all **57 League suites, 664 tests passed**.
- Full `npm run lint:typecheck`: passed. Final `npm run lint`: **all 30 tasks passed**. Targeted formatting, lint and diff checks passed.
- Diff-scoped code review and simplify covered the shared row, every changed caller, accessibility labels/state, semantic text sizing, retained guards and the two new behavioral tests. No confirmed in-scope finding remains.
- Native iOS and Android checks exercised venue details, saved venue editing/navigation, time editing, flyer and leaderboard entry, populated time-grid disclosure, offer secondary sheets, completed result reporting entry and chat player controls. Android list identity navigation was verified separately. No match response, report, block, legal acceptance, print or share was submitted.
- The selected venue pass covers Default, Large and Larger app text, light/dark appearance, iOS extra-extra-extra-large system text and Android font scale 1.3. A cold iOS launch correctly remeasured the system text layout after a live size-change frame proved unsettled. System settings were restored afterward.
- Gallery layouts and the opened screen viewer were inspected at **360×800, 390×844 and 1280×900**. Phones use one column; desktop keeps four consistent thumbnail columns. No horizontal page overflow occurred. The viewer now reserves space for captions and 44px Previous/Close/Next controls even on a short phone viewport. Close and Escape work; every chapter anchor resolves. All 40 original image hashes and full-size viewer loads were checked. No browser warning/error was observed.

These are representative native walkthroughs, not a complete route/overlay/state audit or an App Store release gate. Some collection assertions used obsolete selectors, captured navigation transitions, encountered an OS Save Password prompt, or expected a setup state from a fictional account that had already joined. Corrected checks and settled frames are identified in the local evidence; failed collection attempts are not represented as complete Maestro flow passes.

Detailed enrollment/consent, conduct, no-show, dispute and correction states, all network/loading/error combinations, combined app-plus-OS enlargement, screen-reader gestures, physical maps/printing, real provider delivery and preview/store artifacts were not all freshly exercised. Earlier complete player journeys remain available in the dated archive and do not count as new visual clearance.

Temporary popular-times and pending-offer fixtures were restored to their original typed records, including receipt timestamps; exact equality was checked. The owned test stack was stopped with data retained, and the owned native devices, Metro servers and Edge runtime were stopped. Shared development stacks and the other session's simulator were preserved.

## Publication

The static gallery uses the existing GitHub Pages source, `main` at the repository root. Publication is complete only when Pages builds the scoped gallery commit and the public HTML and image assets match it. Source hashes and the archived walkthrough remain independently inspectable in this repository.
