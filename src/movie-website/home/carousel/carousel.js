import React, { forwardRef, useEffect, useState } from 'react';
import "./index.css";
import "../../../ui-styling/index.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { findNewMoviesThunk } from '../../services/new-movies-thunks'; // these can maybe go away
import { findTopMoviesThunk } from '../../services/top-movies-thunks'; // ^
import { findCriticReviewsThunk } from '../../services/reviews-thunks'; // ^
import CriticCarouselComponent from './critic-carousel-component';
import CarouselComponent from './carousel-component';

const HomeCarousel = forwardRef(({movies, genre}, ref) => {
  const genreMovies = movies.filter(m => m.genres.includes(genre))
  console.log("I'M HERE genre is " + genre)
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
  const { currentUser } = useSelector(state => state.user);

  if (genreMovies.length < 4) {
    return(
      <></>
    )
  }

  return (
    <div>
      <br />
      <div ref={ref}>
        <div className="wd-carousel-title position-relative">
          <div className="wd-text-container">
            <h3 className="wd-purpleText">{genre}</h3>
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
            {genreMovies.map((movie) => {
              return <CarouselComponent movie={movie} />;
            })}
          </Carousel>
        </div>
      </div>
      <br />
    </div>
  );
});

export default HomeCarousel;
