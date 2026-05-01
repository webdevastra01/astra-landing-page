import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Truck,
  Coffee,
  Briefcase,
  Cpu,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Users,
} from "lucide-react";
import "../styles/Footer.css";

interface BusinessUnit {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const businessUnits: BusinessUnit[] = [
  {
    icon: <Building2 size={18} strokeWidth={2} />,
    label: "Real Estate",
    href: "https://axialrealestate-services.vercel.app/",
  },
  {
    icon: <Truck size={18} strokeWidth={2} />,
    label: "Logistics",
    href: "https://www.jmavecars.com/",
  },
  {
    icon: <Coffee size={18} strokeWidth={2} />,
    label: "Hospitality",
    href: "https://web.facebook.com/ihubdvo",
  },
  {
    icon: <Phone size={18} strokeWidth={2} />,
    label: "Sales Solutions",
    href: "https://avarissalessolutions.vercel.app/",
  },
  {
    icon: <Briefcase size={18} strokeWidth={2} />,
    label: "Marketing Solutions",
    href: "https://axismarketingsolutions-virid.vercel.app/",
  },
  {
    icon: <Users size={18} strokeWidth={2} />,
    label: "Human Resources",
    href: "https://web.facebook.com/wehear.ascend",
  },
  {
    icon: <Cpu size={18} strokeWidth={2} />,
    label: "Technology",
    href: "#technology",
  },
  {
    icon: <Shield size={18} strokeWidth={2} />,
    label: "Insurance",
    href: "https://astriainsurancesolutions.vercel.app/",
  },
];

const quickLinks = [
  { label: "About Astra", href: "#about" },
  { label: "Core Services", href: "#services" },
  { label: "Why Astra?", href: "#why-astra" },
  { label: "Vision & Expansion", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

// const socialLinks = [
//   {
//     icon: <Cpu size={20} strokeWidth={2} />,
//     label: "LinkedIn",
//     href: "#",
//   },
//   {
//     icon: <Cpu size={20} strokeWidth={2} />,
//     label: "Facebook",
//     href: "#",
//   },
//   {
//     icon: <Cpu size={20} strokeWidth={2} />,
//     label: "Instagram",
//     href: "#",
//   },
// ];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer ${isVisible ? "footer--visible" : ""}`}
      aria-label="Astra Group of Companies footer"
    >
      <div className="footer__container">
        {/* Top accent line */}
        <div className="footer__accent" aria-hidden="true" />

        {/* Main footer grid */}
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__brand-header">
              <h2 className="footer__brand-name">Astra Group of Companies</h2>
              <span className="footer__brand-tagline">
                Offshore Execution Partner
              </span>
            </div>
            <p className="footer__brand-description">
              Astra Group of Companies is a global execution partner helping businesses scale
              through structured offshore teams across sales, marketing, HR,
              finance, technology, and operations.
            </p>
            <div className="footer__brand-contact">
              <a
                href="mailto:sales@astragroupph.com"
                className="footer__contact-link"
              >
                <Mail size={16} strokeWidth={2} />
                <span>sales@astragroupph.com</span>
              </a>
              <a href="tel:+639129676049" className="footer__contact-link">
                <Phone size={16} strokeWidth={2} />
                <span>+63 912 967 6049</span>
              </a>
              <span className="footer__contact-text">
                <MapPin size={16} strokeWidth={2} />
                <span>Davao City, Philippines</span>
              </span>
            </div>
          </div>

          {/* Business Units column */}
          <div className="footer__column footer__column--units">
            <h3 className="footer__column-title">Business Units</h3>
            <ul className="footer__column-list footer__column-list--grid">
              {businessUnits.map((unit, index) => (
                <li
                  key={unit.label}
                  className="footer__column-item"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <a
                    href={unit.href}
                    className="footer__column-link"
                    target="_blank"
                  >
                    <span className="footer__column-icon">{unit.icon}</span>
                    <span className="footer__column-label">{unit.label}</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="footer__column-arrow"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div className="footer__column">
            <h3 className="footer__column-title">Quick Links</h3>
            <ul className="footer__column-list">
              {quickLinks.map((link, index) => (
                <li
                  key={link.label}
                  className="footer__column-item"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <a
                    href={link.href}
                    className="footer__column-link footer__column-link--simple"
                  >
                    <span className="footer__column-label">{link.label}</span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="footer__column-arrow"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Astra Group of Companies, Inc.
              All rights reserved.
            </p>
          </div>
          {/* <div className="footer__bottom-right">
            <ul className="footer__social">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
