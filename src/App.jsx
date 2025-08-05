import React from 'react'
import { Route, Routes } from 'react-router'
import { Landing } from './Layout/Index'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App