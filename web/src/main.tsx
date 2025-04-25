// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Product from './pages/Product/index.tsx';
// import Employee from './pages/Employee/index.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/hello",
    element: <div>Hello World</div>,
  },
  // {
  //   path: "/",
  //   element: <App></App>,
  // },
  {
    path: "/product",
    element: <Product></Product>,
  }, {
    path: "/employee",
    // element: <Employee></Employee>,
  }
]);

const root = document.getElementById('root')
createRoot(root!).render(
  <RouterProvider router={router} />
);
