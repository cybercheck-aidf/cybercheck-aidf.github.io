import { useRef, useState } from "react";
import Link from "@docusaurus/Link";
import { WAITLIST, PLATFORM } from "@site/src/data/landing";
import { Arrow, Mark } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="cc-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="cc-shell cc-nav">
        <Link className="cc-brand" to="/" aria-label="CyberCheck home">
          <Mark />
          <span>
            Cyber<span className="cc-brand-check">Check</span>
          </span>
        </Link>
        <div className="cc-nav-controls">
        <ThemeToggle />
        <button
          ref={menuButton}
          type="button"
          className="cc-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="cc-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        </div>
        <nav
          id="cc-navigation"
          className={menuOpen ? "cc-nav-links is-open" : "cc-nav-links"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Why CyberCheck
          </a>
          <a href="#platform" onClick={() => setMenuOpen(false)}>
            The platform
          </a>
          <a href="#participate" onClick={() => setMenuOpen(false)}>
            Get involved
          </a>
          <a className="cc-nav-platform" href={PLATFORM}>
            Open platform <Arrow diagonal />
          </a>
          <a className="cc-btn cc-btn-small" href={WAITLIST}>
            Join the waitlist <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}
