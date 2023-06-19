import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProyekInput from "../../components/ProyekInput/ProyekInput";
import TabelProyekInput from "../../components/TabelProyekInput/TabelProyekInput";
// import BarangForm from "../../components/TabelProyekInput/BarangForm";

const AddPage = () => {
  return (
    <div className="container-dashboard">
      <Sidebar />
      <div className="body-section">
        <div className="main">
          <ProyekInput />
          <TabelProyekInput />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
