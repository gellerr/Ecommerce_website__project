import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";
import { useState } from "react";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };
  if (auth.authenticate) return <Navigate to={"/"} />;
  if (user.loading) return <p>Loading...</p>;

  return (
    <>
      <Layout>
        <Container>
          {user.message}
          <div id="card">
            <div id="card-content">
              <div id="card-title">
                <h2>SIGN UP</h2>
                <div class="underline-title"></div>
              </div>
              <form method="post" class="form" onSubmit={userSignup}>
                <label for="user-First Name" style={{ paddingTop: "13px" }}>
                  &nbsp;First Name
                </label>
                <input
                  id="user-firstname"
                  class="form-content"
                  type="text"
                  value={firstName}
                  name="firstname"
                  onChange={(e) => setfirstName(e.target.value)}
                  required
                />
                <div class="form-border"></div>
                <label for="user-Last Name" style={{ paddingTop: "22px" }}>
                  &nbsp;Last Name
                </label>
                <input
                  id="user-lastname"
                  class="form-content"
                  type="text"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  required
                />
                <div class="form-border"></div>

                <label for="user-email" style={{ paddingTop: "22px" }}>
                  &nbsp;Email
                </label>
                <input
                  id="user-email"
                  class="form-content"
                  type="email"
                  name="email"
                  value={email}
                  autocomplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div class="form-border"></div>
                <label for="user-password" style={{ paddingTop: "22px" }}>
                  &nbsp;Password
                </label>
                <input
                  id="user-password"
                  class="form-content"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div class="form-border"></div>
                <Button
                  id="submit-btn"
                  type="submit"
                  name="submit"
                  value="SIGN UP"
                >
                  SIGN UP
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Signup;
