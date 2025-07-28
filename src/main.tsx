import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { ThemeProvider } from './Components/Context/Context.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
