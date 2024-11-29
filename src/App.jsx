/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from './Components/Navbar';

import './App.css'
import Help from './Components/Help';
import Rnav from './Components/Rnav';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rnav />}>
          <Route index element={<Layout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
