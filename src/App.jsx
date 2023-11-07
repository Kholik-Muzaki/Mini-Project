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
import UpdatePostinganPage from "./pages/UpdatePostinganPage/UpdatePostinganPage"
import PostinganSaya from "./pages/PostinganSaya/PostinganSaya";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../src/Store/index";
import { AuthProvider } from "./config/AuthContext";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/kontak" element={<KontakPage />} />
              <Route path="/tentangkami" element={<TentangKami />} />
              <Route path="/destinasi" element={<DestinasiPage />} />
              <Route path="/postingansaya" element={<PostinganSaya />} />
              <Route
                path="/detailwisata/:id"
                element={<PrivateRoute element={<DetailWisata />} />}
              />
              <Route
                path="/addpostingan"
                element={<PrivateRoute element={<AddPostinganpage />} />}
              />
              <Route
                path="/updatepostingan/:id"
                element={<PrivateRoute element={<UpdatePostinganPage />} />}
              />
            </Routes>
          </Provider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;

