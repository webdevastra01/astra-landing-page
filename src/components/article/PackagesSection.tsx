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
  priceMin: number;
  priceMax: number;
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
    description: "Perfect for solo entrepreneurs and small businesses",
    priceRange: "€900 – €1,200",
    priceMin: 900,
    priceMax: 1200,
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
    description: "Designed for growing businesses that need consistent support",
    priceRange: "€2,000 – €3,500",
    priceMin: 2000,
    priceMax: 3500,
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
    description: "Ideal for established businesses seeking operational efficiency",
    priceRange: "€2,500 – €4,500",
    priceMin: 2500,
    priceMax: 4500,
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
    description: "Built for companies ready to delegate entire departments",
    priceRange: "€5,000 – €9,000",
    priceMin: 5000,
    priceMax: 9000,
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

/* ------------------ Currency Converter Hook ------------------ */

type Currency = "EUR" | "PHP" | "USD" | "AUD";

const useCurrencyConverter = () => {
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [rates, setRates] = useState<Record<Currency, number>>({
    EUR: 1,
    PHP: 0,
    USD: 0,
    AUD: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRate = async (target: Currency): Promise<number> => {
    if (target === "EUR") return 1;

    // Return cached rate if available
    if (rates[target] > 0) return rates[target];

    const response = await fetch(
      `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=EUR&to=${target}&amount=1`,
      {
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rate = data?.result ?? data?.info?.rate ?? data?.rates?.[target];

    if (!rate) throw new Error("Invalid API response");

    return rate;
  };

  const toggleCurrency = async () => {
    const cycle: Currency[] = ["EUR", "PHP", "USD", "AUD"];
    const currentIndex = cycle.indexOf(currency);
    const nextCurrency = cycle[(currentIndex + 1) % cycle.length];

    if (nextCurrency === "EUR") {
      setCurrency("EUR");
      setError(null);
      return;
    }

    // Already fetched → reuse
    if (rates[nextCurrency] > 0) {
      setCurrency(nextCurrency);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const rate = await fetchRate(nextCurrency);
      setRates((prev) => ({ ...prev, [nextCurrency]: rate }));
      setCurrency(nextCurrency);
    } catch (error) {
      console.log("Currency conversion error:", error);
      setError("Conversion unavailable. Showing EUR.");
      setCurrency("EUR");
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (amount: number): string => {
    const rate = rates[currency] || 1;
    const converted = Math.round(amount * rate);

    const symbols: Record<Currency, string> = {
      EUR: "€",
      PHP: "₱",
      USD: "$",
      AUD: "A$",
    };

    return `${symbols[currency]}${converted.toLocaleString()}`;
  };

  return { currency, toggleCurrency, formatPrice, loading, error };
};

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

const CurrencyToggle: React.FC<{
  currency: Currency;
  onToggle: () => void;
  loading: boolean;
}> = ({ currency, onToggle, loading }) => {
  const cycle: Currency[] = ["EUR", "PHP", "USD", "AUD"];
  const currentIndex = cycle.indexOf(currency);

  return (
    <div className="currency-toggle-wrapper">
      <button
        className={`currency-toggle ${loading ? "loading" : ""}`}
        onClick={onToggle}
        disabled={loading}
        aria-label={`Currency: ${currency}`}
      >
        <div
          className="toggle-slider"
          style={{
            left: `${(currentIndex / (cycle.length - 1)) * 75}%`,
          }}
        />
        {cycle.map((curr) => (
          <span
            key={curr}
            className={`toggle-option ${currency === curr ? "active" : ""}`}
          >
            {loading && currency !== curr ? <span className="spinner" /> : null}
            {curr}
          </span>
        ))}
      </button>
    </div>
  );
};

const PricingCard: React.FC<{
  pkg: Package;
  onClick: () => void;
  formatPrice: (amount: number) => string;
  currency: Currency;
}> = ({ pkg, onClick, formatPrice }) => {
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
          {formatPrice(pkg.priceMin)} – {formatPrice(pkg.priceMax)}
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

const PricingGrid: React.FC<PricingGridProps> = ({ onClick }) => {
  const { currency, toggleCurrency, formatPrice, loading, error } =
    useCurrencyConverter();

  return (
    <>
      <CurrencyToggle
        currency={currency}
        onToggle={toggleCurrency}
        loading={loading}
      />
      {error && <div className="currency-error">{error}</div>}
      <div className="pricing-grid">
        {packages.map((pkg) => (
          <PricingCard
            key={pkg.id}
            pkg={pkg}
            onClick={onClick}
            formatPrice={formatPrice}
            currency={currency}
          />
        ))}
      </div>
    </>
  );
};

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
