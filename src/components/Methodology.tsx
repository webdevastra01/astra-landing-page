import { useEffect, useRef, useState } from "react";
import {
  Compass,
  Blocks,
  Rocket,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import "../styles/Methodology.css";
import LeadForm from "./LeadForm";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy",
    color: "#2A3A9D",
    items: ["Market positioning", "Business model design"],
  },
  {
    number: "02",
    icon: Blocks,
    title: "Structure",
    color: "#3B4FB8",
    items: ["Team organization", "Role definition", "KPI alignment"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution",
    color: "#1E2A70",
    items: ["Sales deployment", "Marketing campaigns", "Operations management"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization",
    color: "#2A3A9D",
    items: [
      "Performance tracking",
      "Financial monitoring",
      "Continuous improvement",
    ],
  },
] as const;

export default function SystemsDriven() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);

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
      id="systems"
      className={`systems ${isVisible ? "systems--visible" : ""}`}
      aria-labelledby="systems-title"
    >
      <div className="container systems__inner">
        {/* Section Header */}
        <div className="systems__header">
          <span className="systems__label">Our Methodology</span>
          <h2 id="systems-title" className="systems__title">
            Systems-Driven Approach
          </h2>
          <p className="systems__description">
            Building scalable and repeatable business systems through a proven
            four-phase methodology.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="systems__grid" role="list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={step.number}
                className={`systems__card ${isActive ? "systems__card--active" : ""}`}
                role="listitem"
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onFocus={() => setActiveStep(index)}
                onBlur={() => setActiveStep(null)}
                tabIndex={0}
              >
                {/* Card Header */}
                <div className="systems__card-header">
                  <span
                    className="systems__number"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="systems__icon"
                    style={{
                      background: isActive ? step.color : `${step.color}14`,
                      color: isActive ? "#ffffff" : step.color,
                    }}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="systems__card-title">{step.title}</h3>

                {/* Items List */}
                <ul className="systems__items">
                  {step.items.map((item) => (
                    <li key={item} className="systems__item">
                      <CheckCircle2
                        size={16}
                        aria-hidden="true"
                        style={{ color: step.color }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress indicator */}
                <div className="systems__progress">
                  <div
                    className="systems__progress-bar"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: step.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="systems__footer">
          <p className="systems__footer-text">
            Ready to systematize your business?
          </p>
          <a
            className="systems__cta"
            onClick={(e) => {
              setFormOpen(true);
              e.preventDefault();
            }}
          >
            Start Your Transformation
          </a>
        </div>
      </div>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
