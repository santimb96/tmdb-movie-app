import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AuthPage from '../pages/AuthPage/AuthPage'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        {/* <Route path="/search/:id" element={<Film />} /> */}
        {/* <Route path="/favourites" element={<Favourites />} /> */}
      </Routes>
    </>
  )
}

export default Router
