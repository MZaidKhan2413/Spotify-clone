import "../assets/css/Player.css"
import { LuShuffle } from "react-icons/lu";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { BiRepeat } from "react-icons/bi";
import { SpotifyContext } from "../contexts/SpotifyContext";
import { useContext } from "react";
import UserPlaylist from "./UserPlaylist";

export default function Player() {
  const {musicData} = useContext(SpotifyContext);

  return (
    <section className="player w-100 position-absolute bottom-0 d-flex align-items-center row">
      <div className="currentTrack d-md-block d-none px-2 col-md-4 col-0">
        {musicData.currentTrackState && <UserPlaylist name={musicData.currentTrackState.name} image={musicData.currentTrackState.images} artist={musicData.currentTrackState.artists.join(", ")} />}
      </div>

      <div className="player_control col-md-4">
        <a href="https://open.spotify.com/premium" target="_blank">
        <div className="controls fs-4 d-flex justify-content-center align-items-center">
          <LuShuffle className="mx-2" />
          <GiPreviousButton className="mx-2" />
          {
            musicData.currentTrackState &&
            musicData.currentTrackState.is_playing ? 
            <MdOutlinePauseCircleFilled className="fs-1 mx-2" /> :
            <MdOutlinePlayCircleFilled className="fs-1 mx-2" />
          }
          <GiNextButton className="mx-2" />
          <BiRepeat className="mx-2" />
        </div>
        {musicData.currentTrackState && <span>{musicData.currentTrackState.duration_ms}</span>}
        <hr />
        </a>
      </div>

      <div className="volume_control d-none d-md-flex align-items-center justify-content-end col-md-4 col-0 pe-5">
        <RxSpeakerLoud className="me-3 fs-5" />
        <input type="range" name="volume" id="volume" min={0} max={100} className="form-range"/>
      </div>
    </section>
  )
}
