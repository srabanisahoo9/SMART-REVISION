import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing the main App component

// Rendering the App component inside the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
