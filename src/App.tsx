import { LanguageProvider } from './i18n/LanguageProvider'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Automation } from './components/Automation'
import { Projects } from './components/Projects'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative" role="main">
          <section id="hero" aria-label="Hero">
            <Hero />
          </section>
          <Stats />
          <Services />
          <Automation />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
