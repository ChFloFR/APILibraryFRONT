import { useState } from 'react'
import './App.css'
import * as yup from 'yup';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './app/components/layouts/Navbar';
import Routes from './app/routes/Routes';
import { useEffect } from "react";

import Footer from './app/components/layouts/Footer';
import apiBackEnd from "./app/api/backend/api.Backend.js";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar/>
          <Routes />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
