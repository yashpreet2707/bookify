import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';

// pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login'
import ListingPage from './pages/List';
import HomePage from './pages/Home';
import BookDetailPage from './pages/Detail';

// components
import MyNavBar from './components/Navbar';


function App() {

  return (
    <div>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookID" element={<BookDetailPage />} />
      </Routes >
    </div>
  )
}

export default App
