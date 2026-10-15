import { LINKEDIN } from "@site/src/data/landing";
import { Arrow } from "./Icons";

export default function CommunitySection() {
  return (
    <section className="cc-community">
      <div className="cc-shell cc-community-grid">
        <div>
          <p className="cc-eyebrow">KEEP THE CONVERSATION GOING</p>
          <h2>Cybersecurity, in business terms.</h2>
          <p>
            Follow CyberCheck on LinkedIn for SME-focused perspectives,
            practical questions and updates from the project.
          </p>
        </div>
        <a className="cc-btn cc-btn-outline" href={LINKEDIN}>
          <span className="cc-linkedin" aria-hidden="true">
            in
          </span>{" "}
          Follow on LinkedIn <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
