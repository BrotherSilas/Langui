// Import React library
import React from 'react';

// Import ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';

// Import global styles
import '../index.css';

// Import the main App component
import App from './App.js';

// Create a root React element in the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React's StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);