import React, { useRef } from "react";
import MyNav from "../../nav-components/nav";
import VideoBackground from "./video/video-background";
import HomeCarousel from "./carousel/carousel";
import HomeSearch from "./search/search";
import { useSelector } from "react-redux";
function Home() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("HOME: CURRENT USER IS " + JSON.stringify(currentUser))
  const topMoviesRef = useRef(null);

  return (
    <div style={{ "overflow-x": "hidden" }}>
      {currentUser ? (
        <MyNav
          options={{
            homePage: true,
            search: true,
            signIn: false,
            profile: true,
            signOut: true,
            addMovie: false
          }}
        />
      ) : (
        <MyNav
          options={{
            homePage: true,
            search: true,
            signIn: true,
            profile: false,
            signOut: false,
            addMovie: true
          }}
        />
      )}

      <VideoBackground topMovieRef={topMoviesRef} />
      <HomeCarousel ref={topMoviesRef} />
      <HomeSearch />
    </div>
  );
}

export default Home;
