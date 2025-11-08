import ContextProvider from './context/context.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-zvuq541m3m270sfa.us.auth0.com"
    clientId="ZuFT9Z1nVsqipVeWuNBLWtuclMa1YILW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <ContextProvider>
    <App />
  </ContextProvider>,
  </Auth0Provider>
)
