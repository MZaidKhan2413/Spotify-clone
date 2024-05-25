import { useContext, useEffect } from "react";
import { BiLibrary } from "react-icons/bi";
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import UserPlaylist from "./UserPlaylist";
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
            const userPlaylists = response.data.items.map(({name, id, images, owner})=>{
                return {name, id, images: images[0].url, owner: owner.display_name};
            });

            setMusicData((prevData) => ({
                ...prevData,
                userPlaylists,
            }));

        }
        getPlaylist()
    }, [token, setMusicData])

    return (
        <div className="library py-3 pe-3">
            <BiLibrary className="fs-4 me-3 ms-4"/>
            <h6 className="fw-boler d-inline">Your Library</h6>
            <div className="playlists pt-4">
                {musicData.userPlaylists && musicData.userPlaylists.map((playlist)=>(
                    <UserPlaylist key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}