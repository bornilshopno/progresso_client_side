import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './AppRoutes.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
