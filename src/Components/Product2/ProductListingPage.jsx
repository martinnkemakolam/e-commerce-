import { useState } from 'react';
import './Product2.css';
import Navbar from '../Navbar/Navbar';

const ProductListingPage = () => {
    const [activeFilter, setActiveFilter] = useState(null);
    const [sortOption, setSortOption] = useState('Featured');
    const [selectedTab, setSelectedTab] = useState('All T-Shirts');

    const toggleFilter = (filterName) => {
        setActiveFilter(activeFilter === filterName ? null : filterName);
    };

    const products = [
        // Sample product data
        { id: 1, name: 'AllSaints Underground Oversize Graphic T-Shirt', price: 95, imageUrl: 'https://via.placeholder.com/200', colors: ['#000000', '#ffffff'], brand: 'AllSaints' },
        { id: 2, name: 'TravisMathew Cloud Crewneck T-Shirt', price: 59.95, imageUrl: 'https://via.placeholder.com/400', colors: ['#b0c4de', '#708090'], brand: 'TravisMathew' },
        { id: 3, name: 'AllSaints Laser Logo Graphic T-Shirt', price: 66.50, imageUrl: 'https://via.placeholder.com/200', colors: ['#e3dac9', '#2f4f4f'], brand: 'AllSaints' },
        { id: 4, name: 'Robert Barakett Georgia Pima Cotton T-Shirt', price: 27.80, imageUrl: 'https://via.placeholder.com/200', colors: ['#4682b4', '#f5f5f5'], brand: 'Robert Barakett' },
        { id: 5, name: 'AllSaints Underground Oversize Graphic T-Shirt', price: 95, imageUrl: 'https://via.placeholder.com/200', colors: ['#000000', '#ffffff'], brand: 'AllSaints' },
        { id: 6, name: 'TravisMathew Cloud Crewneck T-Shirt', price: 59.95, imageUrl: 'https://via.placeholder.com/200', colors: ['#b0c4de', '#708090'], brand: 'TravisMathew' },
        { id: 7, name: 'AllSaints Laser Logo Graphic T-Shirt', price: 66.50, imageUrl: 'https://via.placeholder.com/200', colors: ['#e3dac9', '#2f4f4f'], brand: 'AllSaints' },
        { id: 8, name: 'Robert Barakett Georgia Pima Cotton T-Shirt', price: 27.80, imageUrl: 'https://via.placeholder.com/200', colors: ['#4682b4', '#f5f5f5'], brand: 'Robert Barakett' }
    ];

    const filters = [
        { label: 'Gender', options: ['Men', 'Women'] },
        { label: 'Size', options: ['Small', 'Medium', 'Large', 'X-Large'] },
        { label: 'Color', options: ['Black', 'White', 'Gray', 'Blue'] },
        { label: 'Brand', options: ['AllSaints', 'TravisMathew', 'Robert Barakett'] },
        { label: 'Price', options: ['Under $50', '$50 - $100', 'Above $100'] }
    ];

    return (
        <div className="">
            <Navbar />
            <nav className='d-flex justify-content-center align-items-center '>
                <ul className='d-flex justify-content-center align-items-center mt-3 gap-5 top-x'>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Designer</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Beauty</a></li>
                    <li><a href="#">Gifts</a></li>
                    <li><a href="#">Explore</a></li>
                </ul>
            </nav>
            <hr />
            <div className="product-listing-container container">
                
                <div className="sidebar">
                    <h3>Filters</h3>
                    {filters.map(filter => (
                        <div key={filter.label} className="filter-section">
                            <div className="filter-header" onClick={() => toggleFilter(filter.label)}>
                                {filter.label}
                                <span className="toggle-icon">{activeFilter === filter.label ? '-' : '+'}</span>
                            </div>
                            <hr />
                            {activeFilter === filter.label && (
                                <ul className="filter-options">
                                    {filter.options.map(option => (
                                        <li key={option} className="filter-option">{option}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="main-content">
                    <div className="top-bar">
                        <div className="tabs">
                            {['All T-Shirts', 'Crewneck', 'Graphic Tees'].map(tab => (
                                <div
                                    key={tab}
                                    className={`tab ${selectedTab === tab ? 'active-tab' : ''}`}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>

                        <div className="sort-dropdown">
                            Sort:
                            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                <option value="Featured">Featured</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.imageUrl} alt={product.name} />
                                <div className="product-info">
                                    <h5>{product.name}</h5>
                                    <p>€{product.price.toFixed(2)}</p>
                                    <div className="color-options">
                                        {product.colors.map((color, idx) => (
                                            <span key={idx} className="color-swatch" style={{ backgroundColor: color }}></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default ProductListingPage;