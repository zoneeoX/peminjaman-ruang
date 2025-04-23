import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RootLayout from "./pages/root/layout/RootLayout";
import Dashboard from "./pages/root/Dashboard";
import ListGedung from "./pages/root/ListGedung";
import KelolaGedung from "./pages/root/KelolaGedung";
import { ToastContainer } from "react-toastify";
import KelolaRuangan from "./pages/root/KelolaRuangan";
import KelolaUsers from "./pages/root/KelolaUsers";
import KelolaPeminjaman from "./pages/root/KelolaPeminjaman";
import RiwayatPeminjaman from "./pages/root/RiwayatPeminjaman";
import RuanganGedung from "./pages/root/RuanganGedung";
import Ruangan from "./pages/root/Ruangan";
import VerifikasiPeminjaman from "./pages/root/VerifikasiPeminjaman";
import RuanganSaya from "./pages/root/RuanganSaya";

function App() {
  return (
    <main className="flex min-h-screen font-primary">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        // ! dont forget to make this protected
        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="gedung" element={<ListGedung />} />
          <Route path="ruangan/:gedung" element={<RuanganGedung />} />
          <Route path="ruangan/:gedung/:ruanganid" element={<Ruangan />} />
          <Route path="ruangan/saya" element={<RuanganSaya />} />
 
          <Route path="admin">
            <Route path="gedung/kelola" element={<KelolaGedung />} />
            <Route path="ruangan/kelola" element={<KelolaRuangan />} />
            <Route path="users/kelola" element={<KelolaUsers />} />
            <Route path="peminjaman/kelola" element={<KelolaPeminjaman />} />
            <Route path="peminjaman/riwayat" element={<RiwayatPeminjaman />} />
            <Route path="peminjaman/verifikasi" element={<VerifikasiPeminjaman />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
