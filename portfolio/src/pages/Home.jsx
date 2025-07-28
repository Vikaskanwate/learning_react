import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = ()=>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            <StarBackground/>
            <Navbar/>
            <main>
                <HeroSection/>
                <AboutSection/>
            </main>
        </div>
    )
}