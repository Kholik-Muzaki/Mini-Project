import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import KontakPage from "./pages/KontakPage/KontakPage";
import TentangKami from "./pages/TentangKami/TentangKami";
import DestinasiPage from "./pages/DestinasiPage/DestinasiPage";
import DetailWisata from "./pages/DetailWisata/DetailWisata";
import AddPostinganpage from "./pages/AddPostinganPage/AddPostinganPage";
import UpdatePostinganpage from "./pages/UpdatePostinganPage/UpdatePostinganPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/destinasi" element={<DestinasiPage />} />
          <Route path="/detailwisata" element={<DetailWisata />} />
          <Route path="/addpostingan" element={<AddPostinganpage />} />
          <Route path="/updatepostingan" element={<UpdatePostinganpage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
