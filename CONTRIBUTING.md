# CyberCheck website guidance

This site helps SME decision-makers understand CyberCheck and register interest.
It also gives technology partners a direct route to discuss collaboration. Keep
these tasks clear when changing content or interactions.

## Content and marketing

- Explain what CyberCheck is, who it serves and what the visitor can do next.
- Keep waitlist registration visually primary. Explain that it opens Google
  Forms. Keep platform access and partnership enquiries distinct.
- Write in business terms; explain technical language when it is needed.
- Connect benefits to inspectable workflow examples and the supplied demo.
- Label illustrations accurately. Avoid invented testimonials, customer counts,
  partner endorsements, performance results, deadlines or availability promises.
- Treat draft operating plans as proposals, not established services. Distinguish
  the platform from the wider initiative. Qualify assessment limitations nearby.
- Do not publish internal strategy, prospective partner names or client details.
- Review the destination form's privacy notice and onboarding process before
  public launch. The website must not invent data-handling assurances.

## HCI decisions

| Visitor need | Design | Trade-off |
| --- | --- | --- |
| Understand the offer quickly | Product definition and benefit near the main action | Short introduction; depth follows below |
| Find the right participation route | SME and partner panels plus a direct partner link | One panel visible at a time; explicit tab labels |
| Understand the workflow | Numbered stages, illustration and text explanation | Illustrations are supplementary, not live assessments |
| Operate without a pointer | Semantic tabs, arrow/Home/End navigation, Enter/Space activation | Manual activation avoids changes while moving focus |
| Recover from a missing image | Loading message, plain-language error and retry | Explanation remains readable throughout |
| Read on a phone | Single-column sections, 16px body copy and usable controls | More vertical scrolling instead of compressed content |
| Inspect small illustration text | Full-size image link, labelled as opening a new tab | Leaves the site in a separate tab |

## Interaction and accessibility

Use semantic HTML, descriptive labels, logical heading order and visible focus.
Keep selected state distinguishable through more than colour. Connect tabs to
panels with valid IDs and hide inactive panels from interaction. Escape closes
mobile navigation and returns focus to its trigger. Do not trap focus in a
non-modal menu.

Aim for 4.5:1 normal-text contrast, 3:1 large-text contrast and at least 44px
primary controls on mobile. Respect reduced motion, avoid autoplay, and provide
a text description of the video. Preserve skip navigation and responsive reflow.
The site supports light and dark themes. Check both after visual changes; the
header toggle uses Docusaurus theme persistence and system-preference support.

## Validation

Run `npm run typecheck`, `npm run build` and `git diff --check`. Use
`npm run serve -- --host 127.0.0.1 --no-open` to review production output.

Check desktop, 320px and 390px mobile widths, and 640px reflow. Also check actual
200% browser zoom when the browser supports it; a narrow viewport alone is not
proof of zoom support. Exercise keyboard navigation, selected panels, menu
recovery, missing-image/retry behaviour, video description, FAQs and all main
link destinations. Restore any temporary failure-test assets immediately.

Record what was actually tested and any limits. A build or manual contrast
sample does not establish full WCAG conformance or prove usability.

Before launch, ask representative SME owners/managers and technology partners
to explain the offer, find their participation route and identify the next step.
Record task completion, misunderstandings and hesitation; revise observed
problems. Measure qualified enquiries and completed registrations when an
approved measurement setup exists. Do not infer conversion improvement from
visual changes, or add trackers without a defined need and privacy review.

## References

- [CRADLE contribution guidance](https://github.com/cradle-lang/cradle-lang.github.io/blob/main/CONTRIBUTING.md#ui-hci-and-accessibility)
- [CRADLE HCI rationale](https://github.com/cradle-lang/cradle-lang.github.io/blob/main/README.rst#human-computer-interaction-rationale)
- [WAI tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C target size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Participation and contact routes

Keep SMEs as the primary audience. Technology providers, business chambers,
SME associations, research groups and community organisations use the ecosystem
partner route. Insurers, reinsurers and risk specialists have a separate route
for methodology, research and pilot discussions. Do not imply that participation
provides insurance cover or permission to share an SME's assessment data.

The FAQ contact links to the CyberCheck LinkedIn Page. Visitors select Message
when available; retain email as an alternative because Page messaging and
LinkedIn sign-in can limit access. Never invent a direct-message URL or claim
that Page messaging has been enabled without checking it.

Video must have explicit play/pause, a download alternative, visible load/error
feedback and reload recovery. A local preview requires a running server; a cached
page can remain visible while unloaded media fails after the server stops.

## Review record — 15 October 2026

Reviewed the reference's UI/HCI, content and proportionate-validation guidance
against this landing page. Compiler, Workbench, release-automation and upstream
repository workflow rules do not apply to this project.

Corrections made in the review:

- Mobile audience tabs now expose vertical orientation and use Up/Down; desktop
  tabs use Left/Right. Home/End and explicit Enter/Space activation are retained.
- Selected tabs display a checkmark as well as colour, weight and borders.
- Workflow images stop waiting after 15 seconds and offer retry. Text remains
  available. Successful retry returns focus to the restored image link.
- Video reload returns focus to Play. Play/pause, download, text walkthrough and
  load/error messages remain available without autoplay.
- SME participation leads with a business benefit. Registration, application
  access and partner discussions stay separate, with no availability, coverage,
  conversion or insurance-result guarantees.
- LinkedIn contact provides a concrete next step and an email fallback.

Verification performed on the resulting production page:

| Check | Result |
| --- | --- |
| TypeScript and production build | Passed |
| Generated asset paths, anchor targets and ARIA references | Passed |
| Desktop horizontal keyboard focus and activation | Passed; visible focus; selection changes explicitly |
| Mobile vertical keyboard focus and activation | Passed at 390px |
| Reflow | No horizontal overflow at 320, 390, 640 and 1280px |
| Workflow reading size | 16px at checked widths |
| Audience control height | At least 48px at checked widths |
| Image failure and retry | Exercised in preceding review; temporary asset restored |
| Video playback and pause | Exercised in preceding review; playback advanced |
| Skip navigation, menu Escape and native disclosure controls | Exercised in preceding review |
| Reduced motion | Source rule disables smooth scrolling, animation and transitions; OS preference not toggled |
| Text contrast | Earlier rendered solid-background sample corrected faint labels; not a complete automated accessibility audit |

Still unverified: actual 200% browser zoom (the in-app browser did not apply the
zoom shortcut), VoiceOver/NVDA behaviour, complete WCAG conformance, and task
success with representative SME and partner participants. Only the light theme
is implemented. LinkedIn Page messaging availability, waitlist privacy/onboarding
handling and real conversion outcomes require owner-side or audience evidence.
These are recorded limits, not completed checks or reasons to claim compliance.

## Primary conversion goal

The primary outcome for new visitors is waitlist registration. Keep the main
filled action consistent and link directly to the supplied Google Form. The
hero's secondary action explains the workflow on this page, so first-time
visitors can evaluate the offer without being sent immediately to an account
screen. Repeat the registration route after the workflow and demo, and at the
closing invitation. Application access remains in navigation and the closing
secondary link for visitors looking for it.

Explain waitlist registration separately from account creation. Do not promise
admission, assessment, availability, price, response times or immediate access
without verified programme information. Partner discussions remain distinct from
SME registration. Success should be evaluated through completed registrations
and qualified participation enquiries, not CTA clicks alone; these outcomes have
not been measured or claimed by the site.

## Follow-up usability improvements

The business example is explicitly hypothetical. It illustrates a dependency,
potential disruption and a review question; it must not be presented as a real
customer outcome or verified platform finding. The wider initiative is condensed
to reduce repeated benefits and keep the SME registration journey in focus.
Post-registration contact, eligibility, cost, participation commitment and the
form's data-handling details await owner confirmation. Do not invent them.

Owner-confirmed waitlist details: organisation name and work email are collected;
only the CyberCheck team can access responses, and a privacy notice is in the
Google Form. Participation arrangements remain undecided. Confirmation email is
being considered, not implemented or promised. These are owner-provided facts,
not an independent audit of Google Form settings.

## Dark theme follow-up

Light and dark modes are now implemented. Earlier review statements about
light-only support describe the earlier revision. The header toggle is always
available, including beside the mobile menu. Docusaurus manages initial system
preference and saved user choice through its LayoutProvider and useColorMode.

Verified in the local production page: keyboard switching in both directions,
dark preference retained after reload, mobile menu opening/Escape, and no page
horizontal overflow at 320, 390, 1024 and 1280px. A rendered solid-background
contrast sample checked 128 text elements in dark mode with no failures; this
excludes image content, gradients and transparency compositing and is not a
complete accessibility audit. OS theme changes were not exercised.

## Diagram motion

The inline ExposureMap keeps a static connection path beneath a sequential
highlight. Each of six connections gets a two-second slot in a repeating
12-second cycle. ExposureDiagram owns pause/resume state; the control pauses
all highlights without removing the underlying information. Reduced-motion
preferences disable the highlights and perspective. The 5-degree inward tilt
applies only at desktop widths; mobile remains flat with horizontal diagram
scrolling. The downloadable SVG stays static. Browser checks verified all six
animations pause/resume together and mobile reflow at 390px with a 44px control.

Theme preference exposes System, Light and Dark through a compact icon
button and a labelled popover of choices. System passes null to Docusaurus, removing the saved override and following
the OS, including subsequent preference changes. Manual light/dark choices are
persisted by Docusaurus. Checked System against the current light OS preference,
manual light/dark selection, dark persistence after reload and no page overflow
at 320, 390, 1024 and 1280px. Switching the OS setting itself was not exercised.

Icon preference control: monitor = System, sun = Light, moon = Dark. Text labels
and a selected checkmark appear when opened; the trigger announces the current
choice. Verified dark selection, return to System, keyboard activation, Escape
returning focus, and an open popover fitting at 320px without document overflow.
