import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">AJIDAGBA AYOBAMI</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-white/70">
          <a href="#about" className="hover:text-primary transition-colors">01. About</a>
          <a href="#experience" className="hover:text-primary transition-colors">02. Experience</a>
          <a href="#work" className="hover:text-primary transition-colors">03. Work</a>
          <a href="#contact" className="hover:text-primary transition-colors">04. Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
