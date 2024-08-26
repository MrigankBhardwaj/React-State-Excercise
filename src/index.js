import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SimpleCounter from './components/SimpleCounter';
import Navbar from './components/Navbar';

const root = document.getElementById('root');
const createRot = ReactDOM.createRoot(root);

function MainFile() {
  const router = createBrowserRouter([
    {
      path: "/simple-counter",
      element: <SimpleCounter />
    },
    {
      path: "/",
      element: <App />
    }
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )

}

createRot.render(<MainFile />)
