"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiGit,
  SiGithub,
  SiOpenai,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { title } from "process";
const skillsData = [
  {
    title: "AI & Automation",
    items: [
      { name: "OpenAI GPT Integration", icon: <SiOpenai /> },
      { name: "Dialogflow CX", icon: null },
    ],
  },
  {
    title: "Backend Engineering",
    items: [
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "Django REST API", icon: <SiDjango color="#0C4B33" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },

      //   "Python",
      //   "Django",
      //   "Django REST Framework",
      //   "REST API Design",
      //   "PostgreSQL",
      //   "SQL",
      //   "MongoDB (Beginner)"
    ],
  },
  {
    title: "Frontend Engineering",
    items: [
      { name: "ReactJS", icon: <SiReact color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
      { name: "Responsive Design", icon: null },
      { name: "State Management", icon: null },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <SiGit  color="#61DAFB"/> },
      { name: "GitHub", icon: <SiGithub color="#F7DF1E"  /> },
      

      //   "Git",
      //   "GitHub",
      //   "Twilio API",
      //   "HubSpot CRM API",
      //   "VS Code",
      //   "Android Studio"
    ],
  },
  {
    title: "IDE & Other skills",
    items: [
      { name: "VS Code", icon: null },
      { name: "Android Studio", icon: null },
      { name: "Twilio API", icon: null },
      { name: "Hubspot CRM API", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>

        <div className={styles.grid}>
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.cardTitle}>{category.title}</h3>
              <div className={styles.skillsWrap}>
                {category.items.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    {skill.icon && (
                      <span className={styles.icon}>{skill.icon}</span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
