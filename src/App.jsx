import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
// import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Product2 from './Components/Product2/Product2';
import ProductListingPage from './Components/Product2/ProductListingPage'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import NotFound from './Components/NotFound/NotFound'; // Optional: Add a NotFound component
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/product" element={<Product />} /> {/* Default Route */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/product" element={<ProductListingPage />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/pro" element={<ProductListingPage />} />
          {/* <Route path="*" element={<NotFound />} /> Fallback for undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
