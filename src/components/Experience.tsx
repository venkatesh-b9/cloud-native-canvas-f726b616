import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Workflow, 
  Cloud, 
  Container, 
  Terminal, 
  Activity,
  Server
} from "lucide-react";

const experiences = [
  {
    company: "PRIACC Innovations",
    role: "DevOps Engineer",
    period: "May 2025 – Present",
    location: "India",
    responsibilities: [
      {
        icon: Workflow,
        title: "CI/CD Automation",
        description: "Designed and automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 60%",
      },
      {
        icon: Cloud,
        title: "AWS Infrastructure",
        description: "Managed and optimized AWS infrastructure including VPC, EC2, IAM policies, and S3 storage solutions",
      },
      {
        icon: Server,
        title: "Infrastructure as Code",
        description: "Implemented IaC practices using Terraform and Ansible for reproducible and version-controlled infrastructure",
      },
      {
        icon: Container,
        title: "Container Orchestration",
        description: "Deployed and managed microservices on Amazon EKS with Docker containerization",
      },
      {
        icon: Terminal,
        title: "Automation Scripts",
        description: "Developed Python automation scripts for routine tasks, improving operational efficiency",
      },
      {
        icon: Activity,
        title: "Monitoring & Observability",
        description: "Set up comprehensive monitoring using CloudWatch, Grafana, and Prometheus dashboards",
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-hero opacity-50" />
      
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
            Work History
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((exp, expIndex) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 lg:p-12"
          >
            {/* Company Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 pb-8 border-b border-border/50">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <p className="text-xl text-primary mt-1">{exp.role}</p>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center gap-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                  {exp.period}
                </span>
                <span className="text-muted-foreground">{exp.location}</span>
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
                  className="group p-6 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <resp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
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
