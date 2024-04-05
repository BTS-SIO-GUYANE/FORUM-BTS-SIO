import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EspaceEtudiant from './pages/EspaceEtudiant';
import Annonces from './pages/Annonces';
import Stages from './pages/Stages';
import AideEtSupport from './pages/AideEtSupport';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <App/>,
    },
    {
      path: "EspaceEtudiant",
      element: <EspaceEtudiant/>
    },
    {
    path: "Annonces",
    element: <Annonces/>
   },
   {
    path: "Stages",
    element: <Stages/>
   },
   {
    path: "AideEtSupport",
    element: <AideEtSupport/>
   },
   {
    path: "Contact",
    element: <Contact/>
   },
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



