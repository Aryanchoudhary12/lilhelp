import { useState } from "react";
import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
