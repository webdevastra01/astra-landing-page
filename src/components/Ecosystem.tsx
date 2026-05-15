import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Truck,
  Coffee,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import "../styles/Ecosystem.css";
import { useNavigate } from "react-router";

const ecosystems = [
  {
    icon: Briefcase,
    title: "Business Solutions",
    slug: "business-solutions",
    description:
      "Sales, marketing, finance, technology, and insurance support.",
    stat: "300+",
    statLabel: "Clients Served",
    color: "#2A3A9D",
  },
  {
    icon: Building2,
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Residential and commercial developments, project marketing, and developer partnerships.",
    stat: "₱2.5B+",
    statLabel: "Properties Sold",
    color: "#2A3A9D",
  },
  {
    icon: Truck,
    title: "Logistics & Mobility",
    slug: "logistics-mobility",
    description: "Fleet operations and transportation-linked revenue systems.",
    stat: "500+",
    statLabel: "Vehicles Managed",
    color: "#3B4FB8",
  },
  {
    icon: Coffee,
    title: "Hospitality & Lifestyle",
    slug: "hospitality-lifestyle",
    description: "Coworking spaces, food & beverage, and lifestyle hubs.",
    stat: "12",
    statLabel: "Active Locations",
    color: "#1E2A70",
  },
] as const;

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

  const handleCardClick = (slug: string) => {
    navigate(`/article/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(slug);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className={`ecosystem ${isVisible ? "ecosystem--visible" : ""}`}
      aria-labelledby="ecosystem-title"
    >
      <div className="container ecosystem__inner">
        {/* Section Header */}
        <div className="ecosystem__header">
          <span className="ecosystem__label">Our Portfolio</span>
          <h2 id="ecosystem-title" className="ecosystem__title">
            Astra Business Ecosystem
          </h2>
          <p className="ecosystem__description">
            Four interconnected verticals working in harmony to deliver
            comprehensive value across industries.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="ecosystem__grid" role="list">
          {ecosystems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={item.title}
                className={`ecosystem__card ${isActive ? "ecosystem__card--active" : ""}`}
                role="listitem"
                style={{ transitionDelay: `${index * 120}ms` }}
                onClick={() => handleCardClick(item.slug)}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                onFocus={() => setActiveCard(index)}
                onBlur={() => setActiveCard(null)}
                onKeyDown={(e) => handleKeyDown(e, item.slug)}
                tabIndex={0}
              >
                {/* Card Header */}
                <div className="ecosystem__card-header">
                  <div
                    className="ecosystem__icon"
                    style={{
                      background: isActive ? item.color : `${item.color}14`,
                      color: isActive ? "#ffffff" : item.color,
                    }}
                  >
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="ecosystem__arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="ecosystem__card-title">{item.title}</h3>
                <p className="ecosystem__card-description">
                  {item.description}
                </p>

                {/* Card Stat */}
                {/* <div className="ecosystem__stat">
                  <span
                    className="ecosystem__stat-value"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </span>
                  <span className="ecosystem__stat-label">
                    {item.statLabel}
                  </span>
                </div> */}

                {/* Progress Bar */}
                <div className="ecosystem__progress">
                  <div
                    className="ecosystem__progress-bar"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: item.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connector Visualization */}
        <div className="ecosystem__connector" aria-hidden="true">
          <div className="ecosystem__connector-line" />
          <div className="ecosystem__connector-nodes">
            {ecosystems.map((_, i) => (
              <div key={i} className="ecosystem__connector-node" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
