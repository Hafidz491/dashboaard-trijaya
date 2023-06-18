import React from "react";

const CardProyek = () => {
  return (
    <div className="row">
      <div className="col-sm-3 mb-3 mb-sm-0 me-4">
        <div className="card">
          <div className="card-body">
            <p className="fs-5">Proyek Dikerjakan :</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3 me-4">
        <div className="card">
          <div className="card-body">
            <p className="fs-5">Proyek Selesai :</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p className="fs-5">Pendapatan :</p>
            <p>
              Rp. <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-card">
    //   <div className="card card-worked">
    //     <h4>Proyek Dikerjakan :</h4>
    //     <h3>0</h3>
    //   </div>
    //   <div className="card card-finished">
    //     <h4>Proyek Terselesaikan :</h4>
    //     <h3>0</h3>
    //   </div>
    //   <div className="card card-income">
    //     <h4>Pendapatan :</h4>
    //     <h5>
    //       Rp. <span>0</span>
    //     </h5>
    //   </div>
    // </div>
  );
};

export default CardProyek;
