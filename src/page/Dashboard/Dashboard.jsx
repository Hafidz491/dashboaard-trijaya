import React from "react";
import CardProyek from "../../components/CardProyek/CardProyek";
import BodyDashboard from "../../components/BodyDashboard/BodyDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./style.css";

const Dashboard = () => {
  return (
    <div className="container-dashboard">
      <Sidebar />
      <div className="body-section">
        <div className="main">
          <CardProyek />
          <BodyDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
