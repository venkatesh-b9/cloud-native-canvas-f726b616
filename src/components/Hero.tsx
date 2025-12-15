import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";
import devopsBgHero from "@/assets/devops-bg-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={devopsBgHero} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg-hero" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated Blobs - Enhanced */}
      <motion.div
        className="blob blob-purple w-[600px] h-[600px] -top-60 -left-60"
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob blob-blue w-[500px] h-[500px] top-1/3 -right-40"
        animate={{
          x: [0, -50, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob blob-cyan w-[400px] h-[400px] bottom-20 left-1/4"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob blob-pink w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm mb-8 shimmer"
          >
            <motion.span 
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-primary flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name - Enhanced */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 tracking-tight"
          >
            <motion.span 
              className="text-foreground inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Bhukya{" "}
            </motion.span>
            <motion.span 
              className="gradient-text text-glow-strong inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Venkatesh
            </motion.span>
          </motion.h1>

          {/* Role - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              DevOps Engineer
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {["AWS", "Kubernetes", "Terraform", "CI/CD"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                  }}
                  className="px-4 py-1.5 text-sm font-medium rounded-full border border-accent/40 bg-accent/15 text-accent cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tagline - Enhanced */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable, automated, cloud-native systems with{" "}
            <span className="text-foreground font-semibold animated-underline">AWS</span>,{" "}
            <span className="text-foreground font-semibold animated-underline">Kubernetes</span>,{" "}
            <span className="text-foreground font-semibold animated-underline">Terraform</span> &{" "}
            <span className="text-foreground font-semibold animated-underline">CI/CD</span>.
          </motion.p>

          {/* CTAs - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button
              size="lg"
              className="glow-button gradient-bg-primary text-primary-foreground border-0 px-10 py-7 text-lg font-semibold rounded-2xl"
              asChild
            >
              <a href="/B.VENKATESH_DEVOPS_CV.pdf" download="B.VENKATESH_DEVOPS_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              Contact Me
            </Button>
          </motion.div>

          {/* Stats Glass Card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-premium mt-20 p-10 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <motion.div 
                className="group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter end={1} suffix="+" duration={1.5} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div 
                className="group cursor-default border-x border-border/30 px-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter end={10} suffix="+" duration={2} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">Projects Deployed</div>
              </motion.div>
              <motion.div 
                className="group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter end={99.9} suffix="%" duration={2.5} decimals={1} />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">Uptime Achieved</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs mb-3 tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 group-hover:border-primary/50 transition-colors">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
