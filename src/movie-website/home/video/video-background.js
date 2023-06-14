import React from "react";
import "./index.css";
import "../../../ui-styling/index.css";
import ExploreBtn from "../../../ui-styling/buttons/text/exploreBtn";
import AdminBtn from "../../../ui-styling/buttons/text/adminBtn";

function VideoBackground() {
    const divStyle = {
        position: 'fixed',
        top: '50%',
        left: '6%',
        transform: 'translateY(-50%)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    };

    return (
        <div className="wd-video-background">
            <video autoPlay="autoplay" loop="loop" muted className="wd-video">
                <source src="media/home-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="position-absolute" style={divStyle}>
                <div className="wd-text-container">
                    <div className="position-relative">
                        <div className="wd-vline" />
                    </div>
                    <div className="m-0">
                        <div className="ps-4">Out Now</div>
                        <h1 className="ps-4">Sea Escape</h1>
                        <p className="ps-4">
                            I'm a paragraph. Click here to add your own text and edit me.<br />
                            It’s easy. Just click “Edit Text” or double click me to add your<br />
                            own content and make changes to the font.
                        </p>
                    </div>
                </div>
                <div className="ps-4">
                    <ExploreBtn /> {" "} <AdminBtn />
                </div>
            </div>
        </div>
    );
}
export default VideoBackground;