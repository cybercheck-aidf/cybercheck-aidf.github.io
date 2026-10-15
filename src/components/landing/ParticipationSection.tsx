import { audiences } from "@site/src/data/landing";
import { Arrow } from "./Icons";
import SectionTabs from "./SectionTabs";

export default function ParticipationSection({
  selected,
  onSelect,
}: {
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section id="participate" className="cc-section cc-participate">
      <div className="cc-shell">
        <div className="cc-section-heading">
          <div>
            <p className="cc-eyebrow">GET INVOLVED</p>
            <h2>
              Better resilience
              <br />
              takes a community.
            </h2>
          </div>
          <p>
            SMEs are at the heart of the project. Technology providers,
            <br className="cc-desktop-break" /> SME networks, researchers and
            insurers can contribute too.
          </p>
        </div>
        <SectionTabs
          responsiveVertical
          prefix="audience"
          label="Choose your participation route"
          labels={audiences.map((route) => route.label)}
          selected={selected}
          onSelect={onSelect}
          className="cc-audience-switch"
        />
        {audiences.map((route, index) => (
          <div
            key={route.id}
            id={"audience-panel-" + index}
            role="tabpanel"
            aria-labelledby={"audience-tab-" + index}
            tabIndex={0}
            hidden={selected !== index}
          >
            <div className="cc-audience-panel">
              <div>
                <span className="cc-index">{route.eyebrow}</span>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
                <a
                  className="cc-btn"
                  href={route.href}
                  aria-describedby={
                    route.id === "sme" ? "sme-availability" : undefined
                  }
                >
                  {route.action} <Arrow />
                </a>
                {route.id === "sme" && (
                  <p id="sme-availability" className="cc-availability">
                    Participation details are being finalised. Registering
                    interest does not guarantee access or an assessment.
                  </p>
                )}
                {route.note && <p className="cc-partner-note">{route.note}</p>}
              </div>
              <div className="cc-participation-list">
                {route.items.map(([title, text], i) => (
                  <article key={title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
