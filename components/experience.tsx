"use client"

import { motion } from "framer-motion"
import styles from "./Experience.module.css"

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "SynapseIndia Outsourcing Pvt. Ltd.",
    date: "Aug 2025 – Dec 2025",
    bullets: [
      "Developed scalable full-stack applications using Django and React.",
      "Designed REST APIs for AI-driven automation systems.",
      "Optimized PostgreSQL database performance and architecture.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "SynapseIndia Outsourcing Pvt. Ltd.",
    date: "Jan 2025 – Jul 2025",
    bullets: [
      "Built AI chatbot systems with OpenAI and Dialogflow.",
      "Implemented eligibility scoring engine with Django REST.",
      "Integrated Twilio and HubSpot APIs for automation workflows.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Professional Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className={`${styles.item} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.node}></div>

              <div className={styles.card}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.date}>{exp.date}</div>

                <ul className={styles.bullets}>
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}