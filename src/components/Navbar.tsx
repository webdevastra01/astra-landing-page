import { useState, useEffect, useCallback } from "react";
import "../styles/Navbar.css";
import LeadForm from "./LeadForm";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Services", href: "#services" },
  { label: "Founder", href: "#founder" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#footer" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <>
      <header
        className={`navbar${mobileOpen ? " navbar--open" : ""}${scrolled ? " navbar--scrolled" : ""}`}
      >
        <div className="navbar__container">
          <a href="/" className="navbar__brand" aria-label="Astra Group home">
            <img src="/astra-logo.png" alt="Astra Group of Companies, INC." />
          </a>

          <button
            className="navbar__toggle"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((p) => !p)}
          >
            <span className="navbar__hamburger" aria-hidden="true" />
          </button>

          <nav
            id="primary-navigation"
            className={`navbar__nav${mobileOpen ? " navbar__nav--open" : ""}`}
            aria-hidden={!mobileOpen}
          >
            <ul className="navbar__links" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    role="menuitem"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="navbar__cta"
              onClick={() => {
                setMobileOpen(false);
                setFormOpen(true);
              }}
            >
              Partner With Astra
            </button>
          </nav>
        </div>
      </header>
      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
