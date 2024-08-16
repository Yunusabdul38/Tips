import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as tipsdata } from "./page/Home.jsx";
import Error from "./page/Error.jsx";
import AddTip, { action as formAction } from "./page/AddTip.jsx";
import Filter, { action as filterAction } from "./page/Filter.jsx";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id:"root",
    loader:tipsdata,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/add-tip",
        element: <AddTip/>,
        action:formAction
      },
      {
        path: "/filter",
        element: <Filter/>,
        action:filterAction
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)

