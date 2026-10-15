/** Public destinations and structured content for the landing page. */
export interface AudienceRoute {
  readonly id: "sme" | "partner" | "insurer";
  readonly label: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly text: string;
  readonly href: string;
  readonly action: string;
  readonly items: readonly (readonly [title: string, description: string])[];
  readonly note?: string;
}

export interface WorkflowStep {
  readonly name: string;
  readonly title: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
}

export const WAITLIST = "https://forms.gle/fARzzSaBF8316eh1A";
export const PLATFORM = "https://cybercheck.ncl.sg/";
export const LINKEDIN = "https://www.linkedin.com/company/cybercheck2026";

export const audiences: readonly AudienceRoute[] = [
  {
    id: "sme",
    label: "SMEs",
    eyebrow: "YOUR BUSINESS. A CLEARER PICTURE.",
    title: "Understand where your business may be exposed.",
    text: "Join the waitlist for updates on early access, pilot opportunities and future demonstrations. Explore how CyberCheck could help you understand your business’s exposure and protection priorities.",
    href: WAITLIST,
    action: "Join the CyberCheck waitlist",
    items: [
      [
        "Explore",
        "Get to know the platform and the questions it helps you ask.",
      ],
      [
        "Stay informed",
        "Register your interest in early access, pilots and future demonstrations.",
      ],
      [
        "Share feedback",
        "Tell us what is clear, what is relevant and what needs to improve.",
      ],
    ],
  },
  {
    id: "partner",
    label: "Technology & ecosystem partners",
    eyebrow: "EXPERTISE AND CONNECTIONS.",
    title: "Help turn understanding into action.",
    text: "We welcome cybersecurity providers, cloud and IT specialists, business chambers, SME associations, researchers and community organisations interested in supporting SME cyber resilience.",
    href: "mailto:aidf@nus.edu.sg?subject=CyberCheck%20partnership%20enquiry",
    action: "Email about a partnership",
    items: [
      [
        "Contribute technical expertise",
        "Explore complementary tools, mitigation approaches and ways to make findings useful.",
      ],
      [
        "Reach SME communities",
        "Discuss awareness sessions and participation through business and sector networks.",
      ],
      [
        "Collaborate on research",
        "Explore pilot collaboration, education and shared learning with the initiative.",
      ],
    ],
  },
  {
    id: "insurer",
    label: "Insurers & risk partners",
    eyebrow: "A CONVERSATION ABOUT CYBER RISK.",
    title: "Explore how cyber evidence can inform risk discussions.",
    text: "We welcome insurers, reinsurers and risk specialists interested in discussing assessment methodology, business exposure and potential research or pilot collaboration.",
    href: "mailto:aidf@nus.edu.sg?subject=CyberCheck%20insurer%20collaboration",
    action: "Discuss insurer collaboration",
    items: [
      [
        "Review the approach",
        "Discuss the methodology, assumptions and limitations behind the assessment.",
      ],
      [
        "Explore a defined use case",
        "Identify where cyber-risk understanding could support a research or pilot question.",
      ],
      [
        "Agree scope and governance",
        "Discuss data use and collaboration arrangements separately before any pilot.",
      ],
    ],
    note: "This is a collaboration invitation, not an insurance offer. Participation does not authorise sharing an SME’s assessment data with an insurer.",
  },
];
export const steps: readonly WorkflowStep[] = [
  {
    name: "Context",
    title: "Start with your organisation.",
    text: "Bring together information about your business, its operations and public footprint. Review the context so the assessment starts from a more accurate picture.",
    image: "context",
    alt: "CyberCheck demonstration of gathering organisation context",
  },
  {
    name: "Profile",
    title: "Build a picture of what matters.",
    text: "Capture important systems, dependencies, sensitive information and existing controls in a structured cyber profile.",
    image: "profile",
    alt: "CyberCheck demonstration of the organisation profile",
  },
  {
    name: "Model",
    title: "Explore how systems connect.",
    text: "Use AI-assisted scenario modelling to represent systems and connections. Review the scenario before moving into analysis.",
    image: "model",
    alt: "CyberCheck demonstration of scenario modelling",
  },
  {
    name: "Analyse",
    title: "Make potential exposure visible.",
    text: "Explore possible attack paths and areas of exposure. Consider weaknesses, reachability and business impact together.",
    image: "analyse",
    alt: "CyberCheck demonstration of attack-path analysis",
  },
  {
    name: "Act",
    title: "Decide what to review next.",
    text: "Use the findings to discuss protection priorities. Your organisation’s context, resources and judgement remain central to the next decision.",
    image: "act",
    alt: "CyberCheck demonstration of analysis findings",
  },
];
export const faqs: readonly (readonly [question: string, answer: string])[] = [
  [
    "What is CyberCheck?",
    "CyberCheck is a cyber-risk platform designed for SMEs. It brings organisation context, cyber profiles and possible attack scenarios together to help surface potential gaps and inform protection priorities.",
  ],
  [
    "Who is it for?",
    "SMEs are the primary users. Technology providers, SME networks, research collaborators, insurers and risk specialists can explore separate collaboration routes in the initiative.",
  ],
  [
    "What information is involved?",
    "The workflow uses information about the organisation, its operations, important systems and dependencies, sensitive data, existing controls and relevant history. Organisation context and generated scenarios should be reviewed for accuracy.",
  ],
  [
    "Does an assessment guarantee security?",
    "No. Findings depend on the information and scenarios being assessed. Possible attack paths are modelled scenarios, and findings need to be interpreted in context. CyberCheck supports decisions; it does not replace technical judgement or guarantee complete coverage.",
  ],
  [
    "What does joining the waitlist mean?",
    "Join for updates on early access, pilot opportunities and future demonstrations. Participation arrangements are still being finalised; joining does not guarantee access or an assessment and is separate from creating a platform account.",
  ],
  [
    "What do I need to register?",
    "The Google Form requires your work email, organisation name and acknowledgement of the stated data-use purposes. Name, job title, company website and industry are optional. Only the CyberCheck team can access your responses. Read the privacy notice in the form before submitting.",
  ],
];
