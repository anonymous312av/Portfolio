import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anmol Verma | Mechanical Designer & Automation Engineer</title>
        <meta
          name="description"
          content="B.Tech Mechanical Engineering student specializing in CAD design, IoT systems, and automation. View my portfolio of projects in SolidWorks, AutoCAD, and embedded systems."
        />
        <meta name="keywords" content="Anmol Verma, Mechanical Engineer, CAD Designer, SolidWorks, AutoCAD, IoT, ESP32, Arduino, Portfolio" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
