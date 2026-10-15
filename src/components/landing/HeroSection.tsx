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
            See how potential security gaps could affect your operations—and
            what to review next.
          </p>
          <p className="cc-hero-description">
            CyberCheck is a cyber-risk platform for small and medium-sized
            enterprises (SMEs). It brings your business context, systems and
            possible attack scenarios into one assessment workflow.
          </p>
          <div className="cc-actions">
            <a
              className="cc-btn"
              href={WAITLIST}
              aria-describedby="hero-waitlist-purpose hero-availability"
            >
              Join the waitlist <Arrow />
            </a>
            <a className="cc-btn cc-btn-outline" href="#platform">
              See how it works <Arrow />
            </a>
          </div>
          <p id="hero-waitlist-purpose" className="cc-cta-note">
            Get updates on early access, pilot opportunities and future
            demonstrations.
          </p>
          <p id="hero-availability" className="cc-availability">
            Participation details are being finalised. Joining registers
            interest; it does not guarantee access.
          </p>
          <p className="cc-cta-note cc-form-hint">
            Work email + organisation name · Google Form · Other profile
            questions optional
          </p>
          <a
            className="cc-partner-link cc-text-link"
            href="#participate"
            onClick={onPartnerSelect}
          >
            Partner with CyberCheck <Arrow />
          </a>
          <a className="cc-video-link" href="#demo">
            <span className="cc-play" aria-hidden="true">
              ▶
            </span>{" "}
            See CyberCheck in action{" "}
            <span className="cc-subtle">Platform walkthrough</span>
          </a>
        </div>
        <ExposureDiagram />
      </div>
    </section>
  );
}
