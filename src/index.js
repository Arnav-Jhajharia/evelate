import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Setup from './components/setup/Checkout'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Catalog from './components/catalog/courses'
import Random from './components/random/random'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useRouteError,
  Link,
  redirect,
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
    path: "/catalog",
    element: (<Catalog />),
    errorElement: <ErrorBoundary />
  }
  ,
  {
    path: "/",
    element: (<Random />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('prev')
      prev = !!prev;
      if(prev) return redirect('/catalog')
      
      return null;
    },
  }
  ,
  {
    path: "/setup",
    element: (<Setup />),
    errorElement: <ErrorBoundary />,
    loader: async () => {
      let prev = localStorage.getItem('prev')
      prev = !!prev;
      if(prev) return redirect('/catalog')
      
      return null;
    },
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