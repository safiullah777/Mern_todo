import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain="safiullah-rafeeq.us.auth0.com"
    clientId="Mdd18bIorAYnR8rzAQFclpcMYT2sl2Dc"
    redirectUri={window.location.origin}
    audience='i am safiullah'
    scope='openid profile email'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
)
