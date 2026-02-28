"use client"

import { motion } from "framer-motion"
import styles from "./Contact.module.css"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    setStatus("sending")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!
      )

      setStatus("success")
      form.reset()

    } catch (error) {
      setStatus("error")
    }
  }

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
          Open to AI engineering, backend, and full-stack opportunities.
          If you're building something ambitious — let’s connect.
        </motion.p>

        <div className={styles.contentGrid}>

          {/* LEFT — FORM */}
          <div className={styles.formBlock}>
            <form className={styles.form} onSubmit={handleSubmit}>

              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
              />

              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                required
              />

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent ✓"
                  : status === "error"
                  ? "Try Again"
                  : "Send Message →"}
              </button>

              {status === "success" && (
                <p className={styles.successText}>
                  Your message has been sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className={styles.errorText}>
                  Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>

          {/* RIGHT — ACCOUNTS */}
          <div className={styles.accountsBlock}>

            <a
              href="https://www.linkedin.com/in/dimpal-mohanty-0061a921b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accountCard}
            >
              <SiLinkedin className={styles.icon} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/dimpalmohanty"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accountCard}
            >
              <SiGithub className={styles.icon} />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:dimpalmohanty44@gmail.com"
              className={styles.accountCard}
            >
              <HiOutlineMail className={styles.icon} />
              <span>Email</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}