import "./LoginPage.module.css";
import toba from "../../assets/img/toba.jpeg"
import FormLogin from "../../components/FormLogin/FormLogin";

function LoginPage() {
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
                    <h2 className="text-center mb-3">Masuk</h2>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <FormLogin />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LoginPage