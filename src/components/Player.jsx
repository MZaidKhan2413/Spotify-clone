import "../assets/css/Player.css"
import { RxSpeakerLoud } from "react-icons/rx";
import { SpotifyContext } from "../contexts/SpotifyContext";
import { useContext } from "react";
import UserPlaylist from "./UserPlaylist";
import AudioPlayer from "./AudioPlayer";

export default function Player() {
  const {musicData} = useContext(SpotifyContext);

  return (
    <section className="player w-100 position-absolute bottom-0 d-flex align-items-center row">
      <div className="currentTrack d-md-block d-none px-2 col-md-4 col-0">
        {musicData.currentTrackState && <UserPlaylist name={musicData.currentTrackState.name} image={musicData.currentTrackState.images} artist={musicData.currentTrackState.artists.join(", ")} />}
      </div>

      <div className="player_control col-md-4">
        <AudioPlayer src={musicData.currentTrackState && musicData.currentTrackState.preview_url}/>
      </div>

      <div className="volume_control d-none d-md-flex align-items-center justify-content-end col-md-4 col-0 pe-5">
        <RxSpeakerLoud className="me-3 fs-5" />
        <input type="range" name="volume" id="volume" defaultValue={0} min={0} max={100}/>
      </div>
    </section>
  )
}
