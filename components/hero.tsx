"use client"

import { motion } from "framer-motion"
import styles from "./Hero.module.css"
import Image from "next/image"

export default function Hero() {
     const name = "Dimpal Mohanty"
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.textBlock}>
          {/* <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heading}
          >
            AI Full Stack Engineer Building{" "}
            <span className={styles.highlight}>
             Scalable Intelligent Systems
            </span>
          </motion.h1> */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className={styles.headingWrapper}
>
 

<h1 className={styles.name}>
  {name.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      whileHover={{
        color: "#22d3ee",
        scale: 1.05,
      }}
      className={styles.letter}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</h1>

  <h2 className={styles.role}>
    AI Full-Stack Engineer
  </h2>

  <h3 className={styles.tagline}>
    Building <span className={styles.highlight}>Scalable Intelligent Systems</span>
  </h3>
</motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className={styles.subtext}
          >
            I design and develop AI-powered applications using Python,
            Django, React, and modern ML workflows — focused on performance,
            automation, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={styles.buttonGroup}
          >
            <a href="/projects" className={styles.primaryBtn}>
              View Projects
            </a>

            <a href="/DimpalMohantyResumeMarch.pdf" className={styles.secondaryBtn} download>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.imageWrapper}
        >
          <div className={styles.glowBlob}></div>

          <div className={styles.float}>
            <Image
              src="/profile.jpeg"
              alt="Dimpal Mohanty"
              width={320}
              height={400}
              className={styles.profileImage}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}