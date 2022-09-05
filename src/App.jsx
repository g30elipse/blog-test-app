import React, { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './assets/components/HomePage/Home';
import FeaturedBlogs from './assets/components/FeaturedBlogs';
import LatestBlogs from './assets/components/LatestBlogs';
import Error from './assets/components/Error';
import BlockDetails from './assets/components/blockDetails/BlockDetails';
import Blogs from './assets/components/HomePage/Blogs';
import Bookmarks from './assets/components/HomePage/Bookmarks';












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
