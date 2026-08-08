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
    <>
      <Navbar />
      <Hero />
      <TrustedPlatforms />
      <Stats />
      <Services />
      <Industries />
      <WhyChoose />
      <PortfolioSection />
      <WorkingProcess />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}