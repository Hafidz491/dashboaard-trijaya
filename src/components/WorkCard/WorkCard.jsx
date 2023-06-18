import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// { id, instansi, createdAt, price }
function WorkCard() {
  return (
    <div className="work-card-body">
      <h3 className="work-instansi fs-5">
        <Link to={`/work`}>RSUD Muhammadiyah Kab. Blora</Link>
      </h3>
      <div className="work-createdAt">15 Juni 2023</div>
      <div className="work-price">Rp.12.500.000,00</div>
    </div>
  );
}

export default WorkCard;
