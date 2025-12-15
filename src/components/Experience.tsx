import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Workflow, 
  Cloud, 
  Container, 
  Terminal, 
  Activity,
  Server,
  Briefcase,
  MapPin,
  Calendar
} from "lucide-react";

const experiences = [
  {
    company: "PRIACC Innovations",
    role: "DevOps Engineer",
    period: "Jan 2025 – Present",
    location: "India",
    responsibilities: [
      {
        icon: Workflow,
        title: "CI/CD Automation",
        description: "Designed and automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 60%",
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: Cloud,
        title: "AWS Infrastructure",
        description: "Managed and optimized AWS infrastructure including VPC, EC2, IAM policies, and S3 storage solutions",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Server,
        title: "Infrastructure as Code",
        description: "Implemented IaC practices using Terraform and Ansible for reproducible and version-controlled infrastructure",
        color: "from-cyan-500 to-teal-500",
      },
      {
        icon: Container,
        title: "Container Orchestration",
        description: "Deployed and managed microservices on Amazon EKS with Docker containerization",
        color: "from-orange-500 to-red-500",
      },
      {
        icon: Terminal,
        title: "Automation Scripts",
        description: "Developed Python automation scripts for routine tasks, improving operational efficiency",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Activity,
        title: "Monitoring & Observability",
        description: "Set up comprehensive monitoring using CloudWatch, Grafana, and Prometheus dashboards",
        color: "from-pink-500 to-rose-500",
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero opacity-60" />
      
      {/* Decorative blobs */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-96 h-96 blob blob-blue opacity-20"
        animate={{ y: [0, 50, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
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
            <Briefcase className="w-4 h-4" />
            Work History
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-premium p-8 lg:p-12"
          >
            {/* Company Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 pb-8 border-b border-border/30">
              <div>
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-foreground"
                  whileHover={{ x: 5 }}
                >
                  {exp.company}
                </motion.h3>
                <p className="text-xl lg:text-2xl gradient-text font-semibold mt-2">{exp.role}</p>
              </div>
              <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-4">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </motion.span>
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exp.responsibilities.map((resp, index) => (
                <motion.div
                  key={resp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resp.color} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  >
                    <resp.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {resp.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
