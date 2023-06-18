import React from "react";
import CardProyek from "../../components/CardProyek/CardProyek";
import BodyDashboard from "../../components/BodyDashboard/BodyDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./style.css";

const Dashboard = () => {
  return (
    <div className="container-dashboard">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="body-section">
        <CardProyek />
        <BodyDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
