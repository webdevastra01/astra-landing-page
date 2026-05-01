import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Megaphone,
  Truck,
  Users,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import "../styles/About.css";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Sales & Revenue",
    division: "Avaris",
    description:
      "Generate leads, close deals, and drive revenue growth with dedicated sales teams built for your market.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Demand",
    division: "Axis",
    description:
      "Build brand presence and create qualified demand through strategic digital and traditional marketing execution.",
  },
  {
    icon: Users,
    title: "HR & Talent",
    division: "Ascend",
    description:
      "Attract, onboard, and retain top talent with structured HR processes and organizational development.",
  },
  {
    icon: ShieldCheck,
    title: "Finance & Compliance",
    division: "Ardent",
    description:
      "Manage financial operations, reporting, and compliance with precision and full accountability.",
  },
  {
    icon: Cpu,
    title: "Technology & Systems",
    division: "Aivox",
    description:
      "Enable your business with modern technology infrastructure, automation, and digital transformation.",
  },
  {
    icon: Truck,
    title: "Operations & Support",
    division: "Astra Ops",
    description:
      "Streamline back-office operations, logistics, and day-to-day execution to keep your business running smoothly.",
  },
] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about ${isVisible ? "about--visible" : ""}`}
      aria-labelledby="about-title"
    >
      <div className="container about__inner">
        {/* Section Header */}
        <div className="about__header">
          <span className="about__label">Who We Are</span>
          <h2 id="about-title" className="about__title">
            Execution Is How
            <span className="about__title-accent"> Businesses Grow</span>
          </h2>
        </div>

        {/* Narrative Block */}
        <div className="about__narrative">
          <div className="about__narrative-block">
            <p className="about__narrative-lead">
              At Astra Group of Companies, we believe that businesses grow when
              execution is done right.
            </p>
            <p className="about__narrative-text">
              Our approach is simple. We combine people, process, and technology
              to build reliable and scalable teams that handle your core
              business functions — from generating leads and closing sales to
              managing operations and back-office support.
            </p>
          </div>

          <div className="about__narrative-block">
            <p className="about__narrative-text">
              Through our specialized divisions — <strong>Avaris</strong> for
              Sales, <strong>Axis</strong> for Marketing,{" "}
              <strong>Ascend</strong> for HR, <strong>Ardent</strong> for
              Finance, and <strong>Aivox</strong> for Technology — we deliver
              integrated solutions under one system, ensuring consistency,
              accountability, and results.
            </p>
            <p className="about__narrative-text about__narrative-text--highlight">
              Whether you are a startup building your foundation or an
              established company looking to scale, Astra provides the structure
              and execution needed to move forward with confidence.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="about__section-label">
          <span>Our Divisions</span>
          <div className="about__section-line" />
        </div>

        <div className="about__grid" role="list">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="about__card"
                role="listitem"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="about__card-top">
                  <div className="about__icon">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <span className="about__division">{capability.division}</span>
                </div>
                <h3 className="about__card-title">{capability.title}</h3>
                <p className="about__card-description">
                  {capability.description}
                </p>
                <div className="about__card-link">
                  <span>Learn more</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="about__cta">
          <p className="about__cta-text">
            One partner. Six functions. Full execution.
          </p>
          <a href="#ecosystem" className="about__cta-btn">
            <span>Explore the Ecosystem</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
