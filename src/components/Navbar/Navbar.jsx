import { Link } from "react-router-dom";
import "./Navbar.module.css";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container">
                    <Link to={"/"}>
                        
                            Wisata Yuk
                       
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"}>
                                    
                                        Beranda
                                   
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/destinasi"}>
                                    
                                        Destinasi
                                    
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tentangkami"}>
                                    
                                        Tentang Kami
                                    
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/kontak"}>
                                    
                                        Kontak
                                    
                                </Link>
                            </li>
                        </ul>
                        {/* button login */}
                        <Link to={"/login"}>
                            <button type="button" className="btn btn-primary rounded-5">Login</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar