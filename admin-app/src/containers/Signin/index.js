import React, { useEffect } from "react";
import "./style.css";
import Layout from "../../components/Layout";
import { Button } from "react-bootstrap";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };
  if (auth.authenticate) return <Navigate to={"/"} />;

  return (
    <>
      <Layout>
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>SIGN IN</h2>
              <div className="underline-title"></div>
            </div>
            <form method="post" className="form" onSubmit={userLogin}>
              <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Email
              </label>
              <input
                id="user-email"
                value={email}
                className="form-content"
                type="email"
                name="email"
                autoComplete="on"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-border"></div>
              <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
                &nbsp;Password
              </label>
              <input
                id="user-password"
                className="form-content"
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-border"></div>

              <Button
                id="submit-btn"
                type="submit"
                name="submit"
                value="SIGN IN"
              >
                SIGN IN
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Signin;
