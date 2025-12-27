import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Creative Developer & Designer</title>
        <meta
          name="description"
          content="I craft digital experiences that resonate. Blending strategy, design, and technology to create memorable digital products."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
