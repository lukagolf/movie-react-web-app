import React from "react";
import "./index.css";
import { Carousel } from "react-bootstrap";
import imageData from "./image-data";

function HomeCarousel() {
    const divStyle = {
        left: '6%',
        padding: '10px',
    };
    return (
        <div>
            <div className="wd-content" style={divStyle}>
                <div class="wd-text-container">
                    Latest Releases
                </div>
            </div>
            <Carousel>
                {imageData.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block"
                            src={image.src}
                            alt={image.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
export default HomeCarousel;
