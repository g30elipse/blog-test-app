import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import FeaturedBlogs from './components/FeaturedBlogs';
import LatestBlogs from './components/LatestBlogs';
import Error from './components/Error';
import BlockDetails from './pages/blockDetails/BlockDetails';
import Blogs from './pages/HomePage/Blogs';
import Bookmarks from './pages/HomePage/Bookmarks';












function App() {


  return (

    <div >

      <NavBar />
      {/* <HomePage /> */}




      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bloggg" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path={`blogs/details`} element={<BlockDetails />} />


        <Route path="/error" element={<Error />} />

      </Routes>

    </div >
  )
}

export default App
