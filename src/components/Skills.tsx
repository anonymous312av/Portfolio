import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Design",
    skills: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping", "Motion Design"],
  },
  {
    title: "Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Webflow", "Framer", "After Effects", "Blender"],
  },
];

const Skills = () => {
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
      id="skills"
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
              Skills & Tools
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(categoryIndex + 1) * 150}ms` }}
                >
                  <h3 className="font-display text-lg text-foreground mb-6">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground text-body-sm font-body"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
