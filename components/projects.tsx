"use client"

import { motion } from "framer-motion"
import styles from "./Projects.module.css"
import Link from "next/link"

const projects = [
  {
    title: "AwareNow",
    tech: ["OpenAI", "Django", "React"],
    description:
      "AI-powered civic platform transforming council data into structured conversational insights."
  },
  {
    title: "Sports Prediction Platform",
    tech: ["React", "Django REST", "PostgreSQL"],
    description:
      "Real-time sports analytics system with scalable backend architecture."
  },
  {
    title: "Visa Advisory Chatbot",
    tech: ["Django REST", "Twilio", "React"],
    description:
      "Multi-channel automation system for dynamic visa eligibility scoring."
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>

        <div className={styles.previewGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.previewCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <Link href="/projects" className={styles.projectLink}>
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <Link href="/projects" className={styles.viewAllBtn}>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}