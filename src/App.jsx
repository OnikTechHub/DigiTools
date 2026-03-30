import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'
import Footer from './component/Footer/Footer'
import TransformSection from './component/TransformSection/TransformSection'
import StepsSection from './component/StepsSection/StepsSection'
import ProductList from "./component/ProductList/ProductList"

const getProductList = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const productListPromise = getProductList()
function App() {
 

  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <ProductList productListPromise={productListPromise}></ProductList>
    <StepsSection></StepsSection>
    <TransformSection></TransformSection>
    <Footer></Footer>
    </div>
  )
}

export default App
