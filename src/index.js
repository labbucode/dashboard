import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateProjectContainer from './component/CreateProjectContainer';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/dash/Dashboard'
import LoginPage from './LoginPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listening from './component/Listening';
import GraphImage from './component/GraphImage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element:<Dashboard />,
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
        element: <GraphImage />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
