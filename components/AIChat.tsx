"use client"

import { useState, useRef, useEffect } from "react"
import styles from "./AIChat.module.css"

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([])
  const [loading, setLoading] = useState(false)

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: { role: "user"; content: string } = {
  role: "user",
  content: input,
}
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()

  const aiMessage: { role: "assistant"; content: string } = {
  role: "assistant",
  content: data.reply,
}

    setMessages((prev) => [...prev, aiMessage])
    setLoading(false)
  }

  return (
    <>
      <div className={styles.fab} onClick={() => setOpen(!open)}>
        AI
      </div>

      {open && (
        <div className={styles.chatBox}>
          <div className={styles.header}>Ask about Dimpal</div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user"
                    ? styles.userBubble
                    : styles.aiBubble
                }
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className={styles.aiBubble}>Thinking...</div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Ask about skills, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}