import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from './context/adminContext';

ReactDOM.render(
  <BrowserRouter>
      <AdminProvider>
        <App />
      </AdminProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
