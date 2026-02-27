"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation"
export default function Navbar() {
    const pathname = usePathname()

  const isProjectsPage = pathname === "/projects"
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>d.codes</div>

        <div className={styles.links}>
          <a href="/#about" className={styles.link}>
            About
          </a>
          <a href="/#skills" className={styles.link}>
            Skills
          </a>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <a href="/#experience" className={styles.link}>
            Experience
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
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
      </div>
    </nav>
  );
}
