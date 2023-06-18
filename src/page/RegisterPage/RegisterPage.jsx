import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../../components/Register/RegisterInput";

function RegisterPage() {
  return (
    <section className="register-page">
      <h3>Buat Akun</h3>
      <RegisterInput />
      <p>
        Sudah punya akun? <Link to={`/`}>Masuk</Link>
      </p>
    </section>
  );
}
