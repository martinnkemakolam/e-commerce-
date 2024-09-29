// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import Navbar from '../Navbar/Navbar';
const CheckoutPage = () => {
  return (
    <div>
     <Navbar/>
      <div className="container">
        <div className="row">
          {/* Contact and Delivery Form Section */}
          <div className="col-md-7">
            <div className="form-section">
              <h5>Contact</h5>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email or mobile phone number" />
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="newsletter" />
                <label className="form-check-label" htmlFor="newsletter">Email me with news and offers</label>
              </div>

              <h5>Delivery</h5>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country/Region</label>
                <select className="form-select" id="country">
                  <option selected>Germany</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="First name (optional)" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Apartment, suite, etc. (optional)" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Postal code" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="City" />
                </div>
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
              </div>

              <h5>Shipping method</h5>
              <div className="mb-4">
                <input type="text" className="form-control" placeholder="Enter your shipping address to view available shipping methods." disabled />
              </div>

              <h5>Payment</h5>
              <div className="mb-3">
                <div className="input-group">
                  <div className="input-group-text"><i className="material-icons">credit_card</i></div>
                  <input type="text" className="form-control" placeholder="Card number" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Expiration date (MM / YY)" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Security code" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name on card" />
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="billing-address" />
                <label className="form-check-label" htmlFor="billing-address">Use shipping address as billing address</label>
              </div>
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="cod" />
                <label className="form-check-label" htmlFor="cod">Cash on Delivery (COD)</label>
              </div>
              <button className="btn btn-primary btn-lg w-100">Pay now</button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="col-md-5">
            <div className="order-summary">
              <h5 className="mb-3">Order Summary</h5>
              <img src="https://via.placeholder.com/100x100" alt="Product Image" className="img-fluid" />
              <h6>Fresh & healthy food</h6>
              <p>5kg</p>
              <p className="fw-bold">€14.00</p>
              <div className="discount-input">
                <input type="text" className="form-control" placeholder="Discount code" />
                <button className="btn btn-secondary w-100 mt-2">Apply</button>
              </div>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>€14.00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>Enter shipping address</span>
                </li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>EUR €14.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-5">
        <hr />
        <p className="d-flex justify-content-center">
          <a className="navbar-brand logo" href="#"><span className="material-icons">eco</span> Premium</a>
        </p>
      </footer>
    </div>
  );
};

export default CheckoutPage;
