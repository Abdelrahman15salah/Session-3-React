// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Electrons from "./Components/Electrons/Electrons";
import Home from "./Components/Home/Home";
// import NavBar from "./Components/NavBar/NavBar";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TV from "./Components/Electrons/Contents/TV";
import Car from "./Components/Electrons/Contents/Car";
import Phone from "./Components/Electrons/Contents/Phone";
import Childlayout from "./Components/Electrons/Contents/Childlayout";
import NotFound from "./Components/NotFound";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      {
        path: "Electrons",
        element: <Electrons />,
      },
      {
        path: "Electrons",
        element: <Childlayout />,
        children: [
          { path: "TV", element: <TV /> },
          { path: "Car", element: <Car /> },
          { path: "Phone", element: <Phone /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={x} />
    </>
  );
}

export default App;
