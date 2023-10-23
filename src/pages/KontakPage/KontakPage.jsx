import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import FormKontak from "../../components/FormKontak/FormKontak"
import Footer from "../../components/Footer/Footer"

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
                        <h2 className="text-light text-center mt-5"> Kontak </h2>
                    </div>
                </div>
            </div>

            <div className="container text-center mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Hubungi Kami</h2>
                        <p className="text-center">Hubungi kami sekarang untuk mengenal lebih jauh wisata Yuk bisa membantu kamu dalam tempat wisata, dan liburan di Indonesia</p>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-5">
                        <FormKontak />
                    </div>
                    <div className="col-7 ">
                        <h5 className="text-primary">Tanya Bagimana Kami Membantu anda?</h5>
                        <h6 className="fw-bold">Apa saja Fitur yang ada di Wisata Yuk?</h6>
                        <p>Anda bisa menjelajahi Fitur Destinasi Wisata untuk melihat
                            semua wisata yang ada di seluruh penjuru nusantara  </p>
                        <h6 className="fw-bold">Bagaimana caranya membuat akun?</h6>
                        <p>Anda cukup menekan tombol login yang ada di bagian kanan
                            atas, setelah itu jika anda belum mempunyai akun, bisa
                            menekan buat akun disini di menu login </p>
                        <h6 className="fw-bold">Mengalami kesalahan dan bug</h6>
                        <p>Anda dapat menghubungi kami dengan mengisi form
                            di sebelah kiri anda, lalu akan kami balas secepatnya.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default KontakPage