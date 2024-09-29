// import React from 'react'
import sliderImage from '../../assets/DALL·E Aug 28 Hero Background.webp';
// import sliderImageTwo from '../../assets/Background Remover Aug 28.png';

const Slider = () => {
    const Hero =()=>(
        <div className="row">
                  <div className="col-md-9 d-none d-md-block w-100">
                      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                              <div className="carousel-item active w-100">
                                  <img
                                      style={{ height: '500px' }}
                                      src={sliderImage}
                                      className="d-block w-100"
                                      alt="Fruit Basket"
                                  />
                                  <div className="carousel-caption">
                                      <h2>Enjoying grocery</h2>
                                      <p>First 10 sales 10% offer</p>
                                      <a href="/pro" className="btn btn-warning">
                                          Shop now
                                      </a>
                                  </div>
                              </div>
                              {/* Add more carousel items as needed */}
                          </div>
                      </div>
                  </div>
              </div>
    )
    const Benefits=()=>(
        <div className="row mt-4">
                  <div className="col-6 col-md-2 col-md-3 text-center">
                      <span className="material-icons feature-icon">local_shipping</span>
                      <p>Free shipping</p>
                  </div>
                  <div className="col-6 col-md-2 col-md-3 text-center">
                      <span className="material-icons feature-icon">card_giftcard</span>
                      <p>Gift voucher</p>
                  </div>
                  <div className="col-6 col-md-2 col-md-3 text-center">
                      <span className="material-icons feature-icon">monetization_on</span>
                      <p>Money back</p>
                  </div>
                  <div className="col-6 col-md-2 col-md-3 text-center">
                      <span className="material-icons feature-icon">lock</span>
                      <p>Safe payment</p>
                  </div>
              </div>
    )
  return (
      <div>
          <div className="container mt-4">
            <Hero/>
            <Benefits/>
              {/* <h3 className="mt-5">Shop by category</h3>
              <div className="row">
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Organic dryfruit" />
                      <p>Organic dryfruit</p>
                  </div>
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Green seafood" />
                      <p>Green seafood</p>
                  </div>
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Organic juice" />
                      <p>Organic juice</p>
                  </div>
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Summer fruit" />
                      <p>Summer fruit</p>
                  </div>
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Fresh vegetable" />
                      <p>Fresh vegetable</p>
                  </div>
                  <div className="col-6 col-md-2 category-item text-center mb-4">
                      <img src={sliderImageTwo} alt="Fresh meat" />
                      <p>Fresh meat</p>
                  </div>
              </div> */}
          </div>
    </div>
  )
}

export default Slider