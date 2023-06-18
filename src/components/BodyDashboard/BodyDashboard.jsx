import React from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend,
} from "chart.js";

import "./style.css";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, // y
  Tooltip,
  Legend
);

function BodyDashboard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Proyek",
        data: [0, 0, 0, 0, 0],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="container-body_section">
      <div className="add-proyek">
        <h4>Ada proyek apa hari ini?</h4>
        <p>Tambah proyek lebih mudah</p>
        <button
          className="btn-add-proyek btn btn-primary btn-outline-light"
          type="button"
          title="Tambah"
        >
          <Link to={"/add"}> Tambah </Link>
        </button>
      </div>
      <div className="section-bar_chart">
        <Bar
          style={
            ({ padding: "10px" },
            { width: "600px" },
            { height: "400px" },
            { background: "white" })
          }
          data={data}
          options={options}
        ></Bar>
      </div>
    </div>
  );
}

export default BodyDashboard;
