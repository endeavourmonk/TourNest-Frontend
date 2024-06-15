import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import LandingPage from "./components/Landing/LandingPage.tsx";
import About from "./components/About/AboutPage.tsx";
import Auth from "./components/Auth/Auth.tsx";
import ErrorPage from "./components/Error/ErrorPage.tsx";
import ToursPage from "./components/Tours/ToursPage.tsx";
import TourDescription from "./components/Tours/TourDescription.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // renders the Landing component as the default child of "/"
        element: <LandingPage />,
      },
      {
        path: "tours",
        element: <ToursPage />,
        children: [
          {
            path: ":tourName", // tourName as param
            element: <TourDescription />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
