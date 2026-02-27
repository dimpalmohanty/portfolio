"use client"

import { motion } from "framer-motion"
import styles from "./About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>
              Engineering AI Systems That Scale
            </h2>
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I engineer intelligent systems at the intersection of <span className={styles.highlight}>AI, backend architecture, and product thinking</span>.
            </p>

            <p>
             From scalable <span className={styles.highlight}>Django</span> APIs to real-time automation workflows and AI-powered conversational platforms, 
             I build end-to-end systems that process data intelligently while delivering seamless, responsive user experiences through modern <span className={styles.highlight}> React</span> interfaces.
            </p>

            <p>
              At SynapseIndia, I contributed to production-grade platforms including civic AI solutions, predictive analytics systems, and multi-channel chatbot architectures integrated with Twilio and HubSpot.
            </p>

            <p>
              My work emphasizes clean architecture, scalable infrastructure, and intuitive UI/UX — transforming complex technical challenges into reliable, user-centric digital products.
            </p>
            <p className={styles.signature}>
  I believe great software isn’t just built — it’s architected with intention.
</p>

          </motion.div>

        </div>
      </div>
    </section>
  )
}