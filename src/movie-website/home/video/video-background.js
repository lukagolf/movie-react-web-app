import React, {useEffect} from "react";
import "./index.css";
import "../../../ui-styling/index.css";
import ExploreBtn from "../../../ui-styling/buttons/text/exploreBtn";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { findMovieVideoThunk } from "../../services/movie-video-thunks";

function VideoBackground() {


  const { currentUser } = useSelector((state) => state.user);
    const { firstMovie } = useSelector((state) => state.newMovies);
    const {video} = useSelector(state => state.video);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("FIRST", firstMovie)
        dispatch(findMovieVideoThunk(firstMovie.id));
    }, [firstMovie]);

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
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="70vh"
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
        <div className="position-absolute" style={divStyle}>
          <div className="wd-text-container">
            <div className="position-relative">
              <div className="wd-vline" />
            </div>
            <div className="m-0">
              <h4 className="ps-4">Out Now</h4>
              <h1 className="ps-4">{firstMovie.original_title}</h1>
              <h5 className="ps-4 w-50">{firstMovie.overview}</h5>
            </div>
          </div>
          <div className="ps-4">
            <h4
              style={{ textTransform: "lowercase" }}
            >{`- Welcome ${currentUser? currentUser.roles[0] : ""} -`}</h4>
            <ExploreBtn />
          </div>
        </div>
      </div>
    );
}
export default VideoBackground;