"use client"

import { motion } from "framer-motion"
import styles from "./Projects.module.css"
import Image from "next/image"

const projects = [
  {
    title: "AwareNow",
    description:
      "AI-powered civic engagement platform that transforms city council and school board meetings into structured summaries using OpenAI GPT.",
    image: "/projects/aware.png",
    tech: ["Django", "React", "PostgreSQL", "OpenAI", "Celery"],
    live: "https://awarenow.ai/",
  
  },
  {
    title: "Visa Advisory Chatbot System",
    description:
      "Multi-channel visa advisory platform featuring eligibility scoring engine, CRM integration, and automated WhatsApp workflows.",
    image: "/projects/visa.png",
    tech: ["Django REST", "React", "Twilio API", "HubSpot API", "PostgreSQL","META developer API"],
    live: "http://20.40.44.35:5174/",
  
  },
//   {
//     title: "Sports Prediction Platform",
//     description:
//       "Real-time sports analytics system with REST APIs, structured prediction logic, and PostgreSQL-powered match data modeling.",
//     image: "/projects/sports.jpg",
//     tech: ["Django REST", "React", "PostgreSQL"],
//     live: "#",
//   
//   },
  {
    title: "Namaste Westside",
    description:
      "AI-enabled tourism portal with dynamic itinerary suggestions and Dialogflow CX chatbot for intelligent user interaction.",
    image: "/projects/namaste.png",
    tech: ["React", "Dialogflow CX", "Django", "REST API","Open AI Integration","Google places API","Google search API","Twilio API"],
    live: "http://20.197.2.65:8181/",
  },
  {
    title: "StemCity CMS",
    description:
      "Backend-driven CMS system with analytics dashboards, user activity logging, and relational schema design.",
    image: "/projects/stemcity.png",
    tech: ["Django", "React", "PostgreSQL"],
    live: "https://www.stemcityusa.com/",
    
  },
//   {
//     title: "LegalEase (Android App)",
//     description:
//       "Android-based legal assistance app featuring IPC lookup engine, lawyer discovery module, and feedback system.",
//     image: "/projects/legalease.jpg",
//     tech: ["Java", "Android Studio"],
//     live: "#",
//   
//   },
  {
    title: "Food Delivery Website",
    description:
      "Responsive frontend food ordering interface built with interactive UI components and modern web design principles, built in 2021.",
    image: "/projects/food.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://69a1e89598f241305290685b--monumental-creponne-bb1084.netlify.app/",
    
  },
]

export default function ProjectsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* <span className={styles.label}>ALL WORK</span> */}
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                  {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}