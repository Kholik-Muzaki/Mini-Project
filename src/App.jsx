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
import PostinganSaya from "./pages/PostinganSaya/PostinganSaya";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../src/Store/index"



// import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/tentangkami" element={<TentangKami />} />
            <Route path="/destinasi" element={<DestinasiPage />} />
            <Route path="/detailwisata/:id" element={<DetailWisata />} />
            <Route path="/addpostingan" element={<AddPostinganpage />} />
            <Route path="/updatepostingan" element={<UpdatePostinganpage />} />
            <Route path="/postingansaya" element={<PostinganSaya />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
