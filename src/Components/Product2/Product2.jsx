// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'material-icons/iconfont/material-icons.css';
import './Product2.css';
import Navbar from '../Navbar/Navbar';
import { NavLink } from "react-router-dom";
const ProductPage = () => {
    return (
        <div className='product-page'>
            <Navbar />
            {/* Product Details Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Product Images */}
                    <div className="col-md-4 single-column-layout">
                        <div className="main-img mb-3">
                            <img src="https://via.placeholder.com/600x600" alt="Main Product" className="img-fluid" />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="col-md-4 single-column-layout -xspace">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Summer fruit</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Sp. red fresh guava</li>
                            </ol>
                        </nav>
                        <h4 className="product-title">Sp. red fresh guava</h4>

                        <div className="mb-3">
                            <strong>Availability:</strong>
                            <span className="text-success">
                                <span className="material-icons" style={{ fontSize: '16px', verticalAlign: 'text-bottom' }}>check_circle</span>
                                12 in stock
                            </span>
                        </div>

                        <div className="product-price">
                            €30,00 <span className="old-price">€44,00</span>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>

                        <div className="mb-3">
                            <strong>Size:</strong>
                            <div className="btn-group" role="group" aria-label="Size options">
                                <button type="button" className="btn btn ">1KG</button>
                                <button type="button" className="btn b">2KG</button>
                                <button type="button" className="btn ">5KG</button>
                            </div>
                        </div>

                        <div className="mb-3">
                            <strong>Quantity:</strong>
                            <div className="input-group quantity-input">
                                <button className="btn btn-outline-secondary rounded-start" type="button">-</button>
                                <input type="text" className="form-control text-center border-start-0 border-end-0" value="3" />
                                <button className="btn btn-outline-secondary rounded-end" type="button">+</button>
                            </div>
                        </div>

                        <div className="mb-3 d-flex gap-5">
                            <button className="btn" style={{
                                border: '2px solid #ff8c00'
                            }}>Add to cart</button>
                            <button className="btn btn-dark"><NavLink to='/checkout' style={{
                                color: 'white'
                            }}>Buy it now</NavLink></button>
                           
                        </div>

                        <div><strong>SKU:</strong> 123456</div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="col-md-4 single-column-layout">
                        <div className="sidebar-info mb-3">
                            <span className="material-icons round">local_shipping</span>
                            <h5 className="fw-bold">DELIVERY INFO</h5>
                            <p>From then, delivery is generally within 2-10 days, depending on your location.</p>
                        </div>
                        <div className="sidebar-info mb-3">
                            <span className="material-icons round">replay_30</span>
                            <h5 className="fw-bold"> 30 DAYS RETURNS</h5>
                            <p>Not the right fit? No worries. We&apos;ll arrange pick up and a full refund within 7 days including the delivery fee.</p>
                        </div>
                        <div className="sidebar-info">
                            <span className="material-icons round">verified</span>
                            <h5 className="fw-bold">10 YEAR WARRANTY</h5>
                            <p>Quality comes first and our products are designed to last.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="">
                <hr />
                <p className="d-flex justify-content-center">
                    <a className="navbar-brand logo" href="#"><span className="material-icons">eco</span> Premium</a>
                </p>
            </footer>
        </div>
    );
}

export default ProductPage;
