import FormAddPostingan from "../../components/FormAddPostingan/FormAddPostingan"
import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import Footer from "../../components/Footer/Footer"

function AddPostinganpage() {
    return (
        <>
            <Navbar />
            <div className="container-fluid mb-5" style={{ height: "150px" }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-12" style={{
                        backgroundImage: `url(${toba})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <h2 className="text-light text-center mt-5"> Tambagkan Postingan </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FormAddPostingan />
                    </div>
                </div>
            </div>
                         
            <Footer />

        </>

    )
}

export default AddPostinganpage