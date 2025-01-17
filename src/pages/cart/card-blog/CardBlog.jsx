import React from 'react'
import { Link } from "react-router-dom";
import ballon from './Asgaard sofa 4.png'
import { FaTrash } from "react-icons/fa6";
import './cardBlog.css'
import Facility2 from '../../shop/facility2/Facility2';

const CardBlog = () => {
  return (
    <div>
    <section className="cart-table">
      <div className="cart-table__container">
        <table>
          <thead>
            <tr>
              <th>
                <span>Image</span>
              </th>
              <th>
                <span>Product</span>
              </th>
              <th>
                <span>Price</span>
              </th>
              <th>
                <span>Quantity</span>
              </th>
              <th>
                <span>Subtotal</span>
              </th>
              <th>
                <span>Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="image">
                <div className="img">
                  <img src={ballon} alt="Balloon" />
                </div>
              </td>
              <td className="name">
                <span>MIRAGE MR-AT172 285/65</span>
              </td>
              <td className="price">
                <span>Rs. 50,000.00</span>
              </td>
              <td className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td className="subtotal">
                <span>Rs. 50,000.00</span>
              </td>
              <td className="delete">
                <button>
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <p className="subtotal">
          <span>Subtotal</span> <span>Rs. 50,000.00</span>
        </p>
        <p className="total">
          <span>Total</span> <span>Rs. 50,000.00</span>
        </p>
        <Link to="/checkout" className="button-link">
            Check Out
        </Link>
      </div>
    </section>

    <Facility2 />
    </div>
  );
};


export default CardBlog
