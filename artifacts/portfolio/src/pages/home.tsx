import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Mail, Linkedin, Phone, Globe, Download } from "lucide-react";
import {
  SiLaravel,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiStripe,
  SiPaypal,
} from "react-icons/si";
import profileImage from "@/assets/profile.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const experience = [
  {
    role: "Principal Software Engineer",
    subRole: "Product Architect",
    company: "Voyatek Group",
    location: "Nigeria",
    date: "Jul 2024 — Present",
    type: "Contract",
    description:
      "Lead a team of 6 engineers building Enterprise Resource Planning software. Own architecture, coordinate delivery, and ship features including integrated chat & calls, calendar management, leads tracking, and file management — measurably improving productivity for client organizations.",
    stack: ["Node.js", "TypeScript", "Next.js", "Docker"],
  },
  {
    role: "Fullstack Engineer",
    subRole: "Team Lead",
    company: "Kavlr",
    location: "United Kingdom",
    date: "Jan 2022 — Jun 2024",
    description:
      "Led a team of developers, built the Admin Dashboard and APIs, and integrated Evolve (cards), PayPal, and Stripe to streamline payments. Spearheaded a No-Code Checkout feature that enabled rapid deployment of payment solutions, with security and best practices baked in from day one.",
    stack: ["Node.js", "Vue.js", "Nuxt.js", "Stripe", "PayPal"],
  },
  {
    role: "Full-stack Engineer",
    company: "Dellyman",
    location: "Nigeria",
    date: "May 2021 — Mar 2023",
    description:
      "Built delivery plugins for WordPress and Ecwid in PHP, allowing merchants to book deliveries directly from their stores. Translated Figma designs into responsive UIs for Noshtrybe and partnered closely with backend engineers to consume and ship API endpoints.",
    stack: ["PHP", "Vue.js", "WordPress", "Laravel"],
  },
  {
    role: "Web Designer",
    company: "Dsoftsolutions",
    location: "Ikorodu",
    date: "Apr 2019 — Mar 2021",
    description:
      "Designed and shipped 25+ WordPress websites end-to-end — from procurement through commissioning — focused on timely delivery, high-quality outcomes, and helping clients turn their sites into revenue.",
    stack: ["WordPress", "PHP", "JavaScript"],
  },
];

const projects = [
  {
    title: "Kavlr",
    category: "Fintech",
    description:
      "GBP and EURO multi-currency accounts with business tools — expense management, budgeting, crowd pool, and invoicing. Built the Expense Management and No-Code Checkout modules.",
    metrics: "Multi-currency accounts • Stripe & PayPal • No-code checkout",
    tech: ["Vue.js", "Node.js", "Stripe"],
    link: "kavlr.com",
  },
  {
    title: "Kashwise",
    category: "Fintech / Wallets",
    description:
      "Integrated Kashwise with Striga to provision six wallets per user — including a Euro IBAN and BIC — bringing real European banking rails into a consumer-grade product.",
    metrics: "6 wallets per user • Euro IBAN & BIC • Striga integration",
    tech: ["Node.js", "TypeScript", "Striga"],
    link: "kashwise.app",
  },
  {
    title: "Noshtrybe",
    category: "E-commerce",
    description:
      "Frontend engineer on the Noshtrybe rebuild at Dellyman. Translated Figma into a responsive Vue.js + Vuex + Vue Router experience and wired it to backend APIs.",
    metrics: "Vue.js • Vuex • Vue Router",
    tech: ["Vue.js", "Vuex", "REST API"],
    link: "noshtrybe.com",
  },
  {
    title: "Hashit",
    category: "Marketplace",
    description:
      "Built the landing page and full marketplace experience — vendors create stores and upload products; buyers browse, add to cart, and checkout. End-to-end buyer/seller flows.",
    metrics: "Vendor stores • Cart & checkout • Marketplace flows",
    tech: ["Next.js", "Node.js", "Tailwind"],
    link: "hashit.io",
  },
];

const tools = [
  { name: "Laravel", category: "Backend", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", category: "Backend", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "TypeScript", category: "Language", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", category: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", category: "Frontend", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Nuxt.js", category: "Frontend", Icon: SiNuxt, color: "#00DC82" },
  { name: "Tailwind CSS", category: "Styling", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", category: "Infrastructure", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", category: "Version Control", Icon: SiGit, color: "#F05032" },
  { name: "Stripe", category: "Payments", Icon: SiStripe, color: "#635BFF" },
  { name: "PayPal", category: "Payments", Icon: SiPaypal, color: "#003087" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-32 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center"
        >
          <div className="max-w-3xl order-2 md:order-1">
            <motion.div variants={fadeUp} className="font-mono text-accent-gradient text-sm mb-6 tracking-tight">
              AJIDAGBA AYOBAMI
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              Principal Engineer.<br />
              <span className="text-accent-gradient">Architecting products</span>
              <span className="text-muted-foreground"> that ship.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">Product-first engineer building APIs, web, and mobile products across fintech, e-commerce, ERP, logistics, and digital agencies. I lead teams from initial planning through rollout — and beyond expectations.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="bg-accent-gradient text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="Ajidagba-Ayobami-Resume.pdf"
                download
                className="px-6 py-3 rounded-full font-medium border border-border hover:border-primary/60 hover:text-foreground text-muted-foreground transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <a
                  href="https://github.com/ajidev89"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajidagba-ayobami/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://ajidev89.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Personal website"
                  className="hover:text-foreground transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" aria-hidden="true" />
              <div className="absolute -inset-px rounded-full bg-gradient-to-br from-primary/60 via-primary/10 to-transparent" aria-hidden="true" />
              <img
                src={profileImage}
                alt="Ajidagba Ayobami"
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover grayscale-[20%] ring-1 ring-border/60 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-background border border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">Available</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold flex items-baseline gap-4">
            <span className="text-accent-gradient font-mono text-sm font-normal">01.</span> About
          </motion.h2>
          <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <motion.p variants={fadeUp}>
              I'm a solutions-driven engineer with hands-on experience across finance, e-commerce,
              enterprise resource planning, logistics, and digital agencies — building both web and
              mobile products end-to-end.
            </motion.p>
            <motion.p variants={fadeUp}>
              I've taken products from initial planning through full rollout and ongoing support,
              and I've led teams of developers — assigning work by individual strength and shipping
              past company expectations.
            </motion.p>
            <motion.p variants={fadeUp}>
              Today I work as Principal Software Engineer & Product Architect at Voyatek Group,
              where I lead a team of six on a production ERP platform.
            </motion.p>
          </div>
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
            <span className="text-accent-gradient font-mono text-sm font-normal">02.</span> Experience
          </motion.h2>

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group"
              >
                <div className="text-muted-foreground font-mono text-sm mt-1">
                  {job.date}
                  {job.type && (
                    <div className="text-xs mt-1 text-primary/80">{job.type}</div>
                  )}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-foreground flex flex-wrap items-center gap-x-2">
                    {job.role}
                    {job.subRole && (
                      <span className="text-muted-foreground font-normal text-base">
                        ({job.subRole})
                      </span>
                    )}
                    <span className="text-muted-foreground font-normal">at</span>
                    <span className="text-foreground">{job.company}</span>
                    <span className="text-muted-foreground font-normal text-sm">
                      · {job.location}
                    </span>
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
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
      {/* TOOLS SECTION */}
      <section id="tools" className="py-32 px-6 max-w-5xl mx-auto border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6 flex items-baseline gap-4">
            <span className="text-accent-gradient font-mono text-sm font-normal">03.</span> Tools I Use
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
          >
            The everyday stack — battle-tested across fintech, ERP, e-commerce, and logistics.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => {
              const Icon = tool.Icon;
              return (
                <motion.div
                  key={tool.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative overflow-hidden bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center bg-secondary/50 group-hover:bg-secondary transition-colors flex-shrink-0"
                    style={{ color: tool.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground truncate">{tool.name}</div>
                    <div className="font-mono text-xs text-muted-foreground truncate">
                      {tool.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6 flex items-baseline gap-4">
            <span className="text-accent-gradient font-mono text-sm font-normal">04.</span> Selected Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
          >
            Brands I've shipped for — fintech rails, marketplaces, and revenue products.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-accent-gradient text-sm">{project.category}</div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-foreground mb-6 font-mono">
                  {project.metrics}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {t}
                    </span>
                  ))}
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
          <motion.div variants={fadeUp} className="font-mono text-accent-gradient text-sm mb-4">
            05. What's Next?
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mb-10 leading-relaxed"
          >
            I'm open to contract and full-time roles where backend depth, product thinking, and
            shipping discipline matter. Whether you're scoping an ERP, a payments rail, or a
            marketplace — let's talk.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:ajidagba21@gmail.com"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Say Hello <Mail className="w-4 h-4" />
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-mono"
          >
            <a
              href="mailto:ajidagba21@gmail.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" /> ajidagba21@gmail.com
            </a>
            <a
              href="tel:+2347084773667"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> +234 708 477 3667
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
