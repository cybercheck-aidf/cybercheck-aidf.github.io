import { faqs, LINKEDIN } from "@site/src/data/landing";
import { Arrow } from "./Icons";

export default function FaqSection() {
  return (
    <section id="questions" className="cc-section cc-faq-section">
      <div className="cc-shell cc-faq-grid">
        <div>
          <p className="cc-eyebrow">A FEW THINGS TO KNOW</p>
          <h2>
            Your questions,
            <br />a clearer starting point.
          </h2>
          <p>Have a question about CyberCheck?</p>
          <a className="cc-text-link" href={LINKEDIN}>
            Ask us on LinkedIn <Arrow diagonal />
          </a>
          <p className="cc-contact-help">
            On our LinkedIn Page, select Message to ask a question. If it is
            unavailable, use email below. LinkedIn sign-in may be required.
          </p>
          <a className="cc-text-link" href="mailto:aidf@nus.edu.sg">
            Prefer email? Contact the team <Arrow />
          </a>
        </div>
        <div className="cc-faqs">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
