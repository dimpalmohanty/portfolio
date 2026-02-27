"use client"

import { motion } from "framer-motion"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Build Intelligent Systems Together
        </motion.h2>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m open to AI engineering, backend, and full-stack opportunities.
          If you're building something ambitious and need scalable,
          production-ready systems — let’s connect.
        </motion.p>

        <motion.a
          href="mailto:dimpalmohanty44@gmail.com"
          className={styles.emailButton}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.a>

        <div className={styles.linkRow}>
          <a
            href="https://www.linkedin.com/in/dimpal-mohanty-0061a921b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dimpalmohanty"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}