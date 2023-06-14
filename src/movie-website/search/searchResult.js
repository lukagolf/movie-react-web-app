import React from "react";
import "./index.css";
import NextBtn from "../../ui-styling/buttons/icons/nextBtn";
import resultArray from "./results.json";


function SearchResult() {
  // TODO:
  const getNextPage = () => {
    console.log("retrieves results for next page")
  }
  return (
    <>
      <div className="">
        <div className="container">
          <div className="wd-margin">
            <div className="list-group ">
              {resultArray.map(result => {
                return (
                  <a
                    href={result.link}
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="row p-3 ">
                      <div className="col-md-5 col-lg-4">
                        <img
                          src={result.imgSrc}
                          height="5px"
                          className="img-fluid float-left mr-3"
                        />
                      </div>
                      <div className="col-md-7 col-lg-8">
                        <h3>{result.title}</h3>
                        <div className="wd-search-result-text d-none d-md-block">
                          {result.year}
                          <br />
                          {result.cast}
                          <br />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <label className="float-end">100 results</label>
            <br />
            <NextBtn fn={getNextPage} />
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