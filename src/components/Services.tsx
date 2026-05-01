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
} from "lucide-react";
import "../styles/Services.css";

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
    division: "Avaris",
    divisionUrl: "https://avarissalessolutions.vercel.app/",
    color: "#2A3A9D",
    icon: TrendingUp,
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
    division: "Axis",
    divisionUrl: "https://axismarketingsolutions-virid.vercel.app/",
    color: "#3B4FB8",
    icon: Megaphone,
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
    division: "Ascend",
    divisionUrl: "https://web.facebook.com/wehear.ascend",
    color: "#10B981",
    icon: Users,
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
    division: "Ardent",
    color: "#6366F1",
    icon: ShieldCheck,
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
    division: "Aivox",
    color: "#0EA5E9",
    icon: Cpu,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-play
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

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    },
    [],
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % services.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + services.length) % services.length);
  }, [activeIndex, goTo]);

  // Touch handlers
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
          {/* Navigation Arrows */}
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

          {/* Main Card */}
          <div className="services__carousel-card">
            {/* Left: Visual Identity */}
            <div
              className="services__carousel-visual"
              style={{ background: `${activeService.color}08` }}
            >
              <div
                className="services__carousel-icon"
                style={{
                  background: activeService.color,
                  boxShadow: `0 0 40px ${activeService.color}40`,
                }}
              >
                <ActiveIcon size={32} strokeWidth={1.5} color="white" />
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

            {/* Right: Content */}
            <div className="services__carousel-content">
              <h3 className="services__carousel-title">
                {activeService.name}
              </h3>
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

            {/* Accent border */}
            <div
              className="services__carousel-accent"
              style={{ background: activeService.color }}
            />
          </div>

          {/* Dots Navigation */}
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

          {/* Progress Bar */}
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

        {/* Bottom CTA */}
        <div className="services__footer">
          <p className="services__footer-text">
            Need multiple functions? We integrate them under one system.
          </p>
          <a href="#contact" className="services__footer-btn">
            <span>Talk to Us About Your Needs</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}