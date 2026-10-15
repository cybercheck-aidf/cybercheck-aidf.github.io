import { useEffect, useState, type ReactElement } from "react";

/** Manual activation keeps keyboard focus independent of image loading. */
export default function SectionTabs({
  prefix,
  label,
  labels,
  selected,
  onSelect,
  className,
  numbered = false,
  responsiveVertical = false,
}: {
  prefix: string;
  label: string;
  labels: string[];
  selected: number;
  onSelect: (index: number) => void;
  className: string;
  numbered?: boolean;
  responsiveVertical?: boolean;
}): ReactElement {
  const [vertical, setVertical] = useState(false);
  useEffect(() => {
    if (!responsiveVertical) return;
    const query = window.matchMedia("(max-width: 600px)");
    const update = () => setVertical(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [responsiveVertical]);
  return (
    <div
      className={className}
      role="tablist"
      aria-label={label}
      aria-orientation={vertical ? "vertical" : "horizontal"}
    >
      {labels.map((name, index) => (
        <button
          type="button"
          role="tab"
          key={name}
          id={prefix + "-tab-" + index}
          aria-controls={prefix + "-panel-" + index}
          aria-selected={selected === index}
          tabIndex={selected === index ? 0 : -1}
          onClick={() => onSelect(index)}
          onKeyDown={(event) => {
            const previousKey = vertical ? "ArrowUp" : "ArrowLeft";
            const nextKey = vertical ? "ArrowDown" : "ArrowRight";
            const keys = [previousKey, nextKey, "Home", "End"];
            if (!keys.includes(event.key)) return;
            event.preventDefault();
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? labels.length - 1
                  : (index + (event.key === nextKey ? 1 : -1) + labels.length) %
                    labels.length;
            event.currentTarget.parentElement
              ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
              [next]?.focus();
          }}
        >
          {numbered && <span aria-hidden="true">0{index + 1}</span>}
          {name}
          <span className="cc-step-arrow" aria-hidden="true">
            {selected === index ? "✓" : vertical ? "↓" : "→"}
          </span>
        </button>
      ))}
    </div>
  );
}
