import { useEffect, useRef, useState, type ReactElement } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Arrow } from "./Icons";

export default function WorkflowImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}): ReactElement {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [attempt, setAttempt] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const fullSizeLink = useRef<HTMLAnchorElement>(null);
  const path = useBaseUrl("/media/platform-" + image + ".png");
  const src = path + (attempt ? "?retry=" + attempt : "");
  useEffect(() => {
    const current = imageRef.current;
    if (current?.complete) setStatus(current.naturalWidth ? "ready" : "error");
  }, [src]);
  useEffect(() => {
    if (status !== "loading") return;
    const timeout = window.setTimeout(() => setStatus("error"), 15000);
    return () => window.clearTimeout(timeout);
  }, [status, src]);
  useEffect(() => {
    if (status === "ready" && attempt > 0) fullSizeLink.current?.focus();
  }, [status, attempt]);
  return (
    <figure className="cc-workflow-image" aria-busy={status === "loading"}>
      <div className="cc-image-stage">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          width="1600"
          height="900"
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
          hidden={status === "error"}
        />
        {status === "loading" && (
          <p className="cc-image-loading" role="status">
            Loading the workflow illustration…
          </p>
        )}
        {status === "error" && (
          <div className="cc-image-error" role="status">
            <strong>The illustration couldn’t load.</strong>
            <p>
              You can still read the explanation alongside it. Check your
              connection and try again.
            </p>
            <button
              type="button"
              className="cc-btn cc-btn-outline"
              onClick={() => {
                setStatus("loading");
                setAttempt(attempt + 1);
              }}
            >
              Try loading again
            </button>
          </div>
        )}
      </div>
      <figcaption>
        Illustrated workflow from the CyberCheck demonstration
      </figcaption>
      {status === "ready" && (
        <a
          ref={fullSizeLink}
          className="cc-text-link"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full-size illustration{" "}
          <span className="cc-sr-only">(opens in a new tab)</span>
          <Arrow diagonal />
        </a>
      )}
    </figure>
  );
}
