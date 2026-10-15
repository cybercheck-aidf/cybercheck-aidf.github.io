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
      <div className="cc-shell cc-example" aria-labelledby="example-title">
        <div className="cc-example-heading">
          <h3 id="example-title">
            What could this mean for a business like yours?
          </h3>
          <p>
            Illustrative example · not a CyberCheck finding or customer case
            study.
          </p>
        </div>
        <div className="cc-questions">
          <article>
            <span className="cc-index">01 / BUSINESS DEPENDENCY</span>
            <h4>Your orders depend on a shared system.</h4>
            <p>
              Your team uses the same online system to receive orders and
              coordinate deliveries.
            </p>
          </article>
          <article>
            <span className="cc-index">02 / POSSIBLE DISRUPTION</span>
            <h4>What if access were compromised?</h4>
            <p>
              Unauthorised access could interrupt order handling or expose
              customer information.
            </p>
          </article>
          <article>
            <span className="cc-index">03 / NEXT QUESTION</span>
            <h4>What protection needs a closer look?</h4>
            <p>
              Review who has access, how accounts are protected and how
              operations would continue if the system became unavailable.
            </p>
          </article>
        </div>
        <p className="cc-example-note">
          CyberCheck helps structure this kind of discussion around your
          organisation’s context. Findings need review; they do not guarantee
          security.
        </p>
      </div>
    </section>
  );
}
