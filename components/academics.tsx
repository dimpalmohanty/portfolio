"use client"

import { motion } from "framer-motion"
import styles from "./Academics.module.css"

const academics = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "ITER - Siksha 'O' Anusandhan, Bhubaneswar",
    date: "2022 – 2024",
    coursework:
      "Relevant Coursework: Cryptography, Cybersecurity, Internet of Things (IoT). Focused on AI systems, backend architecture, and scalable application design.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Regional College Of Management, Bhubaneswar",
    date: "2019 – 2022",
    coursework:
      "Built strong foundation in programming, databases, and system design. Completed multiple frontend and backend academic projects.",
  },
]

export default function Academics() {
  return (
    <section id="academics" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Academic Background
        </motion.h2>

        <div className={styles.grid}>
          {academics.map((item, index) => (
            <motion.div
              key={item.degree}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.degree}>{item.degree}</div>
              <div className={styles.institution}>{item.institution}</div>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.coursework}>{item.coursework}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}