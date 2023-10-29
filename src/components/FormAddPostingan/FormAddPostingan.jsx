import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPostDestination } from "../../Store/createDestinationSlice/createDestinationSlice";

function FormAddPostingan() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emptyData = {
        judul: "",
        foto: "",
        keterangan: "",
    };

    const [data, setData] = useState(emptyData);
    const inputImg = useRef();
    const [judulError, setJudulError] = useState("");
    const [keteranganError, setKeteranganError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        let isFormValid = true;

        // Validasi untuk judul destinasi
        if (data.judul.length === 0) {
            setJudulError("Form must be filled in!");
            isFormValid = false;
        } else if (data.judul.length > 25) {
            setJudulError("Destination Name must not exceed 25 characters");
            isFormValid = false;
        } else if (/[^a-zA-Z\s]/.test(data.judul)) {
            setJudulError(
                "Destination Name must not contain symbols or numbers"
            );
            isFormValid = false;
        } else {
            setJudulError("");
        }

        // Validasi untuk Keterangan
        if (data.keterangan.length > 70) {
            setKeteranganError("Keterangan should not exceed 70 characters");
            isFormValid = false;
        } else {
            setKeteranganError("");
        }

        if (isFormValid) {
            dispatch(
                fetchPostDestination({
                    id: nextId++,
                    ...data,
                })
            );
            setData(emptyData);
            inputImg.current.value = "";
            inputImg.current.type = "text";
            inputImg.current.type = "file";
            const returnTo = "/destinasi";
            navigate(returnTo);

            window.alert("Thank You! Destination added successfully");
        }
    };

    const handleInput = (e) => {
        const name = e.target.name;
        const value =
            e.target.type === "file"
                ? URL.createObjectURL(e.target.files[0])
                : e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="judul" className="form-label">
                    Tambahkan Judul
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="judul"
                    name="judul"
                    value={data.judul}
                    onChange={handleInput}
                    required
                />
                {judulError && (
                    <div className="text-danger">{judulError}</div>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="keterangan" className="mb-1">Tambahkan keterangan</label>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        id="keterangan"
                        name="keterangan"
                        style={{ height: 100 }}
                        value={data.keterangan}
                        onChange={handleInput}
                        required
                    />
                    {keteranganError && (
                        <div className="text-danger">{keteranganError}</div>
                    )}
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label mb-1">
                    Tambahkan Foto
                </label>
                <input
                    className="form-control"
                    type="file"
                    id="foto"
                    accept="image/png, image/jpg, image/jpeg"
                    ref={inputImg}
                    onChange={handleInput}
                    required
                />
            </div>


            <button type="submit" className="btn btn-primary mt-5" style={{
                width: "100%",
            }}>
                Upload Postingan
            </button>
        </form>
    )
}

let nextId = 1;

export default FormAddPostingan