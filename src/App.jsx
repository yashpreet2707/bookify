import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';

// pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes >
  )
}

export default App
