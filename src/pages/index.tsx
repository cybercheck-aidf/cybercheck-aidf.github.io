import { useState, type ReactElement } from "react";
import LayoutProvider from "@theme/Layout/Provider";
import PageMetadata from "@site/src/components/landing/PageMetadata";
import SiteHeader from "@site/src/components/landing/SiteHeader";
import HeroSection from "@site/src/components/landing/HeroSection";
import Affiliations from "@site/src/components/landing/Affiliations";
import AboutSection from "@site/src/components/landing/AboutSection";
import WorkflowSection from "@site/src/components/landing/WorkflowSection";
import DemoSection from "@site/src/components/landing/DemoSection";
import ParticipationSection from "@site/src/components/landing/ParticipationSection";
import InitiativeSummary from "@site/src/components/landing/InitiativeSummary";
import FaqSection from "@site/src/components/landing/FaqSection";
import CommunitySection from "@site/src/components/landing/CommunitySection";
import JoinSection from "@site/src/components/landing/JoinSection";
import SiteFooter from "@site/src/components/landing/SiteFooter";

/** Compose the page; each section owns its content and local interactions. */
function LandingPage(): ReactElement {
  // Shared only because the hero link selects a route farther down the page.
  const [audience, setAudience] = useState(0);

  return (
    <>
      <PageMetadata />
      <a className="cc-skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection onPartnerSelect={() => setAudience(1)} />
        <Affiliations />
        <AboutSection />
        <WorkflowSection />
        <DemoSection />
        <ParticipationSection selected={audience} onSelect={setAudience} />
        <InitiativeSummary />
        <FaqSection />
        <CommunitySection />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default function Home(): ReactElement {
  return <LayoutProvider><LandingPage /></LayoutProvider>;
}
