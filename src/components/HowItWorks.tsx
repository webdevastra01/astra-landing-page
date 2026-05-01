import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Users,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import "../styles/HowItWorks.css";
import LeadForm from "./LeadForm";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description:
      "We dive deep into your business — understanding your goals, pain points, and what success looks like for you.",
    deliverables: [
      "Business needs assessment",
      "Goal alignment session",
      "Scope and timeline definition",
    ],
    color: "#2a3a9d",
  },
  {
    number: "02",
    icon: Users,
    title: "Team Setup",
    description:
      "We hand-pick and onboard your dedicated offshore team with the exact skills and tools to execute from day one.",
    deliverables: [
      "Talent recruitment & screening",
      "Role-specific training",
      "Tool and system onboarding",
    ],
    color: "#3b82f6",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Execution & Management",
    description:
      "Daily operations, structured reporting, and active management — so you stay in control without the overhead.",
    deliverables: [
      "Daily operations management",
      "Structured weekly reporting",
      "Performance tracking & QA",
    ],
    color: "#0ea5e9",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale & Optimize",
    description:
      "We refine processes, improve performance, and expand your team as your business accelerates.",
    deliverables: [
      "Performance optimization",
      "Process refinement",
      "Team expansion planning",
    ],
    color: "#06b6d4",
  },
] as const;

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [showCta, setShowCta] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formOpen, setFormOpen] = useState(false);

  const totalSteps = steps.length;
  const stepSize = 100 / totalSteps; // 25%
  const ctaThreshold = 100 - stepSize / 2; // 87.5%

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewportHeight;

      if (scrolled < 0) {
        setProgress(0);
        setActiveStep(0);
        setShowCta(false);
        return;
      }
      if (scrolled > totalScrollable) {
        setProgress(100);
        setActiveStep(totalSteps);
        setShowCta(true);
        return;
      }

      const scrollProgress = (scrolled / totalScrollable) * 100;
      setProgress(scrollProgress);

      // Split last step's zone: first half = step, second half = CTA
      if (scrollProgress >= ctaThreshold) {
        setActiveStep(totalSteps); // 4 = CTA mode
        setShowCta(true);
      } else {
        const currentStep = Math.min(
          Math.floor(scrollProgress / stepSize),
          totalSteps - 1,
        );
        setActiveStep(currentStep);
        setShowCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ctaThreshold, stepSize, totalSteps]);

  return (
    <section ref={sectionRef} id="how-it-works" className="how-it-works-scroll">
      {/* Progress Indicator */}
      {/* <div className="scroll-progress">
        <div className="scroll-progress__track">
          <div
            className="scroll-progress__fill"
            style={{ height: `${progress}%` }}
          />
        </div>
        <div className="scroll-progress__steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`scroll-progress__dot ${
                index <= activeStep && !showCta
                  ? "scroll-progress__dot--active"
                  : ""
              }`}
            >
              <span className="scroll-progress__dot-number">{step.number}</span>
            </div>
          ))}
          <div
            className={`scroll-progress__dot scroll-progress__dot--cta ${
              showCta ? "scroll-progress__dot--active" : ""
            }`}
          >
            <ArrowRight size={14} />
          </div>
        </div>
      </div> */}

      {/* Sticky Container */}
      <div className="how-it-works-scroll__sticky">
        {/* Background Layer */}
        <div className="scroll-bg">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep && !showCta;
            const isPast =
              index < activeStep || (showCta && index === totalSteps - 1);

            return (
              <div
                key={step.number}
                className={`scroll-bg__scene ${
                  isActive ? "scroll-bg__scene--active" : ""
                } ${isPast ? "scroll-bg__scene--past" : ""}`}
              >
                <div
                  className="scroll-bg__glow"
                  style={{ background: step.color }}
                />
                <Icon
                  size={280}
                  strokeWidth={0.5}
                  className="scroll-bg__icon"
                />
                <span className="scroll-bg__number">{step.number}</span>
              </div>
            );
          })}

          {/* CTA Background */}
          <div
            className={`scroll-bg__scene scroll-bg__scene--cta ${showCta ? "scroll-bg__scene--active" : ""}`}
          >
            <div
              className="scroll-bg__glow"
              style={{ background: "#8b5cf6" }}
            />
            <TrendingUp
              size={280}
              strokeWidth={0.5}
              className="scroll-bg__icon"
            />
          </div>
        </div>

        {/* Content Layer */}
        <div className="scroll-content">
          <div className="scroll-content__header">
            <span className="scroll-content__label">How It Works</span>
            <h2 className="scroll-content__title">
              From First Call
              <span className="scroll-content__title-accent">
                {" "}
                to Full Execution
              </span>
            </h2>
          </div>

          {steps.map((step, index) => {
            const isActive = index === activeStep && !showCta;
            const isPast = index < activeStep;

            return (
              <div
                key={step.number}
                className={`scroll-step ${
                  isActive ? "scroll-step--active" : ""
                } ${isPast ? "scroll-step--past" : ""}`}
              >
                <div className="scroll-step__inner">
                  <span
                    className="scroll-step__number"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <h3 className="scroll-step__title">{step.title}</h3>
                  <p className="scroll-step__description">{step.description}</p>

                  <ul className="scroll-step__deliverables">
                    {step.deliverables.map((item) => (
                      <li key={item} className="scroll-step__deliverable">
                        <div
                          className="scroll-step__check"
                          style={{ background: step.color }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* CTA Scene */}
          <div
            className={`scroll-step scroll-step--cta ${showCta ? "scroll-step--active" : ""}`}
          >
            <div className="scroll-step__inner scroll-step__inner--center">
              <h3 className="scroll-step__title scroll-step__title--large">
                Ready to Execute?
              </h3>
              <p className="scroll-step__description scroll-step__description--large">
                Let's build your offshore team and start delivering results.
              </p>
              <a
                className="scroll-cta"
                onClick={(e) => {
                  setFormOpen(true);
                  e.preventDefault();
                }}
              >
                <span>Book a Discovery Call</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div
          className={`scroll-hint ${progress > 10 ? "scroll-hint--hidden" : ""}`}
        >
          <span>Scroll to explore</span>
          <ChevronDown size={20} className="scroll-hint__icon" />
        </div>
      </div>

      <div className="how-it-works-scroll__spacer" />

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
