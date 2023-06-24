import React from "react";
const Banner = ({success, message}) => {
    return (
      <div
        className={`card mt-3 wd-margin ${
          success ? "wd-greenBorder" : "border-danger"
        }`}
      >
        <div className="card-body">
          <h5 className="card-title">{success ? "Success!" : "Error!"}</h5>
          <p className="card-text">
            {/* {success ? "You have successfully logged in" : "Invalid input - try again"} */}{message}
          </p>
        </div>
      </div>
    );
}

export default Banner;