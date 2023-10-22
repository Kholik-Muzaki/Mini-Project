import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./LandingPage.module.css"
import hero from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.png"

function LandingPage() {
    return (
        <>
            <Navbar />
            {/* welcome */}
            <div className="container">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h6 className="mt-2 mb-3 text-primary fs-4">Selamat Datang Di Wisata Yuk</h6>
                        <h2 className="mb-3 fs-2 fw-bold lh-sm">Temukan Keindahan dan Keberagaman Negara Indonesia</h2>
                        <p className="lh-lg">Wisata Yuk membantu kamu untuk memilih tempat wisata
                            di Indonesia yang kaya akan budaya dan keberagaman
                            serta petualangan yang menunggumu di Indonesia</p>
                        <div className="row mt-5">
                            <div className="col-12">
                                <button className="btn btn-primary" type="button">
                                    Mulai Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mx-auto">
                        <img src={hero} alt="gambar atas" width="600px" height="550px" />
                    </div>
                </div>
            </div>
            {/* Keindahan Indonesia */}
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-12">
                        <h6 className="mt-2 mb-3 text-primary text-uppercase fs-6">Keindahan Indonesia</h6>
                        <h2 className="mb-3 fs-2 fw-bold lh-sm">Keberagaman & Budaya Indonesia</h2>
                        <p className="lh-lg text-center">Nikmati berbagai macam budaya, keberagaman, kuliner dan keindahan alam yang <br />
                            membuat-mu jatuh cinta dan menjadikan Indonesia sebagai destinasi-mu selanjutnya</p>
                    </div>
                </div>
            </div>
            {/* keberagaman Indonesia */}
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <img src={hero2} alt="gambar atas" width="600px" height="550px" />
                    </div>
                    <div className="col-6 my-auto">
                        <h6 className="mt-2 mb-3 text-primary text-uppercase fs-6">Keberagaman Indonesia</h6>
                        <h2 className="mb-3 fs-2 fw-bold lh-sm">Keberagaman budaya
                            yang bisa anda nikmati
                            hanya di Indonesia!</h2>
                        <p className="lh-lg">Beragam budaya bisa kalian temukan di Indonesia. Mulai dari
                            Bahasa Daerah, Tari Tradisional, Senjata Traditional, Baju Daerah
                            dan Lagu Daerah yang bisa kalian nikmati di Indonesia yang
                            kaya akan budaya dan keberagamanya.</p>
                    </div>
                </div>
            </div>
            {/* Keindahan Indonesia */}
            <div className="container">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h6 className="mt-2 mb-3 text-primary text-uppercase fs-6">Keindahan Indonesia</h6>
                        <h2 className="mb-3 fs-2 fw-bold lh-sm">Keindahan alam yang
                            di akui Dunia yang bisa
                            kamu liat di Indonesia!</h2>
                        <p className="lh-lg">Keindahan alam yang dimiliki Indonesia membuatnya diakui
                            dunia sebagai negara terindah di dunia. Memiliki Pantai, Gunung,
                            Tempat Bersejarah dan Wahana Atraksi yang ada di Indonesia yang
                            siap kalian kunjungi kapan saja.</p>
                    </div>
                    <div className="col-6 mx-auto">
                        <img src={hero3} alt="gambar atas" width="600px" height="550px" className="ms-0" />
                    </div>
                </div>
            </div>
            {/* Video Pariwisata Indonesia */}
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <h6 className="mt-2 mb-3 text-primary text-uppercase fs-6">Video Pariwisata Indonesia</h6>
                        <h2 className="mb-3 fs-2 fw-bold lh-sm">Jelajahi Indonesia Lewat Video Ini</h2>
                        <p className="lh-lg text-center">Video dibawah dibuat oleh Pesona Indonesia dalam rangka merayakan hari Pariwisata <br />
                            dunia menampilkan keindahan alam dan keberagaman budaya yang dimiliki Indonesia!</p>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/0kEnZN_WlgU" frameborder="0" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage