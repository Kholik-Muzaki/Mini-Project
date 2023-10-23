import "./FormRegister.module.css";

function FormRegister() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="telephone"
                        placeholder="Nomor Telepon"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Kata Sandi"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="passwordConfirm"
                        placeholder="Konfirmasi Kata Sandi"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )
}
export default FormRegister