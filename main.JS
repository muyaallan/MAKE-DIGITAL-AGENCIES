import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  try {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Error rendering the application:', error);
  }
} else {
  console.error('Root element not found');
}
