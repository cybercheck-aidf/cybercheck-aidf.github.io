import { useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { steps, WAITLIST } from "@site/src/data/landing";
import { Arrow } from "./Icons";

export default function DemoSection() {
  const [videoState, setVideoState] = useState<
    "idle" | "loading" | "playing" | "paused" | "error"
  >("idle");
  const [videoAttempt, setVideoAttempt] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPlayButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (videoAttempt > 0) videoPlayButton.current?.focus();
  }, [videoAttempt]);
  const posterUrl = useBaseUrl("/media/platform-hero.png");
  const videoUrl = useBaseUrl("/media/cybercheck-platform.mp4");
  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    setVideoState("loading");
    if (video.error) video.load();
    try {
      await video.play();
    } catch {
      setVideoState("error");
    }
  };
  return (
    <section id="demo" className="cc-section">
      <div className="cc-shell cc-demo-grid">
        <div>
          <p className="cc-eyebrow">WATCH THE WALKTHROUGH</p>
          <h2>
            A closer look
            <br />
            at CyberCheck.
          </h2>
          <p>
            Prefer a guided introduction? Watch the workflow in the platform
            demonstration, or read the walkthrough below.
          </p>
          <a className="cc-text-link" href={WAITLIST}>
            Interested? Join the waitlist <Arrow />
          </a>
        </div>
        <div className="cc-video-frame">
          <video
            ref={videoRef}
            key={videoAttempt}
            controls
            playsInline
            preload="metadata"
            poster={posterUrl}
            aria-label="CyberCheck platform demonstration"
            aria-describedby="video-help"
            onPlaying={() => setVideoState("playing")}
            onPause={() => setVideoState("paused")}
            onEnded={() => setVideoState("paused")}
            onWaiting={() => setVideoState("loading")}
            onError={() => setVideoState("error")}
          >
            <source
              src={videoUrl + (videoAttempt ? "?retry=" + videoAttempt : "")}
              type="video/mp4"
              onError={() => setVideoState("error")}
            />
            Your browser does not support embedded video.{" "}
            <a href={videoUrl}>Download the walkthrough</a>.
          </video>
          <p>
            CyberCheck platform walkthrough{" "}
            <span>2 min 25 sec · Play when ready</span>
          </p>
          <div className="cc-video-actions">
            {videoState !== "error" && (
              <button
                ref={videoPlayButton}
                type="button"
                className="cc-btn"
                onClick={() => {
                  if (videoState === "playing" || videoState === "loading") {
                    videoRef.current?.pause();
                    setVideoState("paused");
                  } else {
                    void playVideo();
                  }
                }}
              >
                {videoState === "playing" || videoState === "loading"
                  ? "Pause walkthrough"
                  : videoState === "paused"
                    ? "Resume walkthrough"
                    : "Play walkthrough"}{" "}
                <span aria-hidden="true">
                  {videoState === "playing" || videoState === "loading"
                    ? "Ⅱ"
                    : "▶"}
                </span>
              </button>
            )}
            {videoState === "error" && (
              <button
                type="button"
                className="cc-btn cc-btn-outline"
                onClick={() => {
                  setVideoAttempt(videoAttempt + 1);
                  setVideoState("idle");
                }}
              >
                Reload video
              </button>
            )}
            <a className="cc-text-link" href={videoUrl} download>
              Download video (7.4 MB) <Arrow />
            </a>
          </div>
          <p id="video-help" className="cc-video-status" role="status">
            {videoState === "error"
              ? "The video could not load. Check your connection, reload the video, or download it to watch locally."
              : videoState === "loading"
                ? "Loading video… If it does not start, download it or read the walkthrough below."
                : "Use Play to watch here, or download the video to watch in your own player."}
          </p>
          <details className="cc-video-description" id="video-description">
            <summary>Read the video walkthrough</summary>
            <ol>
              {steps.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}: </strong>
                  {item.text}
                </li>
              ))}
            </ol>
            <p>
              The video illustrates the workflow; it is not a live assessment.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
