import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BillSplitterProvider from './context/BillContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BillSplitterProvider>
      <App />
    </BillSplitterProvider>
  </React.StrictMode>
);
