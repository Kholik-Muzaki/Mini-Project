import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import Footer from "../../components/Footer/Footer"
import PostinganSaya from "../../components/PostinganSaya/PostinganSaya"


function KontakPage() {
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
                        <h2 className="text-light text-center mt-5"> Postingan Saya </h2>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Postingan Saya</h2>
                    </div>
                </div>
            </div>

           <PostinganSaya />

            <Footer />
        </>
    )
}

export default KontakPage