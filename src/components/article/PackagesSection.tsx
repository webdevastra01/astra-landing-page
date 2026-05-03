import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import "../../styles/PackagesSection.css";
import LeadForm from "../LeadForm";

/* ============================================================
   Packages Section — Monetization / Pricing
   Astra Group of Companies
   ============================================================ */

interface Package {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  featured?: boolean;
}

type PricingGridProps = {
  onClick: () => void;
};

const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Best for testing offshore",
    priceRange: "€900 – €1,200",
    features: [
      "1 dedicated staff",
      "Full onboarding support",
      "Weekly performance reports",
      "Email & chat support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Sales and lead generation team",
    priceRange: "€2,000 – €3,500",
    features: [
      "2 – 3 team members",
      "Sales pipeline management",
      "Lead qualification & nurturing",
      "CRM integration support",
      "Monthly strategy calls",
    ],
    featured: true,
  },
  {
    id: "business",
    name: "Business Support",
    description: "Back office and operations",
    priceRange: "€2,500 – €4,500",
    features: [
      "Operations specialists",
      "Data entry & processing",
      "Customer support handling",
      "Workflow automation",
      "Quality assurance",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description: "Full execution team",
    priceRange: "€5,000 – €9,000",
    features: [
      "Full execution team",
      "Dedicated account manager",
      "Custom SOP development",
      "Advanced analytics dashboard",
      "Priority 24/7 support",
      "Quarterly business reviews",
    ],
  },
];

/* ------------------ Subcomponents ------------------ */

const SectionHeader: React.FC = () => (
  <div className="section-header">
    <span className="section-label">Pricing</span>
    <h2 className="section-title">Flexible Packages Built to Scale</h2>
    <p className="section-description">
      Transparent pricing with no hidden fees. Choose a package that fits your
      current needs and upgrade as you grow.
    </p>
  </div>
);

const PricingCard: React.FC<{ pkg: Package; onClick: () => void }> = ({
  pkg,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`pricing-card ${pkg.featured ? "featured" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {pkg.featured && (
        <div className="pricing-badge">
          <Sparkles size={12} style={{ marginRight: 4, display: "inline" }} />
          Most Popular
        </div>
      )}

      <div className="pricing-card-top">
        <div className="pricing-name">{pkg.name}</div>
        <p className="pricing-description">{pkg.description}</p>

        <div className="pricing-price">
          {pkg.priceRange}
          <span> / month</span>
        </div>

        <ul className="pricing-features">
          {pkg.features.map((feature, idx) => (
            <li key={idx}>
              <Check size={16} color="var(--success)" strokeWidth={3} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        className={`btn btn-primary btn-lg ${hovered && !pkg.featured ? "btn-elevated" : ""}`}
        onClick={onClick}
      >
        Get Custom Proposal
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

const PricingGrid: React.FC<PricingGridProps> = ({ onClick }) => (
  <div className="pricing-grid">
    {packages.map((pkg) => (
      <PricingCard key={pkg.id} pkg={pkg} onClick={onClick} />
    ))}
  </div>
);

/* ------------------ Main Component ------------------ */

const PackagesSection: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="packages" className="section">
      <div className="container">
        <SectionHeader />
        <PricingGrid onClick={() => setFormOpen(true)} />
      </div>

      <LeadForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
};

export default PackagesSection;
