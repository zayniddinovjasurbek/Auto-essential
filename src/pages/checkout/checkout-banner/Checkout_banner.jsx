import "./Checkout_banner.css";
import { FaAngleRight } from "react-icons/fa6";
import Facility2 from "../../shop/facility2/Facility2" 

const Checkout_banner = () => {
  return (
    <>
      <div className="checkout_banner">
        <h1>Checkout</h1>
        <h6>
          <a href="/">Home</a> <FaAngleRight /> <a href="">Checkout</a>
        </h6>
      </div>

      <div className="inference-contaner">

      <div className="billing-container">
      <h2>Billing details</h2>
      <form className="billing-form">

      <div class="form-row">
        <div class="form-container">
          <label for="firstInput">First Input</label>
          <input type="text" id="firstInput" />
        </div>
        <div class="form-container">
          <label for="secondInput">Second Input</label>
          <input type="text" id="secondInput" />
        </div>
      </div>

        <div className="form-group">

          <label htmlFor="company-name">Company Name (Optional)</label>
          <input type="text" id="company-name" />

          <label htmlFor="country-region">Country / Region</label>
          <select id="country-region">
            <option>Sri Lanka</option>
          </select>
          
          <label htmlFor="street-address">Street address</label>
          <input type="text" id="street-address" />

          <label htmlFor="Town / City">Town / City</label>
          <input type="text" id="Town-City" />

          <label htmlFor="Province">Province</label>
          <select id="Province">
            <option value="Western Province">Western Province</option>
          </select>

          <label htmlFor=" ZIP code">ZIP code</label>
          <input type="text" id="ZIP-code" />

          <label htmlFor="Phone">Phone</label>
          <input type="text" id="Phone"/>

          <label htmlFor="Email address">Email address</label>
          <input type="text"  id="Email-address"/>

          <input type="text" placeholder="Additional information" className="additional-info"/>

        </div>
      </form>
    </div>
        

        <div className="information-container">
        <div className="order-summary-container">
      <h2 className="summary-title">Product</h2>
      <h2 className="summary-title">Subtotal</h2>
      
      <ul className="order-summary-list">
        <li className="order-item">
          MIRAGE MR-A1172 285/65 × 1
          <span className="price">Rs. 50,000.00</span>
        </li>
        <li className="order-subtotal">
          Subtotal
          <span className="price">Rs. 50,000.00</span>
        </li>
        <li className="order-total">
          Total
          <span className="price total-price">Rs. 50,000.00</span>
        </li>
      </ul>
      
      <div className="payment-method">
        <label>
          <input type="radio" name="payment" defaultChecked />
          Direct Bank Transfer
        </label>
        <p className="payment-info">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        
        <label>
          <input type="radio" name="payment" />
          Cash On Delivery
        </label>
        
        <p className="privacy-policy">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.
        </p>
      </div>
      
      <button className="place-order-button">Place order</button>
    </div>
        </div>
      </div>

    <Facility2 />
    </>
  );
};

export default Checkout_banner;
