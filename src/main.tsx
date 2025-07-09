import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import App from './App'
import './index.css'

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class">
        <App />
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
