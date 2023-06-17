import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

import "./index.css";
import "../../../ui-styling/index.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { findTopMovies } from '../../services/movies-service';
/* import CardFlip from 'react-card-flip'; */

function HomeCarousel() {
  const divStyle = {
    left: '6%',
    padding: '10px',
  };

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

  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const TOP_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular';
    const findTopMovies = async () => {
      const response = await axios.get(TOP_MOVIES_API, {
        params: {
          api_key: 'ffdfb660a1488ae7f304368f73e0e7ec',
        },
      })
      setTopMovies(response.data.results);
    };
    findTopMovies();

  }, [])



  const sliderImageUrl = [
    {
      url:
        "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
    },
    {
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
    }
  ];

  return (
    <div>
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
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              // <CardFlip>
              <Link to="">
                <div className="wd-slider p-0 m-0" key={index}>
                  <img src={imageUrl.url} alt="movie" />
                </div>
              </Link>

              // </CardFlip>
            );
          })}
        </Carousel>
      </div>
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
                  <Link to="">
                    <div className="wd-slider p-0 m-0" key={movie.id}>
                      <img src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie" />
                    </div>
                  </Link>

                )
              }
            )

          }
          {/* {sliderImageUrl.map((imageUrl, index) => {
              return (
                // <CardFlip>
                <div className="wd-slider p-0 m-0" key={index}>
                  <img src={imageUrl.url} alt="movie" />
                </div>
                // </CardFlip>
              );
            })} */}
        </Carousel>
      </div>
    </div>
  );
}
export default HomeCarousel;