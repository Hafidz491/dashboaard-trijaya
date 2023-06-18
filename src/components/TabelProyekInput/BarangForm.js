import React from "react";

class BarangForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      volume: "",
      jumlah: "",
      harga: "",
      tabelBarang: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nama, volume, jumlah, harga, tabelBarang } = this.state;
    const barang = { nama, volume, jumlah, harga };
    this.setState({
      nama: "",
      volume: "",
      jumlah: "",
      harga: "",
      tabelBarang: [...tabelBarang, barang],
    });
  };

  render() {
    const { nama, volume, jumlah, harga, tabelBarang } = this.state;
    const totalHarga = Number(jumlah) * Number(harga);
    const formattedTotalHarga = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalHarga);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama Barang:
            <input
              type="text"
              name="nama"
              value={nama}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Volume:
            <input
              type="text"
              name="volume"
              value={volume}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Jumlah:
            <input
              type="text"
              name="jumlah"
              value={jumlah}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Harga:
            <input
              type="text"
              name="harga"
              value={harga}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Tambah Barang</button>
        </form>
        <br />
        <table>
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th>Volume</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Jumlah Harga</th>
            </tr>
          </thead>
          <tbody>
            {tabelBarang.map((item, index) => (
              <tr key={index}>
                <td>{item.nama}</td>
                <td>{item.volume}</td>
                <td>{item.jumlah}</td>
                <td>{item.harga}</td>
                <td>{Number(item.jumlah) * Number(item.harga)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <h3>Total Harga: {formattedTotalHarga}</h3>
      </div>
    );
  }
}

export default BarangForm;
