import React from "react";
import "./index.css";
import NextBtn from "../../ui-styling/buttons/icons/nextBtn";

function SearchResult() {
    return (
      <>
        <div className="">
          <div className="container">
            <div className="wd-margin">
              <div class="list-group ">
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="row p-3 ">
                    <div className="col-3">
                      <img
                        src="https://resizing.flixster.com/i2rZX63U5Q76gMjXCqYt2HCzd_8=/206x305/v2/https://flxt.tmsimg.com/assets/p8640628_p_v12_ar.jpg"
                        height="5px"
                        class="img-fluid float-left mr-3"
                        alt="Sample Image"
                      />
                    </div>
                    <div className="col-9">
                      <h3>Title</h3>
                      <div class="wd-search-result-text">
                        Year:
                        <br />
                        Cast:
                        <br />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="row p-3">
                    <div className="col-3">
                      <img
                        src="https://resizing.flixster.com/i2rZX63U5Q76gMjXCqYt2HCzd_8=/206x305/v2/https://flxt.tmsimg.com/assets/p8640628_p_v12_ar.jpg"
                        height="5px"
                        class="img-fluid float-left mr-3"
                        alt="Sample Image"
                      />
                    </div>
                    <div className="col-9">
                      <h3>Title</h3>
                      <div class="wd-search-result-text">
                        Year:
                        <br />
                        Cast:
                        <br />
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div class="row p-3">
                    <div className="col-3">
                      <img
                        src="https://resizing.flixster.com/i2rZX63U5Q76gMjXCqYt2HCzd_8=/206x305/v2/https://flxt.tmsimg.com/assets/p8640628_p_v12_ar.jpg"
                        height="5px"
                        class="img-fluid float-left mr-3"
                        alt="Sample Image"
                      />
                    </div>
                    <div className="col-9">
                      <h3>Title</h3>
                      <div class="wd-search-result-text">
                        Year:
                        <br />
                        Cast:
                        <br />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <label className="float-end">100 results</label>
              <br />
              <NextBtn />
              <br />
              <br />
              <label className="float-end">1 of 10 pages</label>
              <br />
              <br />
            </div>
          </div>
        </div>
      </>
    );
}

export default SearchResult;