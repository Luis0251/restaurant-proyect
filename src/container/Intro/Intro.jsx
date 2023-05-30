import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";
import { useRef, useState } from "react";

export const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlay((prevPlayVideo) => !prevPlayVideo);
    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        muted
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {play ? <BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};
