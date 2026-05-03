import React, { useEffect, useRef, useState } from "react";
import { Users, Network, Building2, Globe, Target } from "lucide-react";
import "../styles/VisionExpansion.css";

interface RoadmapPhase {
  icon: React.ReactNode;
  phase: string;
  title: string;
  description: string;
  details: string[];
  status: "active" | "upcoming" | "future" | "expansion";
}

const phases: RoadmapPhase[] = [
  {
    icon: <Users size={22} strokeWidth={2} />,
    phase: "01",
    title: "Foundation & Execution",
    description:
      "Build structured offshore teams across sales, marketing, HR, finance, and technology — combining skilled talent with proven systems.",
    details: [
      "Deploy trained, managed execution teams",
      "Establish clear KPIs and accountability frameworks",
      "Combine people, process, and technology",
    ],
    status: "active",
  },
  {
    icon: <Network size={22} strokeWidth={2} />,
    phase: "02",
    title: "Integrated Operations",
    description:
      "Unify Avaris, Axis, Ascend, Ardent, and Aivox under one system — delivering end-to-end support with consistency and accountability.",
    details: [
      "Cross-functional team integration",
      "Shared reporting and performance dashboards",
      "Seamless handoffs between divisions",
    ],
    status: "upcoming",
  },
  {
    icon: <Building2 size={22} strokeWidth={2} />,
    phase: "03",
    title: "Scalable Systems",
    description:
      "Build infrastructure and processes that grow with your business — from startup foundation to enterprise-scale operations.",
    details: [
      "Process automation and back-office optimization",
      "Talent pipeline and workforce scaling",
      "Technology infrastructure and security",
    ],
    status: "future",
  },
  {
    icon: <Globe size={22} strokeWidth={2} />,
    phase: "04",
    title: "Global Execution Partner",
    description:
      "Become the trusted execution partner for businesses worldwide — managing structured offshore teams that drive measurable results.",
    details: [
      "Expand client base across industries and regions",
      "Deepen strategic partnerships and ecosystems",
      "Deliver full execution with one partner, real results",
    ],
    status: "expansion",
  },
];

const VisionExpansion: React.FC = () => {
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

  const statusLabel = (status: RoadmapPhase["status"]) => {
    switch (status) {
      case "active":
        return "Execution Ready";
      case "upcoming":
        return "Integrating";
      case "future":
        return "Scaling Next";
      case "expansion":
        return "Global Expansion";
    }
  };

  return (
    <section
      id="vision"
      ref={sectionRef}
      className={`vision-expansion ${isVisible ? "vision-expansion--visible" : ""}`}
      aria-labelledby="vision-expansion-title"
    >
      <div className="vision-expansion__container">
        <div className="vision-expansion__header">
          <span className="vision-expansion__label">Vision & Expansion</span>
          <h2 id="vision-expansion-title" className="vision-expansion__title">
            Our Growth Roadmap
          </h2>
          <p className="vision-expansion__description">
            Astra is more than a service provider — we are your execution
            partner. Our phased strategy builds structured offshore teams,
            integrates operations across every business function, and scales
            systems that grow with you.
          </p>
        </div>

        <div className="vision-expansion__roadmap">
          {/* Timeline spine */}
          <div className="vision-expansion__spine" aria-hidden="true">
            <div className="vision-expansion__spine-track" />
            <div className="vision-expansion__spine-progress" />
          </div>

          <div className="vision-expansion__phases">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`vision-expansion__phase vision-expansion__phase--${phase.status}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Node */}
                <div className="vision-expansion__node">
                  <div className="vision-expansion__node-ring">
                    <div className="vision-expansion__node-dot" />
                  </div>
                  <span className="vision-expansion__node-label">
                    {phase.phase}
                  </span>
                </div>

                {/* Card */}
                <div className="vision-expansion__card">
                  <div
                    className="vision-expansion__card-accent"
                    aria-hidden="true"
                  />

                  <div className="vision-expansion__card-header">
                    <div className="vision-expansion__card-icon">
                      {phase.icon}
                    </div>
                    <span
                      className={`vision-expansion__card-badge vision-expansion__card-badge--upcoming`}
                    >
                      {statusLabel(phase.status)}
                    </span>
                  </div>

                  <h3 className="vision-expansion__card-title">
                    {phase.title}
                  </h3>
                  <p className="vision-expansion__card-description">
                    {phase.description}
                  </p>

                  <ul className="vision-expansion__card-list">
                    {phase.details.map((detail) => (
                      <li
                        key={detail}
                        className="vision-expansion__card-list-item"
                      >
                        <span className="vision-expansion__card-bullet" />
                        <span className="vision-expansion__card-text">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term vision callout */}
        <div className="vision-expansion__vision">
          <div className="vision-expansion__vision-inner">
            <div className="vision-expansion__vision-icon">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <div className="vision-expansion__vision-content">
              <h3 className="vision-expansion__vision-title">
                Long-Term Vision
              </h3>
              <p className="vision-expansion__vision-text">
                Become a global execution partner helping businesses scale
                through structured offshore teams across sales, marketing, HR,
                finance, technology, and operations. One partner. Full
                execution. Real results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionExpansion;
