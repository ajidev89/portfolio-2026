import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-mono">
        <div>&copy; {new Date().getFullYear()} Ajidagba Ayobami. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/ajidev89" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ajidagba-ayobami/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://ajidev89.netlify.app" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Website</a>
        </div>
      </div>
    </footer>
  );
}
