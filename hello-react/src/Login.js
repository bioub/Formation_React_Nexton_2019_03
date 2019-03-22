import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  /**
   * @param {Event} event
   */
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form className="Login" onSubmit={this.handleSubmit}>
        <div>
          <span>Username :</span>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <span>Password :</span>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export { Login };
