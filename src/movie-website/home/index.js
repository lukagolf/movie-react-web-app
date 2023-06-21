import React from "react";
import MyNav from "../../nav-components/nav";
import VideoBackground from "./video/video-background";
import HomeCarousel from "./carousel/carousel";
import HomeSearch from "./search/search";
import { useSelector } from "react-redux";
function Home() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("CURRENT USER HOME", currentUser);
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
          }}
        />
      ) : (
        <MyNav />
      )}

      <VideoBackground />
      <HomeCarousel />
      <HomeSearch />
    </div>
  );
}

export default Home;
