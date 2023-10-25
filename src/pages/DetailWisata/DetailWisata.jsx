import Navbar from "../../components/Navbar/Navbar"
import toba from "../../assets/img/toba.jpeg"
import Borobudur from "../../assets/img/BorobudurCard.jpeg"
import "./DetailWisata.module.css"
import Footer from "../../components/Footer/Footer"
import DetailBorobudur from "../../assets/img/Borobudur.jpg"

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

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mt-3 text-center">Candi Borobudur</h2>
                        <div className="image">
                            <img src={Borobudur} alt="..." style={{
                                height: "460px",
                                width: "100%"
                            }} />
                        </div>
                        <p className="mt-4 text-justify">Candhi Båråbudhur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi dengan banyak stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur adalah candi atau kuil Buddha terbesar di dunia, sekaligus salah satu monumen Buddha terbesar di dunia. Monumen ini terdiri atas enam teras berbentuk bujur sangkar yang di atasnya terdapat tiga pelataran melingkar, pada dindingnya dihiasi dengan 2.672 panel relief dan aslinya terdapat 504 arca Buddha. <br /><br />

                            Borobudur memiliki koleksi relief Buddha terlengkap dan terbanyak di dunia. Stupa utama terbesar teletak di tengah sekaligus memahkotai bangunan ini, dikelilingi oleh tiga barisan melingkar 72 stupa berlubang yang di dalamnya terdapat arca Buddha tengah duduk bersila dalam posisi teratai sempurna dengan mudra (sikap tangan) Dharmachakra mudra (memutar roda dharma). Monumen ini merupakan model alam semesta dan dibangun sebagai tempat suci untuk memuliakan Buddha sekaligus berfungsi sebagai tempat ziarah untuk menuntun umat manusia beralih dari alam nafsu duniawi menuju pencerahan dan kebijaksanaan sesuai ajaran Buddha. Para peziarah masuk melalui sisi timur dan memulai ritual di dasar candi dengan berjalan melingkari bangunan suci ini searah jarum jam, sambil terus naik ke undakan berikutnya melalui tiga tingkatan ranah dalam kosmologi Buddha. Ketiga tingkatan itu adalah Kāmadhātu (ranah hawa nafsu), Rupadhatu (ranah berwujud), dan Arupadhatu (ranah tak berwujud).<br /><br />

                            Dalam perjalanannya para peziarah berjalan melalui serangkaian lorong dan tangga dengan menyaksikan tak kurang dari 1.460 panel relief indah yang terukir pada dinding dan pagar langkan. Menurut bukti-bukti sejarah, Borobudur ditinggalkan pada abad ke-10 seiring dipindahnya pusat Kerajaan Mataram Kuno ke Jawa Timur oleh Pu Sindok. Dunia mulai menyadari keberadaan bangunan ini sejak ditemukan 1814 oleh Sir Thomas Stamford Raffles, yang saat itu menjabat sebagai Gubernur Jenderal Inggris atas Jawa. Sejak saat itu Borobudur telah mengalami serangkaian upaya penyelamatan dan pemugaran (perbaikan kembali).<br /><br />

                            Proyek pemugaran terbesar digelar pada kurun waktu 1975 hingga 1982 atas upaya Pemerintah Republik Indonesia dan UNESCO, kemudian situs bersejarah ini masuk dalam daftar Situs Warisan Dunia. Borobudur kini masih digunakan sebagai tempat ziarah keagamaan; tiap tahun umat Buddha yang datang dari seluruh Indonesia dan mancanegara berkumpul di Borobudur untuk memperingati Trisuci Waisak. Terkait kepariwisataan, Borobudur adalah objek wisata tunggal di Indonesia yang paling banyak dikunjungi wisatawan. Pada 11 Februari 2022, pemerintah meresmikan status Candi Borobudur kembali sebagai tempat peribadatan umat Buddhis di Indonesia dan dunia.[10] Nama Borobudur.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center">
                        <button type="button" class="btn btn-outline-primary" style={{
                            width: "auto"
                        }}>Tambahkan Foto Terkait Object Wisata</button>
                    </div>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-5">
                        <div className="card" style={{
                            width: "30rem",
                            height: "100%"
                        }}>
                            <img src={DetailBorobudur} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    Tempatnya sangat luas, dan sangat asri. Sangat Rekomendasi
                                    untuk liburan bersama keluarga
                                </p>
                                <a href="#" className="me-5 text-primary">Edit Postingan</a>
                                <a href="#" className="text-danger">Hapus Postingan</a>

                            </div>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="card" style={{
                            width: "30rem",
                            height: "100%"
                        }}>
                            <img src={DetailBorobudur} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    Tempatnya sangat luas, dan sangat asri. Sangat Rekomendasi
                                    untuk liburan bersama keluarga
                                </p>
                                <a href="#" className="me-5 text-primary">Edit Postingan</a>
                                <a href="#" className="text-danger">Hapus Postingan</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default DetailWisata