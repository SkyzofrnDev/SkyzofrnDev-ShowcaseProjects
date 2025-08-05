import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout/MainLayout'
import "./assets/fonts/font.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </>
  )
}

export default App