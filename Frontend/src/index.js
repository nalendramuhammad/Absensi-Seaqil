import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/users/Login";
import Home from "./pages/users/Home";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import StatusPengajuan from "./pages/users/StatusPengajuan";
import RekapPresensi from "./pages/users/RekapPresensi";
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";
import DataIzin from "./pages/admin/DataIzin";
import formmasukkerja from "./components/FormMasukKerja";
import Laporan from "./pages/admin/Laporan";
import rumah from "./pages/users/rumah";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/pengajuan_izin" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/data_izin" Component={DataIzin} />
      <Route path="/dashboard/laporan" Component={Laporan} />

      <Route path="/login" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="/status_pengajuan" Component={StatusPengajuan} />
      <Route path="/rekap_presensi" Component={RekapPresensi} />
      <Route path="/rumah" Component={rumah} />
      <Route path="/dashboard/form_masuk_kerja" Component={formmasukkerja} />
      {/* <Route path="/dashboard/Laporan" Component={Laporan} /> */}
    </Routes>
  </BrowserRouter>
);
