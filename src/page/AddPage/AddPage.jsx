import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProyekInput from "../../components/ProyekInput/ProyekInput";
import TabelProyekInput from "../../components/TabelProyekInput/TabelProyekInput";
// import BarangForm from "../../components/TabelProyekInput/BarangForm";

const AddPage = () => {
  return (
    <div className="container-dashboard">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="body-section">
        <ProyekInput />
        <TabelProyekInput />
      </div>
    </div>
  );
};

export default AddPage;
