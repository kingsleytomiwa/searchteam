import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-xhcnwpst.us.auth0.com'
      clientId='9x20mbxZPEmPhEKg7tGF6eewvdlnhuol'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
)
