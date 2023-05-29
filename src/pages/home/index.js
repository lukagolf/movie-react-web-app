import React from "react";
import MyNav from "../../common-components/nav";
import VideoBackground from "./video/video-background";
import HomeCarousel from "./carousel/carousel";
import HomeSearch from "./search/search";

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
