import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";



let appRouter = createBrowserRouter([

{path : "" , element : <Layout/> , children : [

  {index : true, element : <Home/>},
  {path :"home", element : <Home/>},
  {path: "about", element : <About/>},
  {path: "protfolio", element : <Portfolio/>},
  {path: "contact", element : <Contact/>},
  {path: "*", element : <Error/>},
] }
])




function App() {
  return <>
      
    
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  
}

export default App;
