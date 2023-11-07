import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import "./DetailWisata.module.css"
import Footer from "../../components/Footer/Footer"
import DetailCardDestinasi from "../../components/DetailCardDestinasi/DetailCardDestinasi"


function DetailWisata() {
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
                        <h2 className="text-light text-center mt-5"> Detail Wisata </h2>
                    </div>
                </div>
            </div>
            
            <DetailCardDestinasi />
            <Footer />
        </>
    )
}

export default DetailWisata