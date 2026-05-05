import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ArticlePage from "./components/ArticlePage";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Hero from "./components/Hero";
import InsuranceCapability from "./components/InsuranceCapability";
import SystemsDriven from "./components/Methodology";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Services from "./components/Services";
import VisionExpansion from "./components/VisionExpansion";
import WhyAstra from "./components/WhyAstra";
import { SEO } from "./components/SEO";
import HowItWorks from "./components/HowItWorks";
import FinalCTA from "./components/FinalCTA";
import PackagesSection from "./components/article/PackagesSection";

// Landing page component — all your homepage sections
function LandingPage() {
  return (
    <>
      <SEO
        title="Astra Group of Companies"
        description="An integrated ecosystem of business solutions—Real Estate, Logistics, Hospitality, Technology, and Insurance—built for scale."
        type="website"
        keywords={[
          "Astra Group",
          "Real Estate",
          "Business Solutions",
          "Philippines",
          "AVARIS",
          "AXIS",
          "AIVOX",
        ]}
      />
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <Founder />
      <SystemsDriven />
      <Services />
      <HowItWorks/>
      <PackagesSection/>
      <People />
      <WhyAstra />
      <VisionExpansion />
      <FinalCTA/>
    </>
  );
}

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
