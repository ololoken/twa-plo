import './index.css'
import App from './App'
import WebApp from '@twa-dev/sdk'
import throwExpression from './util/throwExpression';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

WebApp.ready();

createRoot(document.getElementById('root') ?? throwExpression('no root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
