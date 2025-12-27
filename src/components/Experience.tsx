import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Lead Product Designer",
    company: "Forge Studio",
    period: "2022 — Present",
    description:
      "Leading design strategy for a portfolio of B2B SaaS products. Established design systems that reduced development time by 40% while maintaining exceptional user experience standards.",
  },
  {
    role: "Senior Designer",
    company: "Catalyst Digital",
    period: "2019 — 2022",
    description:
      "Spearheaded the redesign of flagship products for enterprise clients. Collaborated with cross-functional teams to ship features that increased user engagement by 65%.",
  },
  {
    role: "Product Designer",
    company: "Ember Labs",
    period: "2017 — 2019",
    description:
      "Designed end-to-end experiences for mobile and web applications. Built and maintained component libraries that streamlined the design-to-development workflow.",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding px-6 md:px-12 lg:px-20 bg-surface-elevated"
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
              Experience
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <article
                  key={exp.company}
                  className={`group transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-body">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-body-sm font-body shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-body-md font-body max-w-2xl">
                    {exp.description}
                  </p>
                  {index < experiences.length - 1 && (
                    <div className="mt-16 border-b border-border" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
