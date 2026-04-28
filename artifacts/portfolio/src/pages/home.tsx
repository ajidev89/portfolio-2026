import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Mail, Twitter, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-32 max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="font-mono text-primary text-sm mb-6 tracking-tight">
            ALEX CARTER
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
            Principal Engineer.<br />
            <span className="text-muted-foreground">Architecting scalable platforms.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            I build distributed systems and developer platforms that power modern products. 
            Currently focused on high-throughput infrastructure and unified build graphs.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <a href="#contact" className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-primary transition-colors inline-flex items-center gap-2">
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com" className="hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-16 flex items-baseline gap-4">
            <span className="text-primary font-mono text-sm font-normal">02.</span> Experience
          </motion.h2>

          <div className="space-y-16">
            {[
              {
                role: "Principal Engineer",
                company: "Nexus AI",
                date: "2021 — Present",
                description: "Led migration of a 200-service monorepo to a unified build graph, cutting CI time from 38m to 6m. Architected the core event streaming platform handling 50B+ daily events with sub-millisecond latency.",
                stack: ["Go", "Rust", "Kafka", "Kubernetes"]
              },
              {
                role: "Staff Software Engineer",
                company: "Stripe",
                date: "2018 — 2021",
                description: "Designed and implemented the next-generation ledger architecture. Reduced reconciliation latency by 40% while maintaining absolute consistency guarantees.",
                stack: ["Ruby", "Java", "PostgreSQL", "Temporal"]
              },
              {
                role: "Senior Software Engineer",
                company: "Vercel",
                date: "2015 — 2018",
                description: "Core contributor to the deployment pipeline orchestration. Built the initial distributed cache layer that enabled instant rollbacks.",
                stack: ["TypeScript", "Node.js", "Redis", "AWS"]
              }
            ].map((job, i) => (
              <motion.div key={i} variants={fadeUp} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
                <div className="text-muted-foreground font-mono text-sm mt-1">{job.date}</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    {job.role} <span className="text-muted-foreground font-normal">at</span> <span className="text-foreground">{job.company}</span>
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="work" className="py-32 px-6 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-16 flex items-baseline gap-4">
            <span className="text-primary font-mono text-sm font-normal">03.</span> Selected Work
          </motion.h2>

          <div className="grid grid-cols-1 gap-20">
            {[
              {
                title: "Distributed Build Graph",
                description: "A high-performance remote execution and caching system for monorepos. Achieved 85% cache hit rates across local and CI environments.",
                metrics: "Reduced CI times from 38m to 6m. 99.99% uptime.",
                tech: ["Rust", "gRPC", "Redis"],
                link: "github.com/alexcarter/build-graph"
              },
              {
                title: "Chronos Ledger",
                description: "Immutable, append-only financial ledger built on PostgreSQL. Handles high-throughput transactional data with strict consistency guarantees.",
                metrics: "Processes 10k TPS. Zero data anomalies in 3 years.",
                tech: ["Go", "PostgreSQL", "Kafka"],
                link: "github.com/alexcarter/chronos"
              }
            ].map((project, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`order-2 ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border/50 relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>
                <div className={`order-1 ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="font-mono text-primary text-sm mb-4">Open Source</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="p-6 bg-card border border-border rounded-lg shadow-sm mb-6 relative z-10 text-muted-foreground leading-relaxed">
                    <p className="mb-4">{project.description}</p>
                    <p className="text-sm font-medium text-foreground">{project.metrics}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-6">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="font-mono text-primary text-sm mb-4">04. What's Next?</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">Get In Touch</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities focusing on hard distributed systems problems.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          <motion.a 
            variants={fadeUp} 
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Say Hello <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
