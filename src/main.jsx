import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Shop from './component/Shop/Shop';
// import App from './App';
import Summer from './component/Summery/Summer';
import Login from './component/Login/Login';
import Order from './component/Oders/Order';
import Inventory from './component/Inventory/Inventory';
import Error from './component/Error/Error';
// import Header from './component/Header/Header';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/order',
        element: <Order></Order>
      },
      {
        path:'/review',
        element: <Summer></Summer>

      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '*',
        element:<Error></Error>
      }
      

    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
