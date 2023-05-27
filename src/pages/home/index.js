import React from "react";
import MyNav from "../nav";
import VideoBackground from "./video-background";
import HomeCarousel from "./home-carousel";


function Home() {
    return (
        <div>
            <MyNav />
            <VideoBackground />
            <HomeCarousel />
        </div>
    );
}
export default Home;
