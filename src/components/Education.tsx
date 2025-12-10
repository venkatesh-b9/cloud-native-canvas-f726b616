import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-hover p-8 lg:p-12">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-16 h-16 rounded-2xl gradient-bg-primary flex items-center justify-center flex-shrink-0"
              >
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-primary mb-4">
                  Mechanical Engineering
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>J.B.R Engineering College, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2019 – 2022</span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="flex -space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="w-8 h-8 rounded-full border-2 border-card bg-gradient-to-br from-primary/50 to-accent/50"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Foundation for technical excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
