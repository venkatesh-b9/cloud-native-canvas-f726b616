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
  Shield,
  Folder,
  ArrowUpRight
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
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    glowColor: "purple",
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
    gradient: "from-cyan-600 via-blue-600 to-purple-600",
    glowColor: "cyan",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 blob blob-purple opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
            <Folder className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Real-world DevOps solutions showcasing infrastructure automation, 
            CI/CD pipelines, and cloud-native deployments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative card-3d"
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? 3 : 0,
                  rotateY: hoveredIndex === index ? -3 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                  z: hoveredIndex === index ? 50 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-premium overflow-hidden card-3d-inner"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Floating badges */}
                  <div className="absolute top-5 left-5 flex gap-2">
                    <motion.span 
                      className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      DevOps
                    </motion.span>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div 
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {project.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + fIndex * 0.1 }}
                        className="flex items-center gap-4 text-sm group/feature"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform`}>
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
