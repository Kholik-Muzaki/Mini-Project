import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import toba from "../../assets/img/toba.jpeg"
import CardDestinasi from "../../components/CardDestinasi/CardDestinasi";
import { Link } from "react-router-dom";
import ChatAiPage from "../ChatAiPage/ChatAiPage"
import uploadImg from "../../assets/img/uploadImg.svg"
import chatBot from "../../assets/img/chatBot.svg"

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
                        <h2 className="text-primary">Destinasi</h2>
                        <p className="text-center">Temukan destinasi wisata di seluruh penjuru nusantara melalui website wisata yuk,<br />
                            serta bagikan beberapa rekomendasi wisata terbaikmu disini</p>
                    </div>
                </div>
            </div>

            <CardDestinasi />
            <hr />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-7 left my-auto">
                        <h2 className="mt-3 text-primary">Berbagi Rekomendasi Tempat Wisata</h2>
                        <p>Ingin berbagi rekomendasi tempat wisata? Yuk bagikan tempat wisata terbaikmu melalui tombol di bawah ini</p>
                        <Link to={"/addPostingan"}>
                            <button type="button" className="btn btn-outline-primary mt-5" style={{
                                width: "100%"
                            }}>Berbagi Rekomendasi Object Wisata</button>
                        </Link>
                    </div>
                    <div className="col-5 right">
                        <img src={uploadImg} alt="" />
                    </div>
                </div>
            </div >

            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 left">
                        <img src={chatBot} alt="" />
                    </div>
                    <div className="col-7 right my-auto">
                        <h2 className="mt-3 text-primary">Tanyakan AI</h2>
                        <p>Tanyakan kepada AI mengenai tempat-tempat wisata yang anda cari, mulai dari sejarah, hingga lokasinya</p>
                        <ChatAiPage />
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default DestinasiPage;
