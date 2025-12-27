import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Label */}
          <div className="lg:col-span-3">
            <span
              className={`text-muted-foreground text-body-sm font-body tracking-wide uppercase transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              About
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 container-text">
            <h2
              className={`font-display text-display-md mb-10 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I believe in the power of thoughtful design to transform how people experience the digital world.
            </h2>

            <div
              className={`space-y-6 text-muted-foreground text-body-md font-body transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                With over eight years of experience spanning brand strategy, digital design, 
                and front-end development, I've had the privilege of collaborating with 
                startups, agencies, and established brands to bring their visions to life.
              </p>
              <p>
                My approach is rooted in understanding the intersection of user needs and 
                business goals. I don't just design interfaces—I craft experiences that 
                tell stories, solve problems, and create lasting impressions.
              </p>
              <p>
                When I'm not pushing pixels or writing code, you'll find me exploring 
                architecture, experimenting with photography, or seeking inspiration 
                in the details of everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
