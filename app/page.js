import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* <Container maxWidth='xl'> */}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
        {/* </Container> */}
      </div>
    </>
  );
}
