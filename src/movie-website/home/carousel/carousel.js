import React, {useEffect} from 'react';
import "./index.css";
import "../../../ui-styling/index.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { findNewMoviesThunk } from '../../services/new-movies-thunks';

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


    const { newMovies } = useSelector((state) => state.newMovies);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findNewMoviesThunk());
    }, [dispatch]);

    return (
      <div>
        <div className="wd-carousel-title position-relative">
          <div className="wd-text-container">
            <h3 className="wd-purpleText">Watchlist</h3>
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
            {newMovies.map((movie, index) => {
              return (
                <div className="wd-slider p-0 m-0" key={index}>
                  <img
                    src={
                      "http://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                    }
                    alt="movie"
                  />
                </div>
              );
            })}
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
            {newMovies.map((movie, index) => {
              return (
                <div className="wd-slider p-0 m-0" key={index}>
                  <img
                    src={
                      "http://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                    }
                    alt="movie"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>

      </div>
    );
}
export default HomeCarousel;