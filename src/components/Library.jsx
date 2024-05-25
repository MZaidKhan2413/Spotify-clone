import { useContext, useEffect } from "react";
import { BiLibrary } from "react-icons/bi";
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import axios from "axios";

export default function Library() {
    const {token} = useContext(TokenContext);
    const {musicData, setMusicData} = useContext(SpotifyContext);
    useEffect(()=>{
        async function getPlaylist() {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: "Bearer "+token,
                }
            })

            const userPlaylists = response.data.items.map(({name, id})=>{
                return {name, id};
            });
            
            setMusicData((prevData) => ({
                ...prevData,
                userPlaylists,
            }));

        }
        getPlaylist()
    }, [token, setMusicData])

    return (
        <div className="library p-3 ps-4">
            <BiLibrary className="fs-4 me-3"/>
            <h6 className="fw-boler d-inline">Your Library</h6>
            <div className="playlists pt-4">
                {musicData.userPlaylists && musicData.userPlaylists.map((playlist, idx)=>(
                    <li className="py-1 fw-bold" key={idx}>
                        {playlist.name}
                    </li>
                ))}
            </div>
        </div>
    )
}