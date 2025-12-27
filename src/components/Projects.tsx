import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Meridian",
    category: "Brand & Web Design",
    description:
      "A complete brand identity and digital platform for a sustainable architecture firm. Focused on conveying innovation while honoring traditional craftsmanship.",
    image: project1,
  },
  {
    title: "Pulse",
    category: "Product Design",
    description:
      "Redesigning the core experience of a health-tech platform serving 2M+ users. Simplified complex data into actionable insights.",
    image: project2,
  },
  {
    title: "Luminary",
    category: "Mobile App",
    description:
      "An iOS application helping photographers discover and plan golden hour shoots. Featured in the App Store's design spotlight.",
    image: project3,
  },
];

const Projects = () => {
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
      id="projects"
      className="section-padding px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span
            className={`text-muted-foreground text-body-sm font-body tracking-wide uppercase block mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selected Work
          </span>
          <h2
            className={`font-display text-display-md max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Projects that define my craft and push creative boundaries.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary text-body-sm font-body mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-display-md mb-4 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                    <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-muted-foreground text-body-md font-body max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
