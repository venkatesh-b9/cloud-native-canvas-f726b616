import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:venkateshbhukyam009@gmail.com",
    icon: Mail,
    label: "venkateshbhukyam009@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/venkateshbhukyadevops",
    icon: Linkedin,
    label: "linkedin.com/in/venkateshbhukyadevops",
  },
  {
    name: "GitHub",
    href: "https://github.com/venkatesh-b9",
    icon: Github,
    label: "github.com/venkatesh-b9",
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative blobs */}
      <motion.div
        className="blob blob-purple w-[400px] h-[400px] -bottom-40 -left-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob blob-cyan w-[300px] h-[300px] -bottom-20 right-10"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Looking for a DevOps Engineer to help scale your infrastructure? 
              Let's connect and discuss how I can contribute to your team.
            </p>
            <Button
              size="lg"
              className="glow-button gradient-bg-primary text-primary-foreground border-0 px-8 py-6 text-lg font-medium"
              onClick={() => window.location.href = 'mailto:venkateshbhukyam009@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 max-w-3xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {link.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {link.label}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8 border-t border-border/30"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Bhukya Venkatesh. Built with 
              <Heart className="w-4 h-4 text-primary" />
              for DevOps.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
