import Borobudur from "../../assets/img/BorobudurCard.jpeg"
import DanauToba from "../../assets/img/DanauToba.jpg"
import Keraton from "../../assets/img/Keraton.jpeg"
import RajaAmpat from "../../assets/img/RajaAmpat.jpeg"
import LabuanBajo from "../../assets/img/LabuanBajo.jpeg"
import Pangandaran from "../../assets/img/Pangandaran.jpeg"


function CardDestinasi() {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-around mt-5">
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                        }}>
                            <img src={Borobudur} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Candi Borobudur
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                        }}>
                            <img src={DanauToba} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Danau Toba
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                            
                        }}>
                            <img src={Pangandaran} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Pantai Pangandaran
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-around mt-5">
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                        }}>
                            <img src={LabuanBajo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Labuan Bajo
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                        }}>
                            <img src={RajaAmpat} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Raja Ampat
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{
                            width: "18rem",
                            height: "100%"
                            
                        }}>
                            <img src={Keraton} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bold">
                                    Keraton Yogyakarta
                                </p>
                                <button type="button" className="btn btn-outline-primary text-center" style={{
                                    width: "100%"
                                }}>
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDestinasi;