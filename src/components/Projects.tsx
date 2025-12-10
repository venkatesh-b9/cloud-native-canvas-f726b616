import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ExternalLink, 
  Github,
  Workflow,
  Cloud,
  Container,
  Terminal,
  Activity,
  Shield
} from "lucide-react";

const projects = [
  {
    title: "HRM Tool",
    subtitle: "Human Resource Management System",
    description: "A comprehensive HR management platform with full CI/CD automation and cloud-native deployment on AWS infrastructure.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    tags: ["Jenkins", "AWS", "Terraform", "Docker", "EKS", "Python"],
    features: [
      { icon: Workflow, text: "Full CI/CD using Jenkins + AWS" },
      { icon: Cloud, text: "Terraform infrastructure automation" },
      { icon: Container, text: "Docker + EKS deployments" },
      { icon: Terminal, text: "Python automation scripts" },
      { icon: Activity, text: "CloudWatch monitoring" },
    ],
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "ZOD-Track",
    subtitle: "Project Management Platform",
    description: "A scalable project tracking system with containerized microservices architecture and multi-environment CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Microservices", "AWS", "Terraform", "Ansible", "CloudWatch"],
    features: [
      { icon: Container, text: "Containerized microservices on AWS" },
      { icon: Workflow, text: "Multi-env CI/CD pipelines" },
      { icon: Cloud, text: "Terraform + Ansible automation" },
      { icon: Activity, text: "CloudWatch alerting & logs" },
      { icon: Shield, text: "Zero-downtime deployments" },
    ],
    color: "from-cyan-500/20 to-purple-500/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
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
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Real-world DevOps solutions showcasing infrastructure automation, 
            CI/CD pipelines, and cloud-native deployments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? 2 : 0,
                  rotateY: hoveredIndex === index ? -2 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-medium">
                      DevOps
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + fIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
