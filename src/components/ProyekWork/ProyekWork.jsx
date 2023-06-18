import React from "react";

function ProyekWork({ proyek }) {
  if (!proyek.length) {
    return <h2 className="text-empty">Tidak ada Proyek yang dikerjakan!</h2>;
  }
}
