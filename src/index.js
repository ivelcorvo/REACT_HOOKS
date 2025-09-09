import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// #### HOOKS ####
  import { TemaContextProvider } from "./context/TemaContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaContextProvider>
      <App />
    </TemaContextProvider>
  </React.StrictMode>
);

reportWebVitals();
