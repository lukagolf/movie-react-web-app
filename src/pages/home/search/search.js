import React from "react";
import "./index.css";
import "../index.css";
import SearchBtn from "../../../ui-styling/buttons/searchBtn";


function HomeSearch() {
    return (
        <>
            <div class="wd-outer-div">
                <div class="wd-inner-div">
                    <h1 class="mb-4">Search for movies</h1>
                    <div class="d-flex justify-content-center">
                        <input type="text" class="form-control" id="search-bar"
                            placeholder="Search movies, actors, directors..." />
                        <SearchBtn />
                    </div>
                </div>
                <div class="wd-inner-div">
                    <h1 class="mb-4">Add movie</h1>
                    <div class="form-group row mb-2">
                        <label for="cast" class="col-sm-1 col-form-label me-5">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="cast" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="year" class="col-sm-1 col-form-label me-5">Year</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="year" placeholder="Enter Year" />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="genre" class="col-sm-1 col-form-label me-5">Cast</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="genre" placeholder="Enter Cast" />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label for="genre" class="col-sm-1 col-form-label me-5">Synopsis</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="genre" placeholder="Enter Synopsis" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="genre" class="col-sm-1 col-form-label me-5">Rating</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="genre" placeholder="Enter Rating: 0-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeSearch;