import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import Home from './pages/Home'
import LegalPage from './pages/LegalPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HowWeWorkPage from './pages/HowWeWorkPage'
import NotFound from './pages/NotFound'

const LEGAL_SLUGS = [
  'privacy-policy',
  'terms-of-service',
  'cookie-policy',
  'data-deletion',
  'disclaimer',
  'accessibility',
  'acceptable-use',
  'refund-policy',
  'ai-disclaimer',
]

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          {LEGAL_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LegalPage />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
