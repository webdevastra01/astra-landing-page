import { useEffect, useRef, useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  Layers,
  Users,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import "../styles/WhyAstra.css";

interface ComparisonItem {
  label: string;
  traditional: boolean;
  astra: boolean;
}

const comparisonItems: ComparisonItem[] = [
  {
    label: "Hire multiple vendors per function",
    traditional: true,
    astra: false,
  },
  {
    label: "Self-managed, inconsistent output",
    traditional: true,
    astra: false,
  },
  {
    label: "Short-term projects, no continuity",
    traditional: true,
    astra: false,
  },
  { label: "Vague reporting, unclear ROI", traditional: true, astra: false },
  {
    label: "One partner across all functions",
    traditional: false,
    astra: true,
  },
  {
    label: "Trained teams with active management",
    traditional: false,
    astra: true,
  },
  { label: "Systems built to scale with you", traditional: false, astra: true },
  {
    label: "Clear KPIs and regular reporting",
    traditional: false,
    astra: true,
  },
];

const pillars = [
  {
    icon: Layers,
    title: "End-to-End Execution",
    description:
      "One partner handling sales, marketing, HR, finance, technology, and operations — fully integrated under one system.",
  },
  {
    icon: Users,
    title: "Structured Teams",
    description:
      "Not freelancers. Trained, managed, and performance-driven teams that operate as an extension of your business.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Systems",
    description:
      "Built to grow with your business. Processes and infrastructure that expand as your operations expand.",
  },
  {
    icon: BarChart3,
    title: "Results Focused",
    description:
      "Clear KPIs, transparent reporting, and accountability at every stage of execution.",
  },
] as const;

export default function WhyAstra() {
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
      id="capabilities"
      ref={sectionRef}
      className={`why-astra ${isVisible ? "why-astra--visible" : ""}`}
      aria-labelledby="why-astra-title"
    >
      <div className="why-astra__inner">
        {/* Header */}
        <div className="why-astra__header">
          <span className="why-astra__label">Why Astra?</span>
          <h2 id="why-astra-title" className="why-astra__title">
            One Partner.
            <span className="why-astra__title-accent"> Full Execution.</span>
          </h2>
          <p className="why-astra__description">
            Most firms sell you services. We build and manage the teams that
            execute them — with structure, accountability, and measurable
            results.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="why-astra__comparison">
          <div className="why-astra__column why-astra__column--traditional">
            <div className="why-astra__column-header">
              <div className="why-astra__column-icon why-astra__column-icon--traditional">
                <X size={22} strokeWidth={2.5} />
              </div>
              <h3 className="why-astra__column-title">Typical Providers</h3>
            </div>
            <ul className="why-astra__list">
              {comparisonItems
                .filter((item) => item.traditional)
                .map((item, index) => (
                  <li
                    key={item.label}
                    className="why-astra__list-item"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="why-astra__list-icon why-astra__list-icon--negative">
                      <X size={16} strokeWidth={2.5} />
                    </span>
                    <span className="why-astra__list-text">{item.label}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="why-astra__divider">
            <div className="why-astra__divider-line" />
            <div className="why-astra__divider-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
            <div className="why-astra__divider-line" />
          </div>

          <div className="why-astra__column why-astra__column--astra">
            <div className="why-astra__column-header">
              <div className="why-astra__column-icon why-astra__column-icon--astra">
                <Check size={22} strokeWidth={2.5} />
              </div>
              <h3 className="why-astra__column-title">Astra Group</h3>
            </div>
            <ul className="why-astra__list">
              {comparisonItems
                .filter((item) => item.astra)
                .map((item, index) => (
                  <li
                    key={item.label}
                    className="why-astra__list-item"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <span className="why-astra__list-icon why-astra__list-icon--positive">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="why-astra__list-text">{item.label}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Section Label */}
        <div className="why-astra__section-label">
          <span>What Sets Us Apart</span>
          <div className="why-astra__section-line" />
        </div>

        {/* Four Pillars */}
        <div className="why-astra__pillars">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="why-astra__pillar"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="why-astra__pillar-icon">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>
                <h4 className="why-astra__pillar-title">{pillar.title}</h4>
                <p className="why-astra__pillar-text">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="why-astra__footer">
          <p className="why-astra__footer-text">
            Stop managing vendors. Start scaling execution.
          </p>
          <a href="#ecosystem" className="why-astra__footer-btn">
            <span>See How It Works</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
