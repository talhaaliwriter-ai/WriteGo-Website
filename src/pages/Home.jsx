import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedPlatforms from "../components/TrustedPlatforms";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Industries from "../components/Industries";
import WhyChoose from "../components/WhyChoose";
import PortfolioSection from "../components/PortfolioSection";
import WorkingProcess from "../components/WorkingProcess";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      <Navbar />

      <main>

        {/* Hero
          Primary positioning, audience and call-to-action.
        */}
        <section id="home">
          <Hero />
        </section>

        {/* Trust / Platforms
          Establishes familiarity and credibility early.
        */}
        <section id="trusted-platforms">
          <TrustedPlatforms />
        </section>

        {/* Results / Business Snapshot */}
        <section id="results">
          <Stats />
        </section>

        {/* Core Writing Services */}
        <section id="services">
          <Services />
        </section>

        {/* Who We Serve */}
        <section id="industries">
          <Industries />
        </section>

        {/* Reasons to Choose WriteGo */}
        <section id="why-writego">
          <WhyChoose />
        </section>

        {/* Selected Work */}
        <section id="portfolio">
          <PortfolioSection />
        </section>

        {/* Project Workflow */}
        <section id="process">
          <WorkingProcess />
        </section>

        {/* Client Feedback */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Common Questions */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Final Conversion Section */}
        <section id="contact">
          <ContactCTA />
        </section>

      </main>

      <Footer />

    </div>
  );
}
