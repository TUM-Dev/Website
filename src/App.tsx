import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import DataProtectionPage from '@/pages/DataProtectionPage'
import ImprintPage from '@/pages/ImprintPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data_protection" element={<DataProtectionPage />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
