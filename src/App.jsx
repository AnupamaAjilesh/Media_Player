import { useState } from 'react'

import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Dashboard from './Pages/Dashboard'
import Header from './Pages/components/Header'
import Footer from './Pages/components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
      <Routes>

        {/* localhost:5173/land */}
        <Route path='/' Component={Landing}></Route>

        {/* localhost:5173/dash*/}
        <Route path='/dash' Component={Dashboard}></Route>

        {/* localhost:5173/his */}
        <Route path='/his' Component={History}></Route>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
