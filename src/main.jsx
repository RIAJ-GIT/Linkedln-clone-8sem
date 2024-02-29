import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Register from './components/login-signup/Register.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Login from './components/login-signup/Login.jsx'
const router = createBrowserRouter([
  {path:'/',
element:<Home/>},
  {path:"/log",
element:<Login/>},
{path:"/reg",
element:<Register/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
