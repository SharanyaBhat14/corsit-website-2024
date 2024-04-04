import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
// import Team from "./Components/Team";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Alumni from "./Components/Alumni";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <Outlet /> <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/team",
      //   element: <Team />,
      // },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log());
