import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Cog, Server, Monitor } from "lucide-react";

const projects = [
  {
    title: "Three-Cylinder Radial Steam Engine",
    category: "3D CAD Assembly",
    description: "Modeled individual components including cylinder, crank, and piston with accurate dimensions. Created constraint-based 3D assembly to study mechanism motion.",
    tools: ["SolidWorks"],
    icon: Cog,
    color: "from-amber-500/20 to-orange-600/20",
    link: "#",
  },
  {
    title: "Multi-Use Cart",
    category: "Patent Pending",
    description: "Complete mechanical draft addressing usability and load handling. Developed component-level models ensuring fit, alignment, and functionality.",
    tools: ["SolidWorks", "AutoCAD"],
    icon: Cog,
    color: "from-blue-500/20 to-cyan-600/20",
    link: "#",
  },
  {
    title: "IoT Baby Monitoring System",
    category: "IoT / Cloud",
    description: "Real-time monitoring system integrating sensors with ESP32 for data acquisition. Implemented cloud-based data flow and condition monitoring.",
    tools: ["ESP32", "Sensors", "Cloud", "Dashboard"],
    icon: Cpu,
    color: "from-emerald-500/20 to-teal-600/20",
    link: "#",
  },
  {
    title: "Local Server on ESP32",
    category: "Embedded Systems",
    description: "Implemented local server for real-time data acquisition and communication. Designed chat room and attendance system for organizations.",
    tools: ["ESP32", "Embedded C", "Networking"],
    icon: Server,
    color: "from-purple-500/20 to-pink-600/20",
    link: "#",
  },
  {
    title: "Recycle Sorter & Vending Machine",
    category: "3D CAD Assembly",
    description: "Component-level modeling of a recycle sorting and vending system. Studied mechanism layout for functional integration and design feasibility.",
    tools: ["SolidWorks"],
    icon: Monitor,
    color: "from-rose-500/20 to-red-600/20",
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="section-padding px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-display-xl mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-body-md font-body max-w-2xl mx-auto">
            A collection of mechanical designs, IoT systems, and innovative solutions that showcase my engineering expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-effect rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <project.icon className="w-12 h-12 text-foreground/50 group-hover:text-foreground/80 transition-colors" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-body-sm font-body">{project.category}</span>
                <h3 className="font-display text-lg text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-body-sm font-body mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-body bg-secondary rounded-md text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
