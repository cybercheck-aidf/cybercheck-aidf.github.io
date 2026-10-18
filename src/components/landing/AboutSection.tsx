import BusinessScenarios from "./BusinessScenarios";

export default function AboutSection() {
  return (
    <section id="about" className="cc-section">
      <div className="cc-shell cc-about-grid">
        <div>
          <p className="cc-eyebrow">WHY CYBERCHECK</p>
          <h2>
            Cybersecurity starts
            <br />
            with better questions.
          </h2>
        </div>
        <div className="cc-about-text">
          <p className="cc-body-large">
            You know your business depends on technology. But do you know where
            it may be exposed?
          </p>
          <p>
            Disconnected technical findings can make it hard to see what matters
            to day-to-day operations. CyberCheck brings business context and
            potential cyber exposure into the same conversation, so you can make
            better-informed choices.
          </p>
        </div>
      </div>
      <BusinessScenarios />
    </section>
  );
}
