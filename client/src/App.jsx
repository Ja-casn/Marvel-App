import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homeland } from './components/Home/homeland.jsx'

export default function App() {
  return (
    <div className='appMain'>
      <Routes>
        <Route exact path='/marv1/home' element={<Homeland  />} />
      </Routes>
    </div>
  )
}
