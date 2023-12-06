import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function CarouselComponent({movie}) {
    const [displayOverlay, setDisplayOverlay] = useState(false);
    const handleMouseEnter = () => {
      setDisplayOverlay(true);
    };

    const handleMouseLeave = () => {
      setDisplayOverlay(false);
    };
  return (
    <Link
      to={{
        pathname: `/details/${movie.movie_id}`,
        state: { movie: movie },
      }}
    >
      <div
        className="wd-slider p-0 m-0 wd-centerOverlayOpacity"
        key={movie.movie_id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {displayOverlay && (
          <h4 className="wd-centerTextOverlay">{movie.title}</h4>
        )}
        <img
          src={movie.photo_url}
          alt="movie"
        />
      </div>
    </Link>
  );
}

export default CarouselComponent;
