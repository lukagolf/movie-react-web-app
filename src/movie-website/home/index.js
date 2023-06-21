import React, { useRef } from "react";
import MyNav from "../../nav-components/nav";
import VideoBackground from "./video/video-background";
import HomeCarousel from "./carousel/carousel";
import HomeSearch from "./search/search";
import { useSelector } from "react-redux";
function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const topMoviesRef = useRef(null);

  console.log("CURRENT USER HOME", currentUser);
  return (
    <div style={{ "overflow-x": "hidden" }}>
      {currentUser ? (
        <MyNav
          options={{
            homePage: false,
            search: true,
            signIn: false,
            profile: true,
            signOut: true,
          }}
        />
      ) : (
        <MyNav />
      )}

      <VideoBackground topMovieRef={topMoviesRef}/>
      <HomeCarousel ref={topMoviesRef}/>
      <HomeSearch />
    </div>
  );
}

export default Home;
