import {useState} from "react";
import SectionTabs from "./SectionTabs";
import {Arrow} from "./Icons";

const scenarios = [
  {
    label: "Orders & deliveries",
    steps: [
      ["Your orders depend on a shared system.", "Your team uses an online system to receive orders and coordinate deliveries."],
      ["One compromised account could interrupt fulfilment.", "Unauthorised access could delay orders, change delivery details or expose customer information."],
      ["How would you keep orders moving?", "Review account access, sign-in protection and a fallback process if the system becomes unavailable."],
    ],
  },
  {
    label: "Customer information",
    steps: [
      ["Your team shares customer records.", "Sales and support staff rely on a shared drive or application for contact details and service history."],
      ["A shared link could expose more than intended.", "Overly broad permissions or an old account could give someone access to information they no longer need."],
      ["Who can still see those records?", "Review sharing settings, inactive accounts and how access is removed when staff or suppliers leave."],
    ],
  },
  {
    label: "Supplier access",
    steps: [
      ["An IT partner helps run your systems.", "An external provider uses remote access to maintain software and support your team."],
      ["Supplier access could become an entry point.", "A compromised supplier account could provide a route into systems your daily operations depend on."],
      ["What can that connection reach?", "Review permissions, sign-in protection and how supplier access can be monitored or disabled during an incident."],
    ],
  },
];
const stages = ["BUSINESS DEPENDENCY", "POSSIBLE DISRUPTION", "PRIORITY TO REVIEW"];

/** Business examples share the same dependency → exposure → review structure. */
export default function BusinessScenarios() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="cc-shell cc-example" aria-labelledby="example-title">
      <div className="cc-example-heading">
        <p className="cc-eyebrow">YOUR BUSINESS, CONNECTED</p>
        <h3 id="example-title">What would disruption look like for your business?</h3>
        <p>Choose a familiar situation to explore. These are illustrative examples, not customer cases or assessment findings.</p>
      </div>
      <SectionTabs prefix="scenario" label="Explore a business scenario"
        labels={scenarios.map(s => s.label)} selected={selected} onSelect={setSelected}
        className="cc-scenario-tabs" responsiveVertical />
      {scenarios.map((scenario, index) => (
        <div key={scenario.label} id={`scenario-panel-${index}`} role="tabpanel"
          aria-labelledby={`scenario-tab-${index}`} tabIndex={0} hidden={selected !== index}>
          <div className="cc-questions cc-scenario-path">
            {scenario.steps.map(([title, text], step) => (
              <article key={title}>
                <span className="cc-index"><span className="cc-scenario-number">0{step + 1}</span>{stages[step]}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      ))}
      <div className="cc-scenario-summary">
        <p>CyberCheck brings these dependencies and possible attack scenarios into one assessment workflow. Findings still need review and business judgement.</p>
        <a className="cc-text-link" href="#platform">Explore the assessment workflow <Arrow /></a>
      </div>
    </div>
  );
}
