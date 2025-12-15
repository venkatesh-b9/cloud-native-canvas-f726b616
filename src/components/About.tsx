import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, GitBranch, Settings, Zap, Shield } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Designing and deploying scalable AWS solutions with EC2, VPC, RDS, and S3",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Container Orchestration",
    description: "Managing microservices with Docker, Kubernetes, and Amazon EKS",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    description: "Building robust pipelines with Jenkins, GitHub Actions, and GitLab CI",
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    description: "Automating infrastructure with Terraform and Ansible for consistency",
    gradient: "from-pink-500 to-purple-500",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 blob blob-purple opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-60 h-60 blob blob-cyan opacity-15"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <Zap className="w-4 h-4" />
              About Me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
              Passionate about{" "}
              <span className="gradient-text">Cloud-Native</span> Solutions
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a DevOps Engineer with <span className="text-foreground font-semibold">1+ years of hands-on experience</span> in 
                designing, deploying, and managing scalable cloud infrastructure. My expertise spans 
                across the entire DevOps lifecycle, from code to production.
              </p>
              <p>
                I specialize in building <span className="text-foreground font-semibold">automated CI/CD pipelines</span>, 
                implementing <span className="text-foreground font-semibold">Infrastructure as Code</span> using Terraform and Ansible, 
                and orchestrating containerized applications with <span className="text-foreground font-semibold">Kubernetes on AWS EKS</span>.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of business needs, 
                ensuring reliable, secure, and cost-effective solutions that enable teams to ship faster.
              </p>
            </div>

            {/* Stats - Enhanced */}
            <div className="flex flex-wrap gap-10 mt-10">
              {[
                { label: "AWS", sublabel: "Cloud Platform" },
                { label: "K8s", sublabel: "Orchestration" },
                { label: "IaC", sublabel: "Automation" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="cursor-default"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight Cards - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-hover p-6 group"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
