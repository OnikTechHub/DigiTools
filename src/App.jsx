import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'

function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    </div>
  )
}

export default App
