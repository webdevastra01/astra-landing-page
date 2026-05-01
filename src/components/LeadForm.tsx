import { useState, useEffect, useCallback } from "react";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import "../styles/LeadForm.css";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

const interestOptions = [
  { value: "", label: "Select your interest" },
  { value: "investment", label: "Investment Opportunities" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "consulting", label: "Business Consulting" },
  { value: "technology", label: "Technology Solutions" },
  { value: "media", label: "Media & Content" },
  { value: "call", label: "Discovery Call Booking" },
  { value: "other", label: "Other" },
];

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.interest) newErrors.interest = "Please select an interest";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;
      setStatus("submitting");

      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to submit");
        }

        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({
            fullName: "",
            email: "",
            company: "",
            phone: "",
            interest: "",
            message: "",
          });
          onClose();
        }, 2500);
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    },
    [formData, onClose],
  );

  if (!isOpen) return null;

  return (
    <div
      className="lead-form-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
    >
      <div className="lead-form-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="lead-form__close"
          onClick={onClose}
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="lead-form__success">
            <CheckCircle size={56} className="lead-form__success-icon" />
            <h3 id="lead-form-title">Thank You!</h3>
            <p>We have received your inquiry and will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="lead-form__header">
              <h3 id="lead-form-title">Partner With Astra</h3>
              <p>
                Fill out the form below and our team will reach out to discuss
                how we can work together.
              </p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit} noValidate>
              <div className="lead-form__grid">
                <div className="lead-form__field">
                  <label htmlFor="fullName">
                    Full Name <span aria-label="required">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "lead-form__input--error" : ""}
                    disabled={status === "submitting"}
                  />
                  {errors.fullName && (
                    <span className="lead-form__error">{errors.fullName}</span>
                  )}
                </div>

                <div className="lead-form__field">
                  <label htmlFor="email">
                    Email Address <span aria-label="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "lead-form__input--error" : ""}
                    disabled={status === "submitting"}
                  />
                  {errors.email && (
                    <span className="lead-form__error">{errors.email}</span>
                  )}
                </div>

                <div className="lead-form__field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                  />
                </div>

                <div className="lead-form__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className="lead-form__field">
                <label htmlFor="interest">
                  Area of Interest <span aria-label="required">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={errors.interest ? "lead-form__input--error" : ""}
                  disabled={status === "submitting"}
                >
                  {interestOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      disabled={!opt.value}
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <span className="lead-form__error">{errors.interest}</span>
                )}
              </div>

              <div className="lead-form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals and how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                />
              </div>

              {status === "error" && (
                <div className="lead-form__error-banner">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="lead-form__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="lead-form__spinner" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
