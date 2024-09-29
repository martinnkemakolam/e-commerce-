// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import Slider from "../Slider/Slider";

const Product = () => {
  return (
    <div>
      <Navbar />
      <Slider />

        
        <section className="container trending-products mb-5">
          <h2 className="text-center mt-5 mb-4"></h2>
          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center border-0">
                <img src="https://via.placeholder.com/150" alt="Orange juice natural" />
                <div className="card-body">
                  <h5 className="card-title">Orange Juice Natural</h5>
                  <p className="card-text">€66,00</p>
                  <p className="text-warning mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card text-center border-0">
                <img src="https://via.placeholder.com/150" alt="Healthy papaya 100% organic" />
                <div className="card-body">
                  <h5 className="card-title">Healthy Papaya 100% Organic</h5>
                  <p className="card-text">€20,00</p>
                  <p className="text-warning mb-0">★★★★★</p>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for the other products */}
          </div>
        </section>

        <footer className="mt-5">
          <hr />
          <p className="d-flex justify-content-center">
            <a className="navbar-brand logo" href="#"><span className="material-icons">eco</span> Premium</a>
          </p>
        </footer>
      </div>
  );
};

export default Product;
