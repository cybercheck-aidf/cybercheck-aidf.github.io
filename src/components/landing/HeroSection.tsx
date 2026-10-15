import { WAITLIST } from "@site/src/data/landing";
import { Arrow } from "./Icons";
import ExposureDiagram from "./ExposureDiagram";

export default function HeroSection({
  onPartnerSelect,
}: {
  onPartnerSelect: () => void;
}) {
  return (
    <section className="cc-hero">
      <div className="cc-shell cc-hero-grid">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">
            <span className="cc-dot" /> CYBER RESILIENCE FOR SMEs
          </p>
          <h1>
            A clearer view of
            <br />
            your <span>cyber risk.</span>
          </h1>
          <p className="cc-lead">
            Understand how security gaps could affect your SME—and what to
            review next.
          </p>
          <p className="cc-hero-description">
            CyberCheck connects your business context, systems and attack
            scenarios in one cyber-risk assessment workflow.
          </p>
          <div className="cc-actions">
            <a
              className="cc-btn"
              href={WAITLIST}
              aria-describedby="hero-waitlist-purpose"
            >
              Join the waitlist <Arrow />
            </a>
            <a className="cc-btn cc-btn-outline" href="#platform">
              See how it works <Arrow />
            </a>
          </div>
          <p id="hero-waitlist-purpose" className="cc-hero-waitlist-note">
            Register interest in early access and pilots. Opens Google Forms.
          </p>
          <div className="cc-hero-support-links">
            <a href="#join">Waitlist details</a>
            <a href="#participate" onClick={onPartnerSelect}>
              Explore partnerships <Arrow />
            </a>
          </div>
        </div>
        <ExposureDiagram />
      </div>
    </section>
  );
}
