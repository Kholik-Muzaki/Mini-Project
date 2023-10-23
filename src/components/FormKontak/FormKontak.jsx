import "./FormKontak.module.css";

function FormKontak() {
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nama Lengkap :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Alamat Email :
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pesan">Apa Pesanmu?</label>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            id="pesan"
                            style={{ height: 100 }}
                            defaultValue={""}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </>
    )
}
export default FormKontak