"use client";

import { useEffect, useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const navKeys = [
  { id: 1, key: "nav.about", href: "#sobreMi" },
  { id: 2, key: "nav.projects", href: "#misProyectos" },
  { id: 3, key: "nav.stack", href: "#skills" },
  { id: 4, key: "nav.services", href: "#servicios" },
];

export const Header = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(prevScrollY.current > currentScrollY || currentScrollY < 10);
      setScrolled(currentScrollY > 10);
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      id="navbar"
      className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled
          ? "bg-[var(--background)] shadow-2xl shadow-[var(--nav-shadow)]"
          : "bg-transparent"
        }
      `}
    >
      <section className="u-center flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-10 w-10 rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[var(--foreground)] transition-all duration-300 focus:outline-none md:hidden"
            aria-controls="navbar-mobile"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IconX className="w-10 h-10" />
            ) : (
              <IconMenu2 className="w-10 h-10" />
            )}
          </button>
        </div>

        <div className="flex gap-3 items-center h-full md:hidden">
          <LanguageSwitcher />
          <ThemeToggler />
        </div>

        <div
          id="navbar-mobile"
          role="menu"
          aria-orientation="vertical"
          className={`${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-[var(--background)] md:hidden`}
          style={{ boxShadow: "0px 15px 10px -15px var(--nav-shadow)" }}
        >
          <ul className="flex flex-col p-4 text-xl w-full items-start">
            {navKeys.map((link) => (
              <li key={link.id} className="w-full">
                <a
                  href={link.href}
                  className="block py-2 pl-3 hover:bg-[var(--hover-nav)] w-full"
                  onClick={toggleMenu}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex h-full">
          <ul className="flex items-center h-full w-fit">
            {navKeys.map((link) => (
              <li key={link.id} className="h-full">
                <a
                  href={link.href}
                  className="h-full flex text-lg items-center p-2 hover:bg-[var(--hover-nav)] text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-150"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
            <ThemeToggler />
          </ul>
        </div>
      </section>
    </nav>
  );
};
