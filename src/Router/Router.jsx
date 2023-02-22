import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search/:id" element={<Film />} /> */}
        {/* <Route path="/favourites" element={<Favourites />} /> */}
      </Routes>
    </>
  )
}

export default Router
