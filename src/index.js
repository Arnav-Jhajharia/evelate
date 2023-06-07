import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Catalog from './components/catalog/courses'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useRouteError,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/courses/:course",
    element: (
      <App />
    ),
    errorElement:<ErrorBoundary />

  },
  {
    path: "ca",
    element: <div>About</div>,
  }
  ,
  {
    path: "/",
    element: (<Catalog />),
    errorElement: <ErrorBoundary />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>course not</div>;
}