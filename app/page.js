"use client";

import { Header } from "./components/Header";
import { PanelHero } from "./components/PanelHero";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer";
import { ProjectsLayout } from "./components/Projects/ProjectsLayout";
import { ButtonToTop } from "./components/ButtonToTop";
import { SkillsLayout } from "./components/Skills/SkillsLayout";
import { ServicesLayout } from "./components/Services/ServicesLayout";
import { LeftPanel } from "./components/LeftPanel";

export default function HomePage() {
  return (
    <>
      {/* Mobile only: fixed header + full-screen hero */}
      <Header />
      <PanelHero />

      {/* Two-column grid on desktop, single column on mobile */}
      <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:max-w-[1200px] lg:mx-auto">
        {/* Left: sticky identity panel — desktop only */}
        <LeftPanel />

        {/* Right: scrollable content */}
        <main className="lg:border-l lg:border-[var(--bg-hover)]">
          <AboutMe />
          <ProjectsLayout />
          <SkillsLayout />
          <ServicesLayout />
          <Footer />
        </main>
      </div>

      <ButtonToTop />
    </>
  );
}
