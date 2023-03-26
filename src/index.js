import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UtcConverter from './Components/UtcConverter/UtcConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UtcConverter />
  </React.StrictMode>
);
