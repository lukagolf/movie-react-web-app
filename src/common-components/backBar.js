import React from "react";
import BackBtn from "../ui-styling/buttons/icons/backBtn";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../ui-styling/index.css";
import "bootstrap/dist/css/bootstrap.css";

const BackBar = () => {
  const bottom10 = {
    bottom: "10px"
  };
  return (
    <div
      className="container-fluid ps-5 pe-5 position-absolute"
      style={bottom10}
    >
      <Nav.Link as={Link} to="/home">
        <BackBtn />
      </Nav.Link>
    </div>
  );
};
export default BackBar;
