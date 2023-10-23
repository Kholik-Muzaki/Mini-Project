import FormRegister from "../../components/FormRegister/FormRegister"
import "./RegisterPage.module.css";
import toba from "../../assets/img/toba.jpeg"

function RegisterPage() {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <div className="row" style={{ height: "100%" }}>
                <div className="col-6" style={{
                    backgroundImage: `url(${toba})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>


                <div className="col-6 my-auto">
                    <h2 className="text-center mb-3">Buat Akun</h2>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <FormRegister />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default RegisterPage