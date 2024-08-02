import React from 'react'


import Banner from './banner/Banner'
import Filter from './filter/Filter'
import Products from './products/Product'
import Facility from './facility/Facility'

const Shop = () => {  
  return (
    <div>
    <Banner />
    <Filter/>
    <Products />
    <Facility />
    </div>
  )
}

export default Shop
