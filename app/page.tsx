import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Academics from "@/components/academics"

export default function Home() {
  return (
    <main className="relative">
     
      <Hero />
       <About />
       <Skills />
       <Projects />
       <Experience />
       <Academics/>
      <Contact />   
    </main>
  )
}