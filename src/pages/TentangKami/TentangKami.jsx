import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import tentangImg from "../../assets/img/tentang.svg"
import Footer from "../../components/Footer/Footer"
import CountUp from 'react-countup';

function TentangKami() {
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
                        <h2 className="text-light text-center mt-5"> Tentang Kami </h2>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Tentang Kami</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 my-auto">
                        <p className="mx-auto">
                            Kami adalah sumber rekomendasi terkini untuk pengalaman wisata yang tak terlupakan. Berdiri dengan semangat untuk menghubungkan penjelajah dengan destinasi menakjubkan, kami menawarkan wawasan dan panduan terbaik untuk perjalanan Anda. Di Wisata Yuk, kami percaya bahwa setiap perjalanan adalah kesempatan untuk menciptakan kenangan berharga. Kami berkomitmen untuk menyediakan informasi terperinci tentang tempat-tempat indah, keunikan budaya, kuliner lezat, serta petualangan yang tak terlupakan. Tim ahli kami dengan penuh semangat mencari dan membagikan rekomendasi tentang destinasi wisata terbaik, sehingga Anda dapat merencanakan perjalanan Anda dengan percaya diri.
                        </p>
                    </div>

                    <div className="col-6 d-flex justify-content-center">
                        <img src={tentangImg} alt="" style={{
                            width: "350px",
                            height: "350px",
                        }} />
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-3 bg-primary rounded-2 text-light text-center pb-2 pt-2">
                        <h4>
                            <CountUp end={300} start={0} duration={2} />
                        </h4>
                        <p className="text-center">Tempat wisata di Indonesiaa</p>
                    </div>
                    <div className="col-4 bg-primary rounded-2 text-light text-center pb-2 pt-2">
                        <h4>
                            <CountUp end={600} start={0} duration={2} />
                        </h4>
                        <p className="text-center">wisatawan berkunjung</p>
                    </div>
                    <div className="col-3 bg-primary rounded-2 text-light text-center pb-2 pt-2">
                        <h4>
                        <CountUp end={4.9} start={0} duration={2}/>
                        </h4>
                        <p className="text-center">Rating tempat wisata</p>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default TentangKami