function FormAddPostingan() {
    return ( 
            <form>
                <div className="mb-3">
                    <label htmlFor="keterangan" className="mb-1">Tambahkan keterangan</label>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            id="keterangan"
                            style={{ height: 100 }}
                            defaultValue={""}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label mb-1">
                        Tambahkan Foto
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                </div>


                <button type="submit" className="btn btn-primary mt-5" style={{
                    width: "100%",
                }}>
                    Upload Postingan
                </button>
            </form>
    )
}

export default FormAddPostingan