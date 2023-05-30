import React from "react";
import BackBtn from "../ui-styling/buttons/icons/backBtn";
import "../ui-styling/index.css";
import "bootstrap/dist/css/bootstrap.css";

const BackBar = ({className}) => {
  return (
    <div
      className={`container-fluid ps-5 pe-5 position-absolute pb-3 pt-3 ${className}`}
    >
      <BackBtn />
    </div>
  );
};
export default BackBar;
