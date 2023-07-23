import React from "react";
import "./style.css";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Category"}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={"/Products"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"/Orders"}>Orders</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ paddingLeft: "210px", paddingTop: "60px" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};
export default Layout;
