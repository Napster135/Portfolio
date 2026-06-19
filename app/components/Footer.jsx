"use client";

import { SocialsIcons } from "./SocialsIcons";

export const Footer = () => (
  <footer className="u-center w-full lg:hidden">
    <div className="border-t-2 border-[var(--bg-hover)]" />
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
      <p className="text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Victor Pacheco
      </p>
      <ul className="flex gap-4 lg:hidden">
        <SocialsIcons />
      </ul>
    </div>
  </footer>
);
