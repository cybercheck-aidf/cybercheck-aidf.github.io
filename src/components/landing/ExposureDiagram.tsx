import { useState } from "react";
import ExposureMap from "./ExposureMap";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Arrow } from "./Icons";

/** An editorial architecture illustration, distinct from the application UI. */
export default function ExposureDiagram() {
  const [paused, setPaused] = useState(false);
  const diagramUrl = useBaseUrl("/media/cyber-exposure-map.svg");

  return (
    <figure
      className="cc-exposure"
      aria-labelledby="exposure-title"
      data-motion={paused ? "paused" : "playing"}
    >
      <div className="cc-exposure-heading">
        <div>
          <p className="cc-eyebrow">BUSINESS CONTEXT → CYBER EXPOSURE</p>
          <h2 id="exposure-title">See how exposure connects.</h2>
        </div>
        <span className="cc-exposure-badge">ILLUSTRATIVE SCENARIO</span>
      </div>
      <p className="cc-exposure-scrollhint">
        Scroll the diagram to explore all five zones.
      </p>
      <div
        className="cc-exposure-canvas"
        tabIndex={0}
        role="region"
        aria-label="Cyber exposure diagram, scroll horizontally to explore all zones"
      >
        <ExposureMap />
      </div>
      <div className="cc-exposure-legend">
        <span>
          <i aria-hidden="true" /> Possible attack path
        </span>
        <button
          type="button"
          className="cc-diagram-motion"
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Resume animation" : "Pause animation"}
        </button>
        <a href={diagramUrl} target="_blank" rel="noopener noreferrer">
          View full diagram <Arrow diagonal />
          <span className="cc-sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <figcaption className="cc-exposure-caption">
        <strong>Understand the connections. Review what matters.</strong>
        <span>
          An illustrative model of systems and dependencies—not a live
          assessment or a verified finding.
        </span>
      </figcaption>
    </figure>
  );
}
