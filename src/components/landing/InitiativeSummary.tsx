import { Arrow } from "./Icons";

export default function InitiativeSummary() {
  return (
    <aside className="cc-initiative-summary">
      <div className="cc-shell">
        <p className="cc-eyebrow">PART OF A WIDER INITIATIVE</p>
        <p>
          CyberCheck sits within the Cyber Resilience Initiative, connecting
          cybersecurity diagnostics, risk understanding, recommendations and
          education for SMEs.
        </p>
        <a
          className="cc-text-link"
          href="mailto:aidf@nus.edu.sg?subject=CyberCheck%20initiative%20enquiry"
        >
          Ask about the initiative <Arrow diagonal />
        </a>
      </div>
    </aside>
  );
}
