import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Megaphone,
  Users,
  ShieldCheck,
  Cpu,
  Home,
  Shield,
} from "lucide-react";
import "../styles/Services.css";
import LeadForm from "./LeadForm";

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  offerings: string[];
  division: string;
  divisionUrl?: string;
  color: string;
  icon: React.ElementType;
  logo?: string;
}

const services: Service[] = [
  {
    id: "sales",
    name: "Sales Execution",
    tagline: "Build and manage your revenue pipeline",
    description:
      "We handle the full sales support process — from lead generation to appointment setting and follow-ups — ensuring your pipeline stays active and converting.",
    offerings: [
      "Lead generation and prospecting",
      "Outreach via email and LinkedIn",
      "Appointment setting",
      "CRM management",
      "Follow-ups and pipeline tracking",
    ],
    division: "Avaris Sales Solutions",
    divisionUrl: "https://avaris.astragroupph.com/",
    color: "#E31B23",
    icon: TrendingUp,
    logo: "/avaris-logo.png",
  },
  {
    id: "marketing",
    name: "Marketing Support",
    tagline: "Strengthen your brand and demand generation",
    description:
      "We support your marketing efforts with content, campaigns, and digital presence to attract and engage your target audience.",
    offerings: [
      "Social media management",
      "Content creation and design",
      "Campaign support",
      "Basic ads management",
      "Brand and messaging support",
    ],
    division: "Axis Marketing Solutions",
    divisionUrl: "https://axis.astragroupph.com/",
    color: "#631090",
    icon: Megaphone,
    logo: "/axis-logo.png",
  },
  {
    id: "hr",
    name: "HR and Recruitment",
    tagline: "Build and manage your team",
    description:
      "We help you hire, onboard, and manage talent so your business can scale with the right people.",
    offerings: [
      "Recruitment and screening",
      "Interview coordination",
      "Onboarding support",
      "Attendance and admin tracking",
      "HR process support",
    ],
    division: "Ascend HR Solutions",
    divisionUrl: "https://web.facebook.com/wehear.ascend",
    color: "#1AD3F2",
    icon: Users,
    logo: "/ascend-logo.png",
  },
  {
    id: "finance",
    name: "Finance and Admin Support",
    tagline: "Keep your operations organized and controlled",
    description:
      "We manage your financial and administrative processes to ensure accuracy, visibility, and efficiency.",
    offerings: [
      "Invoicing and billing",
      "Expense tracking",
      "Financial reporting",
      "Payroll assistance",
      "Documentation and admin support",
    ],
    division: "Astra Finance",
    color: "#2A3A9D",
    icon: ShieldCheck,
    logo: "/astra-logo.png",
  },
  {
    id: "tech",
    name: "Technology and Automation",
    tagline: "Enable your systems and workflows",
    description:
      "We build and maintain the systems that support your business operations and improve efficiency.",
    offerings: [
      "Website development",
      "CRM setup and optimization",
      "Workflow automation",
      "System integration",
      "Basic technical support",
    ],
    division: "AivoxTech Solutions",
    divisionUrl: "https://aivoxtech.astragroupph.com/",
    color: "#0e5f29",
    icon: Cpu,
  },
];

interface Partner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  offerings: string[];
  highlight: string;
  color: string;
  icon: React.ElementType;
  websiteUrl?: string;
  facebookUrl?: string;
  logo?: string;
}

const partners: Partner[] = [
  {
    id: "axial",
    name: "Axial",
    tagline: "Real Estate Services",
    description:
      "Helping families and investors get the right property faster. Residential for steady progress today, and strategic land for big wins tomorrow.",
    offerings: [
      "Residential — condos and house-and-lots ready for quick move-in, with financing via bank or Pag-IBIG",
      "Strategic Land — raw, agricultural, or commercial sites for long-term growth and high-value opportunities",
      "Faster matching, easier paperwork, transparent process",
    ],
    highlight: "Real Estate",
    color: "#059669",
    icon: Home,
    websiteUrl: "https://axialsite.com",
    facebookUrl: "https://facebook.com/axial",
    logo: "/axial-logo.png",
  },
  {
    id: "astria",
    name: "ASTRIA",
    tagline: "Insurance Solutions",
    description:
      "Comprehensive insurance advisory and coverage solutions for individuals and businesses. ASTRIA connects you with the right protection for every stage of growth.",
    offerings: ["Life insurance", "Non-life insurance", "Insurance advisory"],
    highlight: "Insurance",
    color: "#00787C",
    icon: Shield,
    websiteUrl: "https://astria.com",
    facebookUrl: "https://facebook.com/astria",
    logo: "/astria-logo.png",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, isVisible]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % services.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + services.length) % services.length);
  }, [activeIndex, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services ${isVisible ? "services--visible" : ""}`}
      aria-labelledby="services-title"
    >
      <div className="services__inner">
        {/* Section Header */}
        <div className="services__header">
          <span className="services__label">Core Services</span>
          <h2 id="services-title" className="services__title">
            What We Execute
            <span className="services__title-accent"> For You</span>
          </h2>
          <p className="services__description">
            Five execution functions. One integrated partner. Each service is
            delivered through a specialized division with trained teams,
            structured processes, and clear accountability.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="services__carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="services__arrow services__arrow--prev"
            onClick={goPrev}
            aria-label="Previous service"
            type="button"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button
            className="services__arrow services__arrow--next"
            onClick={goNext}
            aria-label="Next service"
            type="button"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>

          <div className="services__carousel-card">
            <div
              className="services__carousel-visual"
              style={{ background: `${activeService.color}08` }}
            >
              <div
                className={`services__carousel-icon ${
                  activeService.logo ? "services__carousel-icon--logo" : ""
                }`}
                style={{
                  background: activeService.logo
                    ? "white"
                    : activeService.color,
                  boxShadow: `0 0 40px ${activeService.color}40`,
                }}
              >
                {activeService.logo ? (
                  <img
                    src={activeService.logo}
                    alt={`${activeService.division} logo`}
                    className="services__carousel-logo"
                  />
                ) : (
                  <ActiveIcon size={32} strokeWidth={1.5} color="white" />
                )}
              </div>
              <span
                className="services__carousel-number"
                style={{ color: `${activeService.color}20` }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div
                className="services__carousel-division"
                style={{
                  background: `${activeService.color}15`,
                  color: activeService.color,
                }}
              >
                {activeService.division}
              </div>
            </div>

            <div className="services__carousel-content">
              <h3 className="services__carousel-title">{activeService.name}</h3>
              <p className="services__carousel-tagline">
                {activeService.tagline}
              </p>
              <p className="services__carousel-description">
                {activeService.description}
              </p>

              <ul className="services__carousel-offerings">
                {activeService.offerings.map((item) => (
                  <li key={item} className="services__carousel-offering">
                    <span
                      className="services__carousel-dot"
                      style={{ background: activeService.color }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {activeService.divisionUrl ? (
                <a
                  href={activeService.divisionUrl}
                  className="services__carousel-link"
                  style={{
                    color: activeService.color,
                    borderColor: `${activeService.color}30`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Delivered through {activeService.division}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="services__carousel-link services__carousel-link--static"
                  style={{
                    color: activeService.color,
                    borderColor: `${activeService.color}30`,
                  }}
                >
                  <span>Delivered through {activeService.division}</span>
                </span>
              )}
            </div>

            <div
              className="services__carousel-accent"
              style={{ background: activeService.color }}
            />
          </div>

          <div className="services__dots">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`services__dot ${index === activeIndex ? "services__dot--active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to ${service.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                type="button"
                style={
                  index === activeIndex
                    ? { background: service.color }
                    : undefined
                }
              />
            ))}
          </div>

          <div className="services__progress">
            <div
              className="services__progress-bar"
              style={{
                width: `${((activeIndex + 1) / services.length) * 100}%`,
                background: activeService.color,
              }}
            />
          </div>
        </div>

        {/* Partner Services */}
        <div className="services__partners">
          <div className="services__partners-header">
            <span className="services__partners-label">Partner Brands</span>
            <h3 className="services__partners-title">
              Also Part of{" "}
              <span className="services__partners-title-accent">
                the Astra Group
              </span>
            </h3>
          </div>

          <div className="services__partners-grid">
            {partners.map((partner) => {
              const PartnerIcon = partner.icon;
              return (
                <div key={partner.id} className="partner-card">
                  <div
                    className="partner-card__visual"
                    style={{ background: `${partner.color}08` }}
                  >
                    <div
                      className={`partner-card__icon ${
                        partner.logo ? "partner-card__icon--logo" : ""
                      }`}
                      style={{
                        background: partner.logo ? "white" : partner.color,
                        boxShadow: `0 0 40px ${partner.color}40`,
                      }}
                    >
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="partner-card__logo"
                        />
                      ) : (
                        <PartnerIcon
                          size={28}
                          strokeWidth={1.5}
                          color="white"
                        />
                      )}
                    </div>
                    <span
                      className="partner-card__highlight"
                      style={{
                        background: `${partner.color}15`,
                        color: partner.color,
                      }}
                    >
                      {partner.highlight}
                    </span>
                  </div>

                  <div className="partner-card__content">
                    <div className="partner-card__meta">
                      <h4 className="partner-card__name">{partner.name}</h4>
                      <span className="partner-card__tagline">
                        {partner.tagline}
                      </span>
                    </div>

                    <p className="partner-card__description">
                      {partner.description}
                    </p>

                    <ul className="partner-card__offerings">
                      {partner.offerings.map((item) => (
                        <li key={item} className="partner-card__offering">
                          <span
                            className="partner-card__dot"
                            style={{ background: partner.color }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="partner-card__actions">
                      {partner.websiteUrl && (
                        <a
                          href={partner.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="partner-card__btn"
                          style={{
                            borderColor: `${partner.color}40`,
                            color: partner.color,
                          }}
                        >
                          Visit Website
                          <ExternalLink size={14} />
                        </a>
                      )}

                      {partner.facebookUrl && (
                        <a
                          href={partner.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="partner-card__btn"
                          style={{
                            borderColor: `${partner.color}40`,
                            color: partner.color,
                          }}
                        >
                          Facebook Page
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className="partner-card__accent"
                    style={{ background: partner.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="services__footer">
          <p className="services__footer-text">
            Need multiple functions? We integrate them under one system.
          </p>
          <a
            className="services__footer-btn"
            onClick={(e) => {
              setFormOpen(true);
              e.preventDefault();
            }}
          >
            <span>Talk to Us About Your Needs</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
