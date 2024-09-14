import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as tipsdata } from "./page/Home.js";
import Error from "./page/Error.js";
import AddTip, { action as formAction } from "./page/AddTip.js";
import Filter from "./page/Filter.js";
import App from './App.js'
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
      },
      {
        path:"/:id",
        element:<h1>hello world</h1>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
)

