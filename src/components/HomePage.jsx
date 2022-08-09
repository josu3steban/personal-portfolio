import { AboutMe, Contact, Curriculum, Projects, Skills } from "./"
import { Header } from "./ui/Header"


export const HomePage = () => {
  return (
    <div className="">

        <Header />

        <AboutMe />

        <Skills />

        <Projects />

        <Curriculum />

        <Contact />
        
    </div>
  )
}
