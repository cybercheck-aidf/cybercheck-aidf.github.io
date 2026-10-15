import { useState } from "react";
import { steps, WAITLIST } from "@site/src/data/landing";
import { Arrow } from "./Icons";
import SectionTabs from "./SectionTabs";
import WorkflowImage from "./WorkflowImage";

export default function WorkflowSection() {
  const [step, setStep] = useState(0);
  return (
    <section id="platform" className="cc-section cc-platform-section">
      <div className="cc-shell">
        <div className="cc-section-heading">
          <div>
            <p className="cc-eyebrow">INSIDE THE PLATFORM</p>
            <h2>
              From business context
              <br />
              to a more informed next step.
            </h2>
          </div>
          <p>
            Follow the CyberCheck workflow.
            <br />
            Select a stage to take a closer look.
          </p>
        </div>
        <SectionTabs
          numbered
          prefix="workflow"
          label="Platform workflow stages"
          labels={steps.map((item) => item.name)}
          selected={step}
          onSelect={setStep}
          className="cc-step-buttons"
        />
        <p className="cc-sr-only">
          Use Left and Right Arrow to move between stages, then Enter or Space
          to select one. Home and End move to the first and last stage.
        </p>
        {steps.map((item, index) => (
          <div
            className="cc-workflow-panel"
            key={item.name}
            id={"workflow-panel-" + index}
            role="tabpanel"
            aria-labelledby={"workflow-tab-" + index}
            tabIndex={0}
            hidden={step !== index}
          >
            <div className="cc-workflow-copy">
              <span className="cc-index">
                0{index + 1} / {item.name.toUpperCase()}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="cc-text-link" href={WAITLIST}>
                Join the CyberCheck waitlist <Arrow />
              </a>
            </div>
            {step === index && (
              <WorkflowImage
                key={item.image}
                image={item.image}
                alt={item.alt}
              />
            )}
          </div>
        ))}
        <p className="cc-method-note">
          A model supports a decision. Findings depend on the information and
          scenarios assessed; review and business judgement remain essential.
        </p>
      </div>
    </section>
  );
}
