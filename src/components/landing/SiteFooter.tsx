import Link from "@docusaurus/Link";
import { WAITLIST, PLATFORM, LINKEDIN } from "@site/src/data/landing";
import { Arrow, Mark } from "./Icons";

export default function SiteFooter() {
  return (
    <footer className="cc-footer">
      <div className="cc-shell">
        <div className="cc-footer-top">
          <div>
            <Link className="cc-brand" to="/">
              <Mark />
              <span>CyberCheck</span>
            </Link>
            <p>A clearer view. A more informed next step.</p>
          </div>
          <div>
            <span className="cc-footer-label">EXPLORE</span>
            <a href="#about">About CyberCheck</a>
            <a href="#platform">The platform</a>
            <a href="#participate">Get involved</a>
          </div>
          <div>
            <span className="cc-footer-label">CONNECT</span>
            <a href={WAITLIST}>
              Join the waitlist <Arrow diagonal />
            </a>
            <a href={LINKEDIN}>
              LinkedIn <Arrow diagonal />
            </a>
            <a href="mailto:aidf@nus.edu.sg">aidf@nus.edu.sg</a>
          </div>
          <div>
            <span className="cc-footer-label">PLATFORM</span>
            <a className="cc-footer-platform" href={PLATFORM}>
              cybercheck.ncl.sg <Arrow diagonal />
            </a>
            <p>
              Explore the CyberCheck
              <br />
              application.
            </p>
          </div>
        </div>
        <div className="cc-footer-bottom">
          <span>© {new Date().getFullYear()} CyberCheck</span>
          <span>Cyber Resilience Initiative · NCL &amp; AIDF</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
