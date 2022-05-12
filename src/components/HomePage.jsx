import { AboutMe } from "./AboutMe"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Header } from "./ui/Header"


export const HomePage = () => {
  return (
    <div className="">

        <Header />

        <AboutMe />

        <Skills />

        <Projects />
        
    </div>
  )
}
