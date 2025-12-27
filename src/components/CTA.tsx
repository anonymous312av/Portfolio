import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span
          className={`text-muted-foreground text-body-sm font-body tracking-wide uppercase block mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Let's Connect
        </span>

        <h2
          className={`font-display text-display-lg mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Have a project in mind?
          <br />
          <span className="text-gradient">Let's create something extraordinary.</span>
        </h2>

        <p
          className={`text-muted-foreground text-body-lg font-body max-w-xl mx-auto mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I'm always open to discussing new opportunities, creative collaborations, 
          or simply having a conversation about design and technology.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button variant="hero" size="xl" className="group">
            Start a Conversation
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
          <span className="text-muted-foreground text-body-sm font-body">
            or email me at{" "}
            <a
              href="mailto:hello@example.com"
              className="text-foreground hover:text-primary transition-colors duration-200 underline underline-offset-4"
            >
              hello@example.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
