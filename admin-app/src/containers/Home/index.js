import "./style.css";
import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <>
      <Layout sidebar></Layout>
    </>
  );
};

export default Home;
