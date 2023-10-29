import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import toba from "../../assets/img/toba.jpeg"
import CardDestinasi from "../../components/CardDestinasi/CardDestinasi";
import { Link } from "react-router-dom";

function DestinasiPage() {
    return (
        <>
            <Navbar />

            <div className="container-fluid" style={{ height: "150px" }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-12" style={{
                        backgroundImage: `url(${toba})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h2 className="text-light text-center mt-5"> Destinasi </h2>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Destinasi</h2>
                        <p className="text-center">Temukan destinasi wisata di seluruh penjuru nusantara melalui website wisata yuk,<br />
                            serta bagikan beberapa rekomendasi wisata terbaikmu disini</p>
                    </div>
                </div>
            </div>

            <CardDestinasi />

            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className="mt-3 text-center">Berbagi Rekomendasi Tempat Wisata</h2>
                        <p className="text-center">Ingin berbagi rekomendasi tempat wisata? Yuk bagikan tempat wisata terbaikmu melalui tombol di bawah ini</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to={"/addPostingan"}>
                            <button type="button" className="btn btn-outline-primary" style={{
                                width: "50%"
                            }}>Berbagi Rekomendasi Object Wisata</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DestinasiPage;
