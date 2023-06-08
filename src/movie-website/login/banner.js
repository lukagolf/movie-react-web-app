import React from "react";
const Banner = ({success}) => {
    return (
      <div
        class={`card mt-3 wd-margin ${
          success ? "wd-greenBorder" : "border-danger"
        }`}
      >
        <div class="card-body">
          <h5 class="card-title">{success ? "Success!" : "Error!"}</h5>
          <p class="card-text">
            {success ? "You have successfully logged in" : "Invalid input - try again"}
          </p>
        </div>
      </div>
    );
}

export default Banner;