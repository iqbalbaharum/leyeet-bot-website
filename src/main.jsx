import '@styles/custom.css';
import '@styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById('root')).render(
  <ParallaxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ParallaxProvider>
);
