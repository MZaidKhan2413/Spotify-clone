import "../assets/css/PlaylistCard.css"
import { useState } from "react";
import truncateDescription from "../utils/truncateDescription.js";
import { FaPlay } from "react-icons/fa";
export default function PlaylistCard({ data }) {
    const [showPlay, setShowPlay] = useState(false);
    
    function handleMouseEnter() {
        setShowPlay(true)
    }
    function handleMouseLeave() {
        setShowPlay(false)
    }

    return (
        <div className="playlist_card p-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="playlist_cover">
                <img src={data.image} alt="playlist-img" className="playlist_img" />
                {
                    showPlay && 
                    <span className="play_btn z-3 rounded-circle d-flex justify-content-center align-items-center">
                        <FaPlay className="text-black"/>
                    </span>
                }
            </div>
            <h6 className="pt-2">{data.name}</h6>
            <p className="pe-4">
                {truncateDescription(data.description, 50)}
            </p>
        </div>
    );
}
