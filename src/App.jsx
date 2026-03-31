import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'
import Footer from './component/Footer/Footer'
import TransformSection from './component/TransformSection/TransformSection'
import StepsSection from './component/StepsSection/StepsSection'
import ProductList from "./component/ProductList/ProductList"
import Card from './component/ProductList/Card'
import DigitalTools from './component/DigitalTools/DigitalTools'

const getProductList = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const productListPromise = getProductList()
function App() {
  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCarts] = useState([])

  console.log(carts)

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <DigitalTools></DigitalTools>
      <div className='text-center space-y-3 bg-gray-50  md:px-12'>
        <div className="tabs tabs-box inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 shadow-sm ">
          <input type="radio" name="my_tabs_1" className="tab rounded-full px-6 py-2.5 text-sm font-semibold checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white" aria-label="Products"  onClick={()=> setActiveTab("Products")} defaultChecked/>
          <input type="radio" name="my_tabs_1" className="tab rounded-full px-6 py-2.5 text-sm font-semibold checked:bg-linear-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white" aria-label="Cart (2)" onClick={()=> setActiveTab("Cart")} />
        </div>
      </div>
      {activeTab === "Products" && <ProductList productListPromise={productListPromise} carts={carts} setCarts={setCarts}></ProductList>}

      {activeTab === "Cart" && <Card carts={carts}></Card>}
      <StepsSection></StepsSection>
      <TransformSection></TransformSection>
      <Footer></Footer>
    </div>
  )
}

export default App
