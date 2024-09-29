import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import logo from "../Assets/SL-110820-37810-03.jpg"
const VegistSupermarket = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
            <NavLink className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                <img src={logo} alt="" width={40} height={40}/>
            </NavLink>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                    <ul className="nav navbar-nav d-flex  mx-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="index.html">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="about.html">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="hardword.html">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="contact.html">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex gap-3">
                    <NavLink className="nav-icon position-relative text-decoration-none mr-3" href="login.html" target="_blank">
                        <i className="fa fa-fw fa-user text-#56ae6c mr-3"></i>
                        Login
                    </NavLink>

                    <NavLink className="nav-icon position-relative text-decoration-none" href="cartpage.html" target="_blank">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">3</span>
                    </NavLink>
                </div>
            </div>

        </div>
    </nav>
  );
};

export default VegistSupermarket;
