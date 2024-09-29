/* eslint-disable react/prop-types */
// import React from 'react'
import Navbar from '../Navbar/Navbar';
import Featured from './featured';
import Hero from './hero';
// import Slider from '../Slider/Slider';
// import sliderImageTwo from '../../assets/Beans sorting process.webp';
// import { useEffect, useState } from 'react';

const Home = () => {
    // const convertPrice=(price)=>{
    //     const FinalPrice = String(price)
    //     return FinalPrice + '.00'
    // }
    // const FeaturedProduct=({price, name, src})=>(
    //     <div className="col-6 col-md-4 col-lg-2">
    //         <div className="card text-center border-0">
    //             <img src={src || sliderImageTwo} className="card-img-top" alt="Vegetable tomato" />
    //             <div className="card-body">
    //                 <h5 className="card-title">{name}</h5>
    //                 <p className="card-text">€{convertPrice(price)}</p>
    //             </div>
    //         </div>
    //     </div>
    // )
    // const Featured=()=>{
    //     const [data, setData] = useState([])
    //     const [data1, data2] = data
    //     useEffect(()=>{
    //         //Fetch data and use
    //         const FetchedData = [
    //             {
    //                 price: 300,
    //                 name: "Product 1",
    //                 src: ""
    //             },
    //             {
    //                 price: 300,
    //                 name: "Product 1",
    //                 src: ""
    //             }]
    //         setData(FetchedData)
    //     }, [])
    //     return (
    //     <section className="container featured-products mb-5">
    //         <h2 className="text-center mb-4">Featured Products</h2>
    //         <nav className="container">
    //             <ul className="nav justify-content-center py-3">
    //                 <li className="nav-item">
    //                     <a className="nav-link text-dark" href="#">
    //                         Dairy & Cheese
    //                     </a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link text-dark" href="#">
    //                         Fresh Fruits
    //                     </a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link text-dark" href="#">
    //                         Fresh Meat
    //                     </a>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <div>
    //             <FeaturedProduct price={data1?.price} name={data1?.name} src={data1?.src}/>
    //             <FeaturedProduct price={data2?.price} name={data2?.name} src={data2?.src}/>
    //         </div>
    //     </section>
    // )
    // }
    return (
    <div>
        <Navbar />
        <Hero/>
        <Featured/>
        {/* <Slider/> */}
        <footer className="bg-dark text-white py-3">
            <div className="container text-center">
                <p>Premium supermarket</p>
                <p>&copy; {new Date().getFullYear()} Vegist. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
    )
}

export default Home