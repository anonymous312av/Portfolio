import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award } from "lucide-react";

const achievements = [
  {
    title: "TECHNIKA'25 Winner",
    event: "Project Exhibition",
    organization: "HBTU Kanpur",
    role: "Team Leader",
    icon: Trophy,
  },
  {
    title: "SolidWorks Design Challenge Winner",
    event: "CAD Challenge 2.0",
    organization: "MDAC",
    role: "Winner",
    icon: Trophy,
  },
  {
    title: "SimulaThon Winner",
    event: "RoboMania'24",
    organization: "IoTVerse Club",
    role: "Winner",
    icon: Trophy,
  },
  {
    title: "IoT Innovation Challenge",
    event: "Hackfest'23",
    organization: "SDC & IoTVerse Club",
    role: "Runner-Up",
    icon: Medal,
  },
  {
    title: "AutoCAD Design Challenge Winner",
    event: "CAD Challenge 1.0",
    organization: "MDAC",
    role: "Winner",
    icon: Award,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="achievements" className="section-padding px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="font-display text-display-xl">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 text-xs font-body bg-primary/20 text-primary rounded-full mb-2">
                    {achievement.role}
                  </span>
                  <h3 className="font-display text-foreground text-lg mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-body-sm font-body">
                    {achievement.event}
                  </p>
                  <p className="text-muted-foreground/70 text-body-sm font-body">
                    {achievement.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
