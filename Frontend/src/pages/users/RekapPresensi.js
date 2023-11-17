import React from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DataPresensiUser from "../../DataPresensiUser";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

function RekapPresensi() {
  return (
    <div>
      <div className="header-masuk">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__title">
          <img src={akun} alt="logo" />
        </div>
      </div>
      <div className="bg-blur">
        <div className="tablePengajuanIzin">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header-pengajuan py-3 d-flex flex-row align-items-center justify-content-center">
              <div className="header">
                <div className="header-1">Data Presensi</div>
                <div className="header-2">Berikut ini data presensi kamu yaa.</div>
              </div>
            </div>
            {/* Card Body  */}
            <div className="card-body field-pengajuan">
              <DataTable
                value={DataPresensiUser}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 30]}
                tableStyle={{ minWidth: "50rem" }}
                className="customDataTable" //Add a custom class for more styling options
                paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
              >
                <Column field="No" header="No" style={{ width: "10%" }} alignHeader={"center"}></Column>
                <Column field="Tanggal" header="Tanggal" style={{ width: "25%" }} alignHeader={"center"}></Column>
                <Column field="Shift" header="Shift" style={{ width: "25%" }} alignHeader={"center"}></Column>
                <Column field="Keterangan" header="Keterangan" style={{ width: "25%" }} alignHeader={"center"}></Column>
              </DataTable>
              <button className="button-cetak">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path
                    d="M7.1665 14.6667L10.4998 18M10.4998 18L13.8332 14.6667M10.4998 18V10.5M17.1665 14.4524C18.1844 13.6117 18.8332 12.3399 18.8332 10.9167C18.8332 8.38536 16.7811 6.33333 14.2498 6.33333C14.0677 6.33333 13.8974 6.23833 13.8049 6.08145C12.7182 4.23736 10.7119 3 8.4165 3C4.96472 3 2.1665 5.79822 2.1665 9.25C2.1665 10.9718 2.86271 12.5309 3.98896 13.6613"
                    stroke="#1C1D22"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Cetak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function StripedRowExample() {
//   return (
//     <div className="tablePengajuanIzin w-70">
//       <div className="card shadow mb-4">
//         {/* Card Header - Dropdown */}
//         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//           <h3 className="m-0 font-weight-bold">Status Pengajuan Izin</h3>
//           {/* <h6>Silahkan cek status pengajuan izin kamu dibawah ini.</h6> */}
//         </div>
//         {/* Card Body */}
//         <div className="card-body">
//           <DataTable
//             value={DATA}
//             paginator
//             rows={10}
//             rowsPerPageOptions={[5, 10, 25, 50]}
//             tableStyle={{ minWidth: "50rem" }}
//             className="customDataTable" // Add a custom class for more styling options
//             paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
//           >
//             <Column field="No" header="No" style={{ width: "10%" }}></Column>
//             <Column field="Tanggal" header="Tanggal" style={{ width: "25%" }}></Column>
//             <Column field="Pengajuan" header="Pengajuan" style={{ width: "30%" }}></Column>
//             <Column field="Status" header="Status" style={{ width: "35%" }}></Column>
//           </DataTable>
//         </div>
//       </div>
//     </div>
//     // <div className="titleTable">
//     //   <div className="titleHeader">
//     //     <h3>Status Pengajuan Izin</h3>
//     //     <h6>Silahkan cek status pengajuan izin kamu dibawah ini.</h6>
//     //   </div>
//     //   <div className="tablePengajuanIzin">
//     //     <Table>
//     //       <thead>
//     //         <tr>
//     //           <th>No</th>
//     //           <th>Tanggal</th>
//     //           <th>Pengajuan</th>
//     //           <th>Status</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         <tr>
//     //           <td>1</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>2</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>3</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>4</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>5</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>6</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>7</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>8</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>9</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>10</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //       </tbody>
//     //     </Table>
//     //   </div>
//     // </div>
//   );
// }

// export default StripedRowExample;

export default RekapPresensi;