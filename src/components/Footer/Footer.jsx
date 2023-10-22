import "./Footer.module.css"

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-5">
            <section>
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-primary">
                                Wisata Yuk
                            </h6>
                            <p id="desc" className="lh-3">
                            Wisata Yuk adalah website untuk memberikan rekomendasi wisata dan juga mengupload tempat wisata .website ini dibuat guna memenuhi tugas mini project studi independen dari mitra alterra
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 menu">
                            <h6 className="text-uppercase fw-bold mb-4 text-primary">
                                Menu Wisata Yuk
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Beranda
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Destinasi
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Tentang Kami
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Kontak
                                </a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-primary">
                                Hubungi Kami
                            </h6>
                            <p>
                                wisatayuk@gmail.com
                            </p>
                            <p>
                                +62 8123 30495
                            </p>
                            <p>
                                Jl. Jenderal Sudirman No. 269 RT 13/RW 09, Desa Teluk, Kec. Purwokerto Selatan, Kabupaten banyumas, Jawa Tengah 53145
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer
