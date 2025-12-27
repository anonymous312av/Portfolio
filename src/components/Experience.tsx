import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Mechanical Design Intern (AutoCAD)",
    company: "Academy of Skill Development",
    period: "Sep 2025 - Oct 2025",
    description: [
      "Executed 2D CAD drafting and detailing of residential floor plans using AutoCAD",
      "Produced dimensioned layout drawings following basic drafting standards",
      "Improved proficiency in design interpretation and CAD workflow management",
    ],
  },
  {
    role: "Workshop Coordinator & Volunteer",
    company: "IoTVerse Club & MDAC, REC Banda",
    period: "2022 - Present",
    description: [
      "Conducted workshops and training sessions across various engineering domains",
      "Mentored juniors in IoT, CAD design, and embedded systems",
      "Organized technical events and competitions for 2.5+ years",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" className="section-padding px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="font-display text-display-xl">
            Experience & <span className="text-gradient">Involvement</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-1/2 md:-translate-x-1/2 z-10" />
              
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="glass-effect rounded-2xl p-6 hover-lift">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary text-body-sm font-body">{exp.period}</span>
                  </div>
                  
                  <h3 className="font-display text-xl text-foreground mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground font-body">{exp.company}</span>
                  </div>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-body-sm font-body">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
