import "./Navbar.module.css";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">
                        Wisata Yuk
                    </a>
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
                                <a className="nav-link active" aria-current="page" href="#">
                                    Beranda
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Destinasi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tentang Kami
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Kontak
                                </a>
                            </li>  
                        </ul>
                        {/* button login */}
                        <button type="button" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar