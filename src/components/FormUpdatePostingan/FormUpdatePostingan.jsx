import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUpdateDestination } from "../../Store/updateDestinationSlice/updateDestinationSlice";
import { APIDestination } from "../../api/ApiDestination"; // Impor API Destination

function FormUpdatePostingan() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState(null); // Data diubah menjadi null
    const inputImg = useRef();
    const [judulError, setJudulError] = useState("");
    const [keteranganError, setKeteranganError] = useState("");

    // Fetch the existing destination data based on the 'id' from your Redux store or API here
    useEffect(() => {
        const fetchData = async () => {
            try {
                const destinationData = await APIDestination.getDestinationById(id); // Gantilah ini sesuai dengan API yang digunakan
                setData(destinationData); // Perbarui state 'data' dengan data destinasi yang diambil
            } catch (error) {
                // Tangani kesalahan dengan tepat
                console.error("Error fetching destination data:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
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
            setJudulError("Destination Name must not contain symbols or numbers");
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
            try {
                await dispatch(fetchUpdateDestination({ id, data }));
                const returnTo = "/destinasi";
                navigate(returnTo);
                window.alert("Thank You! Destination updated successfully");
            } catch (error) {
                console.error("Error updating destination:", error);
            }
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

    if (!data) {
        return <div>Loading...</div>; // Tampilkan pesan loading saat data sedang diambil
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="judul" className="form-label">
                    Update Judul
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
                <label htmlFor="keterangan" className="mb-1">Update Keterangan</label>
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
                    Update Foto
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
                Update Postingan
            </button>
        </form>
    );
}

export default FormUpdatePostingan;
