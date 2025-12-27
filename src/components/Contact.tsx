import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "anmolvermahere@gmail.com",
      href: "mailto:anmolvermahere@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9453227003",
      href: "tel:+919453227003",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com",
    },
  ];

  return (
    <section ref={ref} id="contact" className="section-padding px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-body-sm font-body tracking-widest uppercase mb-4 block"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-display-xl mb-6"
        >
          Let's build something
          <span className="text-gradient"> amazing</span> together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-body-lg font-body max-w-2xl mx-auto mb-12"
        >
          I'm always open to discussing new projects, internship opportunities, 
          or collaborations in mechanical design and IoT development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group glass-effect rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all hover-lift"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <div className="text-body-sm text-muted-foreground font-body">{link.label}</div>
                <div className="text-foreground font-body text-body-sm">{link.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:anmolvermahere@gmail.com">
              Send me an email
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
