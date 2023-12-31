import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
)
