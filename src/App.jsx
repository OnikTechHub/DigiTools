import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'
import Footer from './component/Footer/Footer'
import TransformSection from './component/TransformSection/TransformSection'
import PricingSection from './component/PricingSection/PricingSection'
import StepsSection from './component/StepsSection/StepsSection'

function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <TransformSection></TransformSection>
    <Footer></Footer>
    </div>
  )
}

export default App
