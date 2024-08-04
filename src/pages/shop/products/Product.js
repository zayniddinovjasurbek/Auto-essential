import React from 'react';
import { BrowserRouter as Router, Route, Link } from'react-router-dom';
import product1 from './Trenton modular sofa_3 1 (1).png'
import product2 from './Trenton modular sofa_3 1 (2).png'
import product3 from './Trenton modular sofa_3 1 (3).png'
import product4 from './Trenton modular sofa_3 1.png'

import product5 from './Trenton modular sofa_3 1 (4).png'
import product6 from './Trenton modular sofa_3 1 (5).png'
import product7 from './Trenton modular sofa_3 1 (6).png'
import product8 from './Trenton modular sofa_3 1 (7).png'

import product9 from './Trenton modular sofa_3 1 (8).png'
import product10 from './Trenton modular sofa_3 1 (9).png'
import product11 from './Trenton modular sofa_3 1 (10).png'
import product12 from './Trenton modular sofa_3 1 (11).png'

import product13 from './Trenton modular sofa_3 1 (12).png'
import product14 from './Trenton modular sofa_3 1 (13).png'
import product15 from './Trenton modular sofa_3 1 (14).png'
import product16 from './Trenton modular sofa_3 1 (15).png'




import './product.css'


const Product = () => {
  return (
    <div className="shop-products">

<div className='product 1-4'>
            <div>
                <img src={product1} alt="product1" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product2} alt="products2" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product3} alt="product3" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product4} alt="product4" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
        </div>

        
        <div className='product 4-8'>
            <div>
                <img src={product5} alt="product5"  />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
             </div>
            <div>
                <img src={product6} alt="product6" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product7} alt="product7" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product8} alt="product8" />
                <p>Shell Engile Oil <br />
                Shope: Oil house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
        </div>    

        <div className='product 8-12'>
            <Link to='/single' className='single-products-tire'>
                <img src={product9} alt="product9"  />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </Link>

            <Link to='/single' className='single-products-tire' >
                <img src={product10} alt="product10" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </Link>
            <Link to='/single' className='single-products-tire'>
                <img src={product11} alt="product11" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </Link>
            <Link to='/single' className='single-products-tire'>
                <img src={product12} alt="product12" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </Link>
        </div>

        <div className='product 12-16'>
            <div>
                <img src={product13} alt="product13"  />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product14} alt="product14" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product15} alt="product15" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
            <div>
                <img src={product16} alt="product16" />
                <p>Tire <br />
                Shope: Tire house</p>
                <h2>Rs. 25,000.00</h2>
            </div>
        </div>

    </div>
  ) 
}
export default Product;
