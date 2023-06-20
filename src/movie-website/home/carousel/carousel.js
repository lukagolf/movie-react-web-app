import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import "../../../ui-styling/index.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { findNewMoviesThunk } from '../../services/new-movies-thunks';
import { findTopMoviesThunk } from '../../services/top-movies-thunks';
import { findAllSavedMoviesThunk } from '../../services/saved-movies-thunks';

function HomeCarousel() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1
    }
  };
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const { currentUser } = useSelector(state => state.user);
  const { newMovies } = useSelector((state) => state.newMovies);
  const { topMovies } = useSelector((state) => state.topMovies);
  const { savedMovies } = useSelector((state) => state.savedMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("CURRENT LOGGED IN ", currentUser);
    if (currentUser) {
      dispatch(findAllSavedMoviesThunk(currentUser._id));
    }
    dispatch(findNewMoviesThunk());
    dispatch(findTopMoviesThunk());
  }, [dispatch, currentUser]);

  const handleMouseEnter = () => {
    setDisplayOverlay(true);
  };

  const handleMouseLeave = () => {
    setDisplayOverlay(false);
  };

  return (
    <div>
      <br />
      {currentUser &&
        currentUser.role === "VIEWER" &&
        savedMovies.length > 0 && (
          <div>
            <div className="wd-carousel-title position-relative">
              <div className="wd-text-container">
                <h3 className="wd-purpleText">Saved Movies</h3>
              </div>
            </div>
            <div className="wd-carousel-parent">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
              >
                {savedMovies.map((movie) => {
                  return (
                    <Link to={{
                      pathname: `/details/${movie.id}`,
                      state: { movie: movie }
                    }}>
                      <div className="wd-slider p-0 m-0"
                        key={movie.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {displayOverlay && (
                          <h4 className="wd-centerTextOverlay">
                            {movie.title}
                          </h4>
                        )}
                        <img
                          src={
                            "http://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                          }
                          alt="movie"
                        />
                      </div>
                    </Link>
                  );
                })}
              </Carousel>
            </div>
          </div>
        )}
      <div className="wd-carousel-title position-relative">
        <div className="wd-text-container">
          <h3 className="wd-purpleText">Top Picks</h3>
        </div>
      </div>
      <div className="wd-carousel-parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
        >
          {
            topMovies.map(
              movie => {
                return (
                  <Link to={{
                    pathname: `/details/${movie.id}`,
                    state: { movie: movie }
                  }}>
                    <div
                      className={`wd-slider p-0 m-0 ${displayOverlay && "wd-overlayBgColor"
                        }`}
                      key={movie.id}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {displayOverlay && (
                        <h4 className="wd-centerTextOverlay">{movie.title}</h4>
                      )}
                      <div className="wd-slider p-0 m-0" key={movie.id}>
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie" />
                      </div>
                    </div>
                  </Link>

                )
              }
            )

          }
        </Carousel>
      </div>
      <div className="wd-carousel-title position-relative">
        <div className="wd-text-container">
          <h3 className="wd-purpleText">Latest Releases</h3>
        </div>
      </div>
      <div className="wd-carousel-parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
        >
          {
            newMovies.map(
              movie => {
                return (
                  <Link to={{
                    pathname: `/details/${movie.id}`,
                    state: { movie: movie }
                  }}>
                    <div
                      className={`wd-slider p-0 m-0 ${displayOverlay && "wd-overlayBgColor"
                        }`}
                      key={movie.id}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {displayOverlay && (
                        <h4 className="wd-centerTextOverlay">{movie.title}</h4>
                      )}
                      <div className="wd-slider p-0 m-0" key={movie.id}>
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie" />
                      </div>
                    </div>
                  </Link>
                )
              }
            )

          }
        </Carousel>
      </div>
      <br />
    </div>
  );
}

export default HomeCarousel;
