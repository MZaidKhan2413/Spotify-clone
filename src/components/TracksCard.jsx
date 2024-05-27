import "../assets/css/TracksCard.css"
import { useContext, useState } from "react";
import truncateDescription from "../utils/truncateDescription.js";
import { FaPlay } from "react-icons/fa";
import { SpotifyContext } from "../contexts/SpotifyContext.jsx";

export default function TracksCard({ data }) {
    const [showPlay, setShowPlay] = useState(false);
    const {setMusicData} = useContext(SpotifyContext);
    
    function handleMouseEnter() {
        setShowPlay(true)
    }
    function handleMouseLeave() {
        setShowPlay(false)
    }
    function handleOnClick() {
        const currentTrackState = {
            is_playing: true,
            duration_ms: data.duration_ms,
            images: data.image,
            artists: data.artists,
            name: data.name,
            id: data.id,
            preview_url: data.preview_url,
        }
        setMusicData(prevData => ({
            ...prevData, currentTrackState
        }))
    }

    return (
        <div className="tracks_card p-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="tracks_cover">
                <img src={data.image} alt="tracks-img" className="tracks_img" />
                {
                    showPlay && 
                    <span className="play_btn z-3 rounded-circle d-flex justify-content-center align-items-center" onClick={()=>handleOnClick()}>
                        <FaPlay className="text-black"/>
                    </span>
                }
            </div>
            <h6 className="pt-2">{truncateDescription(data.name, 25)}</h6>
            <p className="pe-4">
                {truncateDescription(data.artists.join(", "), 45)}
            </p>
        </div>
    );
}
