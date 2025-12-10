import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, VPC, RDS, S3)", level: 90 },
      { name: "AWS CloudWatch", level: 85 },
      { name: "AWS IAM & Security", level: 85 },
      { name: "Linux Administration", level: 88 },
    ],
  },
  {
    title: "Container & Orchestration",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes (EKS)", level: 85 },
      { name: "Microservices Architecture", level: 80 },
      { name: "Container Security", level: 75 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 82 },
    ],
  },
  {
    title: "Monitoring & Scripting",
    skills: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 82 },
      { name: "Python", level: 85 },
      { name: "Bash Scripting", level: 88 },
    ],
  },
];

const techLogos = [
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Jenkins", icon: "🔧" },
  { name: "Python", icon: "🐍" },
  { name: "Linux", icon: "🐧" },
  { name: "Grafana", icon: "📊" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero opacity-30" />
      
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
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tech Logos Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card px-6 py-4 flex items-center gap-3 cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-foreground font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AWS EC2", "AWS VPC", "AWS RDS", "AWS S3", "AWS CloudWatch", 
              "AWS IAM", "Docker", "Kubernetes", "EKS", "Terraform", 
              "Ansible", "Jenkins", "GitHub Actions", "GitLab CI",
              "Python", "Bash", "Linux", "Prometheus", "Grafana"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.03 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "hsl(var(--primary) / 0.2)",
                  borderColor: "hsl(var(--primary) / 0.5)"
                }}
                className="px-4 py-2 rounded-full text-sm border border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
