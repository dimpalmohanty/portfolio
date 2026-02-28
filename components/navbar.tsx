"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>d.codes</div>

        {/* Desktop Links */}
        <div className={styles.links}>
          <Link href="/#about" className={styles.link}>About</Link>
          <Link href="/#skills" className={styles.link}>Skills</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
          <Link href="/#experience" className={styles.link}>Experience</Link>
          <Link href="/#contact" className={styles.link}>Contact</Link>

          {isProjectsPage && (
            <a
              href="/DimpalMohantyResume16feb2026.pdf"
              className={styles.resumeBtn}
              download
            >
              Resume
            </a>
          )}
        </div>

        {/* Burger Icon */}
        <div
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/#experience" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>

            {isProjectsPage && (
              <a
                href="/DimpalMohantyResume16feb2026.pdf"
                download
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}