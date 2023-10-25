import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import toba from "../../assets/img/toba.jpeg"
import CardDestinasi from "../../components/CardDestinasi/CardDestinasi";

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

            <Footer />
        </>
    )
}

export default DestinasiPage;
