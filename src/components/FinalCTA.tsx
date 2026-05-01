import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import "../styles/FinalCTA.css";
import LeadForm from "./LeadForm";

export default function FinalCTA() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`final-cta ${isVisible ? "final-cta--visible" : ""}`}
      aria-labelledby="final-cta-title"
    >
      {/* Background layers */}
      <div className="final-cta__bg" aria-hidden="true">
        <div className="final-cta__bg-deep" />
        <div className="final-cta__bg-orb final-cta__bg-orb--1" />
        <div className="final-cta__bg-orb final-cta__bg-orb--2" />
        <div className="final-cta__bg-orb final-cta__bg-orb--3" />
        <div className="final-cta__bg-glow" />
      </div>

      <div className="final-cta__inner">
        {/* Content */}
        <div className="final-cta__content">
          <div className="final-cta__badge">
            <span className="final-cta__badge-pulse" />
            <span>Start Your Execution Journey</span>
          </div>

          <h2 id="final-cta-title" className="final-cta__title">
            Ready to Build Your
            <span className="final-cta__title-accent">
              {" "}
              Offshore Execution Team?
            </span>
          </h2>

          <p className="final-cta__description">
            Let Astra handle the execution while you focus on growing your
            business.
          </p>

          <div className="final-cta__actions">
            <a
              className="final-cta__btn final-cta__btn--primary"
              onClick={(e) => {
                setFormOpen(true);
                e.preventDefault();
              }}
            >
              <Calendar size={18} aria-hidden="true" />
              <span>Book a Free Consultation</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href="mailto:sales@astragroupph.com"
              className="final-cta__btn final-cta__btn--secondary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Send Us a Message</span>
            </a>
          </div>

          <p className="final-cta__trust">
            No commitment required. We will understand your needs and recommend
            the right execution plan.
          </p>
        </div>
      </div>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
