import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import CreateProjectContainer from './component/CreateProjectContainer';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/dash/Dashboard'
import LoginPage from './LoginPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listening from './component/Listening';
import GraphPage from './component/GraphPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "createproject",
        element: <CreateProjectContainer />,
      },
      {
        path: "list",
        element: <Listening />,
      },
      {
        path: "graph",
        element: <GraphPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
  

  </React.StrictMode>
);

reportWebVitals();




