import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSUbmitHandler = this.onSUbmitHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSUbmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSUbmitHandler} className="register-input">
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <input
          type="emai;"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.onPasswordChangeHandler}
        />
        <button>Buat Akun</button>
      </form>
    );
  }
}

RegisterInput.proptypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
