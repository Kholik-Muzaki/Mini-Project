import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../config/AuthContext";

function FormLogin() {

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login berhasil");
            login(); // Panggil fungsi login untuk mengubah status login
            navigate("/");
        } catch (error) {
            console.error("Login error: ", error);
        }
    }

    return (
        <form onSubmit={handleLogin}>
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
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Kata Sandi"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Submit
            </button>
            <p className="text-center mt-2">
                Belum punya akun? <Link to="/register">Registrasi disini</Link>
            </p>
        </form>
    );
}

export default FormLogin;
