import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Target,
  Settings,
  Globe,
  TrendingUp,
  Megaphone,
  Users,
  Cpu,
  Home,
  Shield,
  Car,
  Coffee,
  Dot,
} from "lucide-react";
import "../styles/Services.css";
import LeadForm from "./LeadForm";

/* ================================================================
   DATA MODELS
   ================================================================ */

interface CorePillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  offerings: string[];
  color: string;
  icon: React.ElementType;
}

interface ExecutionCompany {
  id: string;
  name: string;
  tagline: string;
  description: string;
  offerings: string[];
  color: string;
  icon: React.ElementType;
  logo?: string;
  websiteUrl?: string;
  facebookUrl?: string;
}

/* ================================================================
   CORE SOLUTION PILLARS
   3 main operational functions of Astra Business Solutions
   ================================================================ */

const corePillars: CorePillar[] = [
  {
    id: "advisory",
    name: "Astra Advisory",
    tagline: "Strategy & Growth Solutions",
    description:
      "Strategic guidance and operational frameworks that align your business objectives with executable roadmaps. We audit, structure, and optimize how your organization grows.",
    offerings: [
      "Business audits & diagnostics",
      "SOP development & documentation",
      "KPI alignment & performance frameworks",
      "Organizational structuring",
      "Business consulting & advisory",
    ],
    color: "#04397C",
    icon: Target,
  },
  {
    id: "shared-operations",
    name: "Astra Shared Operations",
    tagline: "Admin & Finance Operations",
    description:
      "Centralized operational support that keeps your back office running with precision. From bookkeeping to executive assistance, we handle the infrastructure so you focus on growth.",
    offerings: [
      "Bookkeeping & financial reporting",
      "AP/AR management & invoicing",
      "Payroll support & compliance",
      "Executive & admin assistance",
      "Documentation, scheduling & coordination",
      "Translation, localization & multilingual support",
    ],
    color: "#2A3A9D",
    icon: Settings,
  },
  {
    id: "global-support",
    name: "Astra Global Support",
    tagline: "Offshore Execution Teams",
    description:
      "Remote talent and operational teams deployed across time zones. We build, manage, and scale offshore units that function as seamless extensions of your organization.",
    offerings: [
      "Offshore staffing & team deployment",
      "Remote operations management",
      "Multilingual offshore support",
      "Remote admin & finance teams",
      "Remote customer support operations",
    ],
    color: "#CE2A28",
    icon: Globe,
  },
];

/* ================================================================
   SPECIALIST EXECUTION COMPANIES
   8 operational subsidiaries under the Astra Group ecosystem
   ================================================================ */

const executionCompanies: ExecutionCompany[] = [
  {
    id: "avaris",
    name: "Avaris Sales Solutions",
    tagline: "Sales Execution",
    description:
      "Full sales support from lead generation to appointment setting and pipeline management. We keep your revenue engine active and converting.",
    offerings: [
      "Lead generation & prospecting",
      "Outreach via email & LinkedIn",
      "Appointment setting",
      "CRM management",
      "Follow-ups & pipeline tracking",
    ],
    color: "#E31B23",
    icon: TrendingUp,
    logo: "/avaris-logo.png",
    websiteUrl: "https://avaris.astragroupph.com/",
  },
  {
    id: "axis",
    name: "Axis Marketing Solutions",
    tagline: "Marketing Support",
    description:
      "Brand strengthening and demand generation through content, campaigns, and digital presence management.",
    offerings: [
      "Social media management",
      "Content creation & design",
      "Campaign support",
      "Basic ads management",
      "Brand & messaging support",
    ],
    color: "#631090",
    icon: Megaphone,
    logo: "/axis-logo.png",
    websiteUrl: "https://axis.astragroupph.com/",
  },
  {
    id: "ascend",
    name: "Ascend HR Solutions",
    tagline: "HR & Recruitment",
    description:
      "End-to-end talent acquisition and HR process support. Hire, onboard, and manage teams with structured workflows.",
    offerings: [
      "Recruitment & screening",
      "Interview coordination",
      "Onboarding support",
      "Attendance & admin tracking",
      "HR process support",
    ],
    color: "#1AD3F2",
    icon: Users,
    logo: "/ascend-logo.png",
    facebookUrl: "https://web.facebook.com/wehear.ascend",
  },
  {
    id: "aivox",
    name: "AivoxTech IT Solutions",
    tagline: "Technology & Automation",
    description:
      "Systems and workflow enablement through web development, CRM optimization, and automation architecture.",
    offerings: [
      "Website development",
      "CRM setup & optimization",
      "Workflow automation",
      "System integration",
      "Basic technical support",
    ],
    color: "#0e5f29",
    icon: Cpu,
    logo: "/aivoxtech-logo.png",
    websiteUrl: "https://aivoxtech.astragroupph.com/",
  },
  {
    id: "astria",
    name: "Astria Insurance Solutions",
    tagline: "Insurance Solutions",
    description:
      "Comprehensive insurance advisory and coverage solutions for individuals and businesses at every stage of growth.",
    offerings: [
      "Life insurance",
      "Non-life insurance",
      "Insurance advisory & planning",
    ],
    color: "#00787C",
    icon: Shield,
    logo: "/astria-logo.png",
    websiteUrl: "https://astria.astragroupph.com",
    facebookUrl: "https://www.facebook.com/astria.insurance",
  },
  {
    id: "axial",
    name: "Axial Real Estate Services",
    tagline: "Real Estate Services",
    description:
      "Residential and strategic land solutions for families and investors. Faster matching, easier paperwork, transparent process.",
    offerings: [
      "Residential — condos & house-and-lots",
      "Strategic land — raw, agricultural, commercial",
      "Financing via bank or Pag-IBIG",
      "Faster matching & transparent process",
    ],
    color: "#059669",
    icon: Home,
    logo: "/axial-logo.png",
    websiteUrl: "https://axial.astragroupph.com",
    facebookUrl: "https://www.facebook.com/AxialRES",
  },
  {
    id: "ihub",
    name: "iHub Coworking Space & Bistro",
    tagline: "Workspace & Community",
    description:
      "Flexible workspace and community hub for modern professionals, startups, and growing teams.",
    offerings: [
      "Coworking desks & private offices",
      "Meeting rooms & event spaces",
      "Bistro & refreshment services",
      "Community networking events",
    ],
    color: "#D97706",
    icon: Coffee,
    logo: "/ihub-logo.png",
    facebookUrl: "https://www.facebook.com/ihubdvo",
  },
  {
    id: "jmave",
    name: "J-MaVe Cars",
    tagline: "Automotive Solutions",
    description:
      "Automotive services and solutions for personal and business mobility needs.",
    offerings: [
      "Vehicle sourcing & acquisition",
      "Fleet management support",
      "Automotive consultation",
    ],
    color: "#4B5563",
    icon: Car,
    logo: "/jmave-logo.png",
    websiteUrl: "https://www.jmavecars.com/",
    facebookUrl: "https://www.facebook.com/JMaveCars",
  },
];
/* ================================================================
   COMPONENT: PILLARS CAROUSEL
   ================================================================ */

interface PillarsCarouselProps {
  pillars: CorePillar[];
  isVisible: boolean;
}

function PillarsCarousel({ pillars, isVisible }: PillarsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % pillars.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, isVisible, pillars.length]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % pillars.length);
  }, [activeIndex, goTo, pillars.length]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + pillars.length) % pillars.length);
  }, [activeIndex, goTo, pillars.length]);

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

  const activePillar = pillars[activeIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <div
      className="pillars-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows */}
      <button
        className="pillars-carousel__arrow pillars-carousel__arrow--prev"
        onClick={goPrev}
        aria-label="Previous pillar"
        type="button"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>
      <button
        className="pillars-carousel__arrow pillars-carousel__arrow--next"
        onClick={goNext}
        aria-label="Next pillar"
        type="button"
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      {/* Main Card */}
      <div className="pillars-carousel__card">
        <div
          className="pillars-carousel__visual"
          style={{ background: `${activePillar.color}08` }}
        >
          <div
            className="pillars-carousel__icon"
            style={{
              background: activePillar.color,
              boxShadow: `0 0 40px ${activePillar.color}40`,
            }}
          >
            <ActiveIcon size={32} strokeWidth={1.5} color="white" />
          </div>
          <span
            className="pillars-carousel__number"
            style={{ color: `${activePillar.color}20` }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div
            className="pillars-carousel__tag"
            style={{
              background: `${activePillar.color}15`,
              color: activePillar.color,
            }}
          >
            {activePillar.tagline}
          </div>
        </div>

        <div className="pillars-carousel__content">
          <h3 className="pillars-carousel__title">{activePillar.name}</h3>
          <p className="pillars-carousel__tagline">{activePillar.tagline}</p>
          <p className="pillars-carousel__description">
            {activePillar.description}
          </p>

          <ul className="pillars-carousel__offerings">
            {activePillar.offerings.map((item) => (
              <li key={item} className="pillars-carousel__offering">
                <span
                  className="pillars-carousel__dot"
                  style={{ background: activePillar.color }}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="pillars-carousel__accent"
          style={{ background: activePillar.color }}
        />
      </div>

      {/* Dots */}
      <div className="pillars-carousel__dots">
        {pillars.map((pillar, index) => (
          <button
            key={pillar.id}
            className={`pillars-carousel__dot ${
              index === activeIndex ? "pillars-carousel__dot--active" : ""
            }`}
            onClick={() => goTo(index)}
            aria-label={`Go to ${pillar.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            type="button"
            style={
              index === activeIndex ? { background: pillar.color } : undefined
            }
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="pillars-carousel__progress">
        <div
          className="pillars-carousel__progress-bar"
          style={{
            width: `${((activeIndex + 1) / pillars.length) * 100}%`,
            background: activePillar.color,
          }}
        />
      </div>
    </div>
  );
}

/* ================================================================
   COMPONENT: EXECUTION COMPANIES GRID — VERTICAL DUAL CAROUSEL
   Two columns, each with continuous vertical scroll (marquee)
   ================================================================ */

interface ExecutionCompaniesGridProps {
  companies: ExecutionCompany[];
}

function ExecutionCompaniesGrid({ companies }: ExecutionCompaniesGridProps) {
  // Split into two columns for the dual-carousel effect
  const leftColumn = companies.filter((_, i) => i % 2 === 0);
  const rightColumn = companies.filter((_, i) => i % 2 === 1);

  // Duplicate arrays for seamless infinite scroll loop
  const leftColumnLooped = [...leftColumn, ...leftColumn];
  const rightColumnLooped = [...rightColumn, ...rightColumn];

  return (
    <div className="execution-grid">
      <div className="execution-grid__inner execution-grid__inner--dual">
        {/* Left Column — scrolls upward */}
        <div className="execution-column execution-column--left">
          <div className="execution-column__track execution-column__track--up">
            {leftColumnLooped.map((company, index) => {
              const CompanyIcon = company.icon;
              const uniqueKey = `${company.id}-left-${index}`;
              return (
                <div
                  key={uniqueKey}
                  className="execution-card execution-card--compact"
                >
                  <div
                    className="execution-card__visual execution-card__visual--compact"
                    style={{ background: `${company.color}08` }}
                  >
                    <div
                      className={`execution-card__icon ${
                        company.logo ? "execution-card__icon--logo" : ""
                      }`}
                      style={{
                        background: company.logo ? "white" : company.color,
                        boxShadow: `0 0 40px ${company.color}40`,
                      }}
                    >
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="execution-card__logo"
                        />
                      ) : (
                        <CompanyIcon
                          size={28}
                          strokeWidth={1.5}
                          color="white"
                        />
                      )}
                    </div>
                    <span
                      className="execution-card__tagline-badge"
                      style={{
                        background: `${company.color}15`,
                        color: company.color,
                      }}
                    >
                      {company.tagline}
                    </span>
                  </div>

                  <div className="execution-card__content execution-card__content--compact">
                    <div className="execution-card__meta">
                      <h4 className="execution-card__name">{company.name}</h4>
                      <span className="execution-card__tagline">
                        {company.tagline}
                      </span>
                    </div>

                    <p className="execution-card__description execution-card__description--compact">
                      {company.description}
                    </p>

                    <ul className="execution-card__offerings execution-card__offerings--compact">
                      {company.offerings.slice(0, 3).map((item) => (
                        <li key={item} className="execution-card__offering">
                          <Dot
                            size={16}
                            color={company.color}
                            className="execution-card__dot"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="execution-card__actions execution-card__actions--compact">
                      {company.websiteUrl && (
                        <a
                          href={company.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="execution-card__btn"
                          style={{
                            borderColor: `${company.color}40`,
                            color: company.color,
                          }}
                        >
                          Website
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {company.facebookUrl && (
                        <a
                          href={company.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="execution-card__btn"
                          style={{
                            borderColor: `${company.color}40`,
                            color: company.color,
                          }}
                        >
                          Facebook
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className="execution-card__accent"
                    style={{ background: company.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column — scrolls downward (opposite direction for visual interest) */}
        <div className="execution-column execution-column--right">
          <div className="execution-column__track execution-column__track--down">
            {rightColumnLooped.map((company, index) => {
              const CompanyIcon = company.icon;
              const uniqueKey = `${company.id}-right-${index}`;
              return (
                <div
                  key={uniqueKey}
                  className="execution-card execution-card--compact"
                >
                  <div
                    className="execution-card__visual execution-card__visual--compact"
                    style={{ background: `${company.color}08` }}
                  >
                    <div
                      className={`execution-card__icon ${
                        company.logo ? "execution-card__icon--logo" : ""
                      }`}
                      style={{
                        background: company.logo ? "white" : company.color,
                        boxShadow: `0 0 40px ${company.color}40`,
                      }}
                    >
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="execution-card__logo"
                        />
                      ) : (
                        <CompanyIcon
                          size={28}
                          strokeWidth={1.5}
                          color="white"
                        />
                      )}
                    </div>
                    <span
                      className="execution-card__tagline-badge"
                      style={{
                        background: `${company.color}15`,
                        color: company.color,
                      }}
                    >
                      {company.tagline}
                    </span>
                  </div>

                  <div className="execution-card__content execution-card__content--compact">
                    <div className="execution-card__meta">
                      <h4 className="execution-card__name">{company.name}</h4>
                      <span className="execution-card__tagline">
                        {company.tagline}
                      </span>
                    </div>

                    <p className="execution-card__description execution-card__description--compact">
                      {company.description}
                    </p>

                    <ul className="execution-card__offerings execution-card__offerings--compact">
                      {company.offerings.slice(0, 3).map((item) => (
                        <li key={item} className="execution-card__offering">
                          <Dot
                            size={16}
                            color={company.color}
                            className="execution-card__dot"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="execution-card__actions execution-card__actions--compact">
                      {company.websiteUrl && (
                        <a
                          href={company.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="execution-card__btn"
                          style={{
                            borderColor: `${company.color}40`,
                            color: company.color,
                          }}
                        >
                          Website
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {company.facebookUrl && (
                        <a
                          href={company.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="execution-card__btn"
                          style={{
                            borderColor: `${company.color}40`,
                            color: company.color,
                          }}
                        >
                          Facebook
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    className="execution-card__accent"
                    style={{ background: company.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient masks for smooth fade edges */}
      <div
        className="execution-grid__mask execution-grid__mask--top"
        aria-hidden="true"
      />
      <div
        className="execution-grid__mask execution-grid__mask--bottom"
        aria-hidden="true"
      />
    </div>
  );
}
/* ================================================================
   MAIN COMPONENT: BUSINESS SOLUTIONS
   ================================================================ */

export default function BusinessSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="business-solutions"
      className={`business-solutions ${
        isVisible ? "business-solutions--visible" : ""
      }`}
      aria-labelledby="business-solutions-title"
    >
      <div className="business-solutions__inner">
        {/* ================================================================
            SECTION HEADER
            ================================================================ */}
        <div className="business-solutions__header">
          <span className="business-solutions__label">
            Astra Business Solutions
          </span>
          <h2
            id="business-solutions-title"
            className="business-solutions__title"
          >
            Integrated Operations
            <span className="business-solutions__title-accent">
              . Scalable Delivery.
            </span>
          </h2>
          <p className="business-solutions__description">
            One ecosystem. One operational platform. Three core solution pillars
            powering eight specialist execution companies. Structured for
            enterprise scale, designed for seamless integration.
          </p>
        </div>

        {/* ================================================================
            CORE SOLUTION PILLARS CAROUSEL
            ================================================================ */}
        <div className="business-solutions__pillars">
          <div className="business-solutions__pillars-header">
            <span className="business-solutions__pillars-label">
              Core Solution Pillars
            </span>
            <h3 className="business-solutions__pillars-title">
              How We{" "}
              <span className="business-solutions__pillars-title-accent">
                Operate
              </span>
            </h3>
          </div>
          <PillarsCarousel pillars={corePillars} isVisible={isVisible} />
        </div>

        {/* ================================================================
            SPECIALIST EXECUTION COMPANIES GRID
            ================================================================ */}
        <div className="business-solutions__execution">
          <div className="business-solutions__execution-header">
            <span className="business-solutions__execution-label">
              Specialist Execution Companies
            </span>
            <h3 className="business-solutions__execution-title">
              Execution Brands Under{" "}
              <span className="business-solutions__execution-title-accent">
                the Ecosystem
              </span>
            </h3>
          </div>
          <ExecutionCompaniesGrid companies={executionCompanies} />
        </div>

        {/* ================================================================
            CTA SECTION
            ================================================================ */}
        <div className="business-solutions__cta">
          <p className="business-solutions__cta-text">
            Need multiple functions? We integrate them under one operational
            system.
          </p>
          <a
            className="business-solutions__cta-btn"
            onClick={(e) => {
              setFormOpen(true);
              e.preventDefault();
            }}
            href="#contact"
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
