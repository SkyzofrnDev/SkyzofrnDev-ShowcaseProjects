import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './Layout/MainLayout/MainLayout'

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