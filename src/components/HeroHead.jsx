import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import axios from "axios";

export default function HeroHead() {
    const [searchValue, setSearchValue] = useState("");
    const {token} = useContext(TokenContext);
    const {musicData, setMusicData} = useContext(SpotifyContext);

    const handleOnChange = (event)=>{
        setSearchValue(event.target.value)
    }
    const handleKeyDown = (event)=>{
        event.key === "Enter" && serachTrack()
    }
    const serachTrack = async ()=>{
        const res = await axios.get(`https://api.spotify.com/v1/search?q=${searchValue}&type=playlist&limit=1`, {
            headers: {
                Authorization: "Bearer "+ token,
            }
        })
        const {id, tracks} = res.data.playlists.items[0]
        const searchedTrack = {
            name: `Seacrh related to: ${searchValue}`,
            id,
            tracksURL: tracks.href,
        }
        setMusicData((prevData) => ({
            ...prevData,
            playlists: [searchedTrack],
        }));
    }

    return (
        <div className="hero_head py-2">
            <div className="p-3 d-flex justify-content-between align-items-center">
                <div className="search px-3 p-1 d-flex align-items-center gap-1 rounded-pill">
                    <button onClick={serachTrack} className="btn p-0 text-light fs-4 fw-bold"><IoSearchOutline /></button>
                    <input type="text" value={searchValue} onChange={handleOnChange} onKeyDown={handleKeyDown} className="px-3" placeholder="What do you want to play ?"/>
                </div>
                <div className="d-md-flex d-none align-items-center gap-2">
                    <a className="nav-btns px-3 py-1 rounded-pill" href="https://open.spotify.com/premium" target="_blank">Explore Premium</a>
                    <span className="nav-btns px-3 py-1 rounded-pill"><IoArrowDownCircleOutline />Install App</span>
                    <FaRegBell className="nav-btns p-2 rounded-circle" />
                </div>
            </div>
        </div>
    )
}