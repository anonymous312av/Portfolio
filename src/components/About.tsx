import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "3+", label: "Competitions Won" },
    { value: "2.5", label: "Years Experience" },
  ];

  return (
    <section ref={ref} id="about" className="section-padding px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-display-xl mb-6"
            >
              Engineering meets
              <span className="text-gradient"> creativity</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-body-md font-body"
            >
              <p>
                I'm a B.Tech Mechanical Engineering student at Rajkiya Engineering College, Banda, 
                passionate about bridging the gap between traditional engineering and modern technology.
              </p>
              <p>
                My expertise spans from detailed CAD design in SolidWorks and AutoCAD to building 
                IoT systems with ESP32 and real-time cloud integration. I thrive on turning complex 
                mechanical concepts into functional prototypes and intelligent systems.
              </p>
              <p>
                As an active member of IoTVerse Club and MDAC, I've organized workshops and 
                led teams to competition victories, always pushing the boundaries of what's possible.
              </p>
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 glass-effect rounded-2xl hover-lift"
              >
                <div className="font-display text-display-lg text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-body-sm font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
