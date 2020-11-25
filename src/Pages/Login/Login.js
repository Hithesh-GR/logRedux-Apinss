
import React from "react";
import "./login.css";
import { Card, TextField, Button } from '@material-ui/core';
import { connect } from "react-redux";
import { login } from "../../redux/action/login.action";
// import Data from "./login.json"
class Login extends React.Component {
  state = {
    email: "",
    pwd: ""
  };

  handleEmailChange = event => {
    const email = event.target.value;
    this.setState({ email: email });
  }

  handlePasswordChange = event => {
    const pwd = event.target.value;
    this.setState({ pwd: pwd });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email) {
      alert("email cannot be empty..!")
    } else if (!this.state.pwd) {
      alert("Password cannot be empty..!")
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
    ) {
      alert("Invalid email..!")
    } else if (this.state.pwd.length < 9) {
      alert("Password must be of atleast 9 characters long..!")
    } else {
      var data = {
        email: "hruday@gmail.com",
        pwd: "hruday123"
      }
      this.props.login(data)
      // .then((response) => {
      //   console.log(response);
      //   alert("Login Successfull!!")
      // })
      // .catch((err) => {
      //   console.log(err);
      //   alert("Login failed!!")
      // });
    }
  };

  render() {
    return (
      <div className="container">
        <Card className="containerCard">
          <div id="fontt">
            <p>
              <span id="font-A">A</span>
              <span id="font-p">p</span>
              <span id="font-i">i</span>
              <span id="font-n">n</span>
              <span id="font-s">s</span>
              <span id="font-s">s</span>
            </p>
          </div>
          <div id="fontt">
            <span id="font-L">Login Page</span>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  required
                  label="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  // autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  required
                  label="Password"
                  type="password"
                  value={this.state.pwd}
                  onChange={this.handlePasswordChange}
                  margin="normal"
                  // autoComplete="current-password"
                  variant="outlined"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
                  Log in
               </Button>
              </div>
            </form>
          </div>
        </Card>
      </div >
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: isLogin => dispatch(login(isLogin))
});
export default connect(
  null,
  mapDispatchToProps
)(Login);