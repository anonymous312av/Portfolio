import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract warm gradient background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl">
        <div className="mb-6 animate-fade-up">
          <span className="text-muted-foreground text-body-sm font-body tracking-wide uppercase">
            Creative Developer & Designer
          </span>
        </div>
        
        <h1 className="font-display text-display-xl mb-8 animate-fade-up-delay-1">
          <span className="block">I craft digital</span>
          <span className="block">
            experiences that{" "}
            <span className="text-gradient">resonate</span>
          </span>
        </h1>
        
        <p className="text-muted-foreground text-body-lg max-w-xl mb-12 font-body animate-fade-up-delay-2">
          Blending strategy, design, and technology to create memorable 
          digital products that drive meaningful connections.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
          <Button variant="hero" size="lg">
            View Selected Work
          </Button>
          <Button variant="hero-outline" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-up-delay-3"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
