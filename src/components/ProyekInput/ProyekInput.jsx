import React from "react";
import PropTypes from "prop-types";

import "./style.css";

class ProyekInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      instansi: "",
      no_proyek: "",
      alamat: "",
      barang: "",
      volume: "",
      satuan: "",
      harga: "",
    };

    this.onInstansiChangeHandler = this.onInstansiChangeHandler.bind(this);
    this.onNoProyekChangeHandler = this.onNoProyekChangeHandler.bind(this);
    this.onAlamatChangeHandler = this.onAlamatChangeHandler.bind(this);
  }

  onInstansiChangeHandler(event) {
    this.setState(() => {
      return {
        instansi: event.target.value,
      };
    });
  }

  onNoProyekChangeHandler(event) {
    this.setState(() => {
      return {
        no_proyek: event.target.value,
      };
    });
  }

  onAlamatChangeHandler(event) {
    this.setState(() => {
      return {
        alamat: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="form-add_proyek w-100">
        <div className="form-instansi">
          <h2>Form Instansi</h2>
          <div className="instansi">
            <p className="w-25">Nama Instansi :</p>
            <input
              type="text"
              value={this.state.instansi}
              onChange={this.onInstansiChangeHandler}
            />
          </div>
          <div className="no-proyek">
            <p className="w-25">Nomor Proyek :</p>
            <input
              type="text"
              value={this.state.no_proyek}
              onChange={this.onNoProyekChangeHandler}
            />
          </div>
          <div className="alamat">
            <p className="">Alamat :</p>
            <textarea
              type="text"
              value={this.state.alamat}
              onChange={this.onAlamatChangeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

ProyekInput.propTypes = {
  instansi: PropTypes.string.isRequired,
  no_proyek: PropTypes.string.isRequired,
  alamat: PropTypes.string.isRequired,
};

export default ProyekInput;
