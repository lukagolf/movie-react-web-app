// import React from "react";
// import SearchBtn from "../../ui-styling/buttons/icons/searchBtn";
// import "../../ui-styling/index.css";
// import "./index.css"
// import filterArray from "./filters.json";
// import genreArray from "./genres.json";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateSearch } from "../reducers/search-reducer";

// function SearchInput() {

//   const [search, setSearch] = useState("");
//   const [actor, setActor] = useState("");
//   const [director, setDirector] = useState("");
//   const [year, setYear] = useState();
//   const [genre, setGenre] = useState("");

//   const dispatch = useDispatch();

//   // make search inputs public to entire application by storing them
//   const searchBtn = () => {
//     dispatch(
//       updateSearch({
//         search: search,
//         actor: actor,
//         director: director,
//         year: year,
//         genre: genre,
//       })
//     );
//   }

//   return (
//     <>
//       <div className="container">
//         <h2 className="text-center wd-pinkText">Search Movie</h2>
//         <br />
//         <div className="wd-margin">
//           <div className="d-flex ">
//             <input
//               type="text"
//               className="form-control"
//               id="search-bar"
//               placeholder="Search movies"
//               onChange={(event) => setSearch(event.target.value)}
//             />
//             <SearchBtn fn={searchBtn} />
//           </div>
//           {/* <div className="row">
//             <div className="col-sm-12 col-md-11">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="search-bar"
//                 placeholder="Search movies"
//                 onChange={(event) => setSearch(event.target.value)}
//               />
//             </div>
//             <div className="col-sm-12 col-md-1 ">
//               <SearchBtn fn={searchBtn} />
//             </div>
//           </div> */}
//           {/* <div className="d-sm-block d-md-none">
//             <SearchBtn fn={searchBtn} />
//           </div> */}

//           <br />
//           <label>Filter by:</label>
//           <div id="filterForm">
//             <div className="form-group row">
//               <label
//                 for="actorFilter"
//                 className="col-sm-3 col-md-2 col-form-label mt-2"
//               >
//                 Actor
//               </label>
//               <div className="col-sm-9 col-md-10 mt-2">
//                 <input
//                   id="actorFilter"
//                   className="form-control w-75"
//                   type="text"
//                   onChange={(event) => setActor(event.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <label
//                 for="directorFilter"
//                 className="col-sm-3 col-md-2 col-form-label mt-2"
//               >
//                 Director
//               </label>
//               <div className="col-sm-9 col-md-10 mt-2">
//                 <input
//                   id="directorFilter"
//                   className="form-control w-75"
//                   type="text"
//                   onChange={(event) => setDirector(event.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <label
//                 for="yearFilter"
//                 className="col-sm-3 col-md-2 col-form-label mt-2"
//               >
//                 Year
//               </label>
//               <div className="col-sm-9 col-md-10 mt-2">
//                 <input
//                   id="yearFilter"
//                   className="form-control w-75"
//                   type="number"
//                   onChange={(event) => setYear(event.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="form-group row">
//               <label
//                 for="genreFilter"
//                 className="col-sm-3 col-md-2 col-form-label mt-2"
//               >
//                 Genre
//               </label>
//               <div className="col-sm-9 col-md-10 mt-2">
//                 <select
//                   className="form-select w-75"
//                   id="genreFilter"
//                   defaultValue={genre}
//                   onChange={(event) => {
//                     setGenre(event.target.value);
//                   }}
//                 >
//                   {genreArray.map((genre) => {
//                     return <option value={genre.value}>{genre.label}</option>;
//                   })}
//                 </select>
//               </div>
//             </div>
//             {/* <form id="filterForm"> */}
//             {/* {filterArray.map(filter => {
//               return (
//                 <div className="form-group row" key={filter.id}>
//                   <label for={filter.id} className="col-2 col-form-label mt-2">
//                     {filter.label}
//                   </label>
//                   <div className="col-10 mt-2">
//                     {filter.id === "genreFilter" ? (
//                       <select
//                         className="form-select w-50"
//                         id={filter.id}
//                         defaultValue={chosenGenre}
//                         onChange={(event) => {setChosenGenre(event.target.value); }}
//                       >
//                         {genreArray.map((genre) => {
//                           return (
//                             <option value={genre.value}>{genre.label}</option>
//                           );
//                         })}
//                       </select>
//                     ) : (
//                       <input
//                         id={filter.id}
//                         className="form-control w-50"
//                         type={filter.type}
//                       />
//                     )}
//                   </div>
//                 </div>
//               );
//             })} */}
//           </div>
//           {/* </form> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default SearchInput;