import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, GitBranch, Settings } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Designing and deploying scalable AWS solutions with EC2, VPC, RDS, and S3",
  },
  {
    icon: Server,
    title: "Container Orchestration",
    description: "Managing microservices with Docker, Kubernetes, and Amazon EKS",
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    description: "Building robust pipelines with Jenkins, GitHub Actions, and GitLab CI",
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    description: "Automating infrastructure with Terraform and Ansible for consistency",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
              Passionate about{" "}
              <span className="gradient-text">Cloud-Native</span> Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a DevOps Engineer with <span className="text-foreground font-medium">1+ years of hands-on experience</span> in 
                designing, deploying, and managing scalable cloud infrastructure. My expertise spans 
                across the entire DevOps lifecycle, from code to production.
              </p>
              <p>
                I specialize in building <span className="text-foreground font-medium">automated CI/CD pipelines</span>, 
                implementing <span className="text-foreground font-medium">Infrastructure as Code</span> using Terraform and Ansible, 
                and orchestrating containerized applications with <span className="text-foreground font-medium">Kubernetes on AWS EKS</span>.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of business needs, 
                ensuring reliable, secure, and cost-effective solutions that enable teams to ship faster.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-foreground">AWS</div>
                <div className="text-sm text-muted-foreground">Cloud Platform</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">K8s</div>
                <div className="text-sm text-muted-foreground">Orchestration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">IaC</div>
                <div className="text-sm text-muted-foreground">Automation</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
