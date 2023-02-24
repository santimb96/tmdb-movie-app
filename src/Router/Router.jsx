import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Favorites from '../pages/Favorites/Favorites'
import AuthPage from '../pages/AuthPage/AuthPage'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/search/:id" element={<Film />} /> */}
      </Routes>
    </>
  )
}

export default Router
