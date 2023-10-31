import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

function FormRegister() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        telephone: "",
        password: "",
        passwordConfirm: "",
    });

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirm) {
            setMessage("Kata Sandi dan Konfirmasi Kata Sandi tidak cocok");
        } else if (!formData.email || !formData.name || !formData.telephone || !formData.password) {
            setMessage("Semua bidang harus diisi");
        } else {
            try {
                const { email, password } = formData;
                await createUserWithEmailAndPassword(auth, email, password);
                setMessage("Registrasi berhasil!");
                alert("Registrai berhasil!");
                navigate("/login");
            } catch (error) {
                console.error("Registrasi error: ", error);
                setMessage("Gagal mendaftar. Silakan coba lagi.");
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="telephone"
                        placeholder="Nomor Telepon"
                        value={formData.telephone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Kata Sandi"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="passwordConfirm"
                        placeholder="Konfirmasi Kata Sandi"
                        value={formData.passwordConfirm}
                        onChange={handleInputChange}
                    />
                </div>
                {message && <p className={message === "Registrasi berhasil!" ? "text-success" : "text-danger"}>{message}</p>}
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Submit
                </button>
                <p className="text-center mt-2">
                    Sudah punya akun? <Link to="/login">Login</Link>
                </p>
            </form>
        </>
    );
}

export default FormRegister;
