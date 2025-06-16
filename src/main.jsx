import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './AppRoutes.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
          </QueryClientProvider>        
        <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
