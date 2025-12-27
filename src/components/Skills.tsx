import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "CAD & Design": [
    { name: "SolidWorks", level: 90 },
    { name: "AutoCAD", level: 85 },
    { name: "ANSYS", level: 75 },
    { name: "Blender", level: 60 },
  ],
  "Embedded & IoT": [
    { name: "Arduino", level: 90 },
    { name: "ESP32/ESP8266", level: 88 },
    { name: "Raspberry Pi", level: 70 },
    { name: "Sensors Integration", level: 85 },
  ],
  "Software & Tools": [
    { name: "Python", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "MQTT/HTTP", level: 80 },
    { name: "Tinkercad", level: 85 },
  ],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="section-padding px-6 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="font-display text-display-xl">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="font-display text-lg text-foreground mb-6 pb-3 border-b border-border">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-body-sm text-foreground font-body">{skill.name}</span>
                      <span className="text-body-sm text-muted-foreground font-body">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.15 + index * 0.1 + 0.3 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
