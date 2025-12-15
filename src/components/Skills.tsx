import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu } from "lucide-react";
import devopsBgSkills from "@/assets/devops-bg-skills.jpg";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "AWS (EC2, VPC, RDS, S3)", level: 90 },
      { name: "AWS CloudWatch", level: 85 },
      { name: "AWS IAM & Security", level: 85 },
      { name: "Linux Administration", level: 88 },
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Container & Orchestration",
    icon: "🐳",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes (EKS)", level: 85 },
      { name: "Microservices Architecture", level: 80 },
      { name: "Container Security", level: 75 },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "CI/CD & Automation",
    icon: "⚙️",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 82 },
    ],
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Monitoring & Scripting",
    icon: "📊",
    skills: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 82 },
      { name: "Python", level: 85 },
      { name: "Bash Scripting", level: 88 },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

const techLogos = [
  { name: "AWS", icon: "☁️", color: "from-orange-500 to-amber-500" },
  { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
  { name: "Kubernetes", icon: "☸️", color: "from-blue-600 to-indigo-600" },
  { name: "Terraform", icon: "🏗️", color: "from-purple-500 to-violet-500" },
  { name: "Jenkins", icon: "🔧", color: "from-red-500 to-orange-500" },
  { name: "Python", icon: "🐍", color: "from-yellow-500 to-green-500" },
  { name: "Linux", icon: "🐧", color: "from-yellow-500 to-amber-500" },
  { name: "Grafana", icon: "📊", color: "from-orange-500 to-red-500" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={devopsBgSkills} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase">
            <Cpu className="w-4 h-4" />
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tech Logos Strip - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -8, rotate: [0, -5, 5, 0] }}
              className="glass-card px-6 py-4 flex items-center gap-3 cursor-default group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-foreground font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid - Enhanced */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-premium p-8 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <motion.span 
                        className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="skill-bar h-3 rounded-full">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {/* Shimmer effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 + skillIndex * 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges Grid - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <Code2 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-center text-foreground">
              Core Technologies
            </h3>
          </div>
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
                  scale: 1.08, 
                  y: -3,
                  backgroundColor: "hsl(var(--primary) / 0.15)",
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
                }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium border border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground transition-all cursor-default"
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
