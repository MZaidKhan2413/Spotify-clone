import "../assets/css/Player.css"
import { LuShuffle } from "react-icons/lu";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled } from "react-icons/md";
import { BiRepeat } from "react-icons/bi";
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import UserPlaylist from "./UserPlaylist";
import convertTime from "../utils/convertTime.js";

export default function Player() {
  const {token} = useContext(TokenContext);
  const {musicData, setMusicData} = useContext(SpotifyContext);

  useEffect(()=>{
    async function currentTrackState() {
      const stateRes = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: "Bearer "+token,
          "Content-Type": "application/json"
        }
      })
      const {is_playing, item, progress_ms, timestamp} = stateRes.data;
      const currentTrackState = {
        is_playing,
        // progress_ms,
        // timestamp,
        duration_ms: convertTime(item.duration_ms),
        images: item.album.images[0].url,
        artists: item.album.artists.map((artist)=>(artist.name)),
        name: item.name,
        id: item.id,
      }
      setMusicData(prevData=>({
        ...prevData, currentTrackState
      }))
    }
    currentTrackState()
  }, [token, setMusicData, musicData.currentTrackState])



  return (
    <section className="player w-100 position-absolute bottom-0 d-flex align-items-center row">
      <div className="currentTrack px-2 col-4">
        {musicData.currentTrackState && <UserPlaylist name={musicData.currentTrackState.name} image={musicData.currentTrackState.images} artist={musicData.currentTrackState.artists.join(", ")} />}
      </div>

      <div className="player_control col-4">
        <div className="controls fs-4 d-flex justify-content-center align-items-center">
          <LuShuffle className="mx-2" />
          <GiPreviousButton className="mx-2" />
          {
            musicData.currentTrackState &&
            musicData.currentTrackState.is_playing ? 
            <MdOutlinePauseCircleFilled className="fs-1 mx-2" /> :
            <MdOutlinePlayCircleFilled className="fs-1 mx-2" onClick={()=>handlePlayerControl("play")}/>
          }
          <GiNextButton className="mx-2" />
          <BiRepeat className="mx-2" />
        </div>
        {musicData.currentTrackState && <span>{musicData.currentTrackState.duration_ms}</span>}
        <hr />
      </div>

      <div className="volume_control col-4">
        Volume
      </div>
    </section>
  )
}
