import React from "react";
import MyNav from "../nav";
import VideoBackground from "./video-background";
import HomeCarousel from "./home-carousel";
import HomeSearch from "./home-search";


function Home() {
    return (
        <div>
            <MyNav />
            <VideoBackground />
            <HomeCarousel />
            <HomeSearch />
        </div>
    );
}
export default Home;
