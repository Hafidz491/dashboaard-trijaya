import React from "react";
import PropTypes from "prop-types";
import formattedPrice from "../../utils/data";

import "./style.css";

class TabelProyekInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      barang: "",
      volume: "",
      satuan: "",
      harga: "",
      tabelBarang: [],
    };

    // this.onBarangChangeHandler = this.onBarangChangeHandler.bind(this);
    // this.onVolumeChangeHandler = this.onVolumeChangeHandler.bind(this);
    // this.onSatuanChangeHandler = this.onSatuanChangeHandler.bind(this);
    // this.onHargaChangeHandler = this.onHargaChangeHandler.bind(this);
    // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  //   onBarangChangeHandler(event) {
  //     this.setState(() => {
  //       return {
  //         barang: event.target.value,
  //       };
  //     });
  //   }

  //   onVolumeChangeHandler(event) {
  //     this.setState(() => {
  //       return {
  //         volume: event.target.value,
  //       };
  //     });
  //   }

  //   onSatuanChangeHandler(event) {
  //     this.setState(() => {
  //       return {
  //         satuan: event.target.value,
  //       };
  //     });
  //   }

  //   onHargaChangeHandler(event) {
  //     this.setState(() => {
  //       return {
  //         harga: event.target.value,
  //       };
  //     });
  //   }

  //   onSubmitEventHandler(event) {
  //     event.preventDefault();
  //   }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { barang, volume, satuan, harga, tabelBarang } = this.state;
    const barangProyek = { barang, volume, satuan, harga };
    console.log("Data barang: ", barangProyek);
    this.setState({
      barang: "",
      volume: "",
      satuan: "",
      harga: "",
      tabelBarang: [...tabelBarang, barangProyek],
    });
  };

  onHandleDelete = (index) => {
    const { tabelBarang } = this.state;
    const updateTabelBarang = [...tabelBarang];
    updateTabelBarang.splice(index, 1);
    this.setState({
      tabelBarang: updateTabelBarang,
    });
  };

  render() {
    const { barang, volume, satuan, harga, tabelBarang } = this.state;
    const total = Number(satuan) * Number(harga);
    const formattedTotal = formattedPrice(total);

    return (
      <div className="form-input_barang">
        <h5>Masukkan Barang</h5>
        <form onSubmit={this.onHandleSubmit}>
          <div className="input-barang d-flex">
            <div className="nama-barang me-3">
              <p>Nama Barang</p>
              <input
                type="text"
                name="barang"
                value={barang}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="volume-barang me-3">
              <p>Volume</p>
              <input
                type="text"
                name="volume"
                value={volume}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="satuan-barang me-3">
              <p>Satuan</p>
              <input
                type="text"
                name="satuan"
                value={satuan}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="harga-barang me-3">
              <p>Harga (Rp)</p>
              <input
                type="text"
                name="harga"
                value={harga}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="jumlah-harga">
              <p>Jumlah(Rp)</p>
              <p>{formattedTotal}</p>
            </div>
            <button className="btn-submit-proyek" type="submit">
              Tambah
            </button>
          </div>
        </form>
        <br />
        <table className="table-container">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Volume</th>
              <th>Satuan</th>
              <th>Harga Satuan</th>
              <th>Jumlah Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tabelBarang.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="text" defaultValue={item.barang} disabled />
                </td>
                <td>{item.volume}</td>
                <td>{item.satuan}</td>
                <td>{item.harga}</td>
                <td>{formattedPrice(item.satuan * item.harga)}</td>
                <td>
                  <button
                    className="btn-delete bg-red"
                    onClick={() => this.onHandleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

TabelProyekInput.propTypes = {
  barang: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  satuan: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
};

export default TabelProyekInput;
