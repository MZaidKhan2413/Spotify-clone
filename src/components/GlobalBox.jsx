import "../assets/css/GlobalBox.css"
import axios from "axios"
import { useContext, useEffect } from "react"
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import TracksList from "./TracksList";

export default function GlobalBox() {
    const {token} = useContext(TokenContext);
    const {musicData, setMusicData} = useContext(SpotifyContext);
    useEffect(()=>{
        async function getPlaylists() {
            let response = await axios.get("https://api.spotify.com/v1/browse/featured-playlists?limit=4", {
                headers: {
                    Authorization: "Bearer "+ token,
                }
            });
            const playlists = response.data.playlists.items.map((item)=>{
                return {
                    name: item.name,
                    id: item.id,
                    tracksURL: item.tracks.href,
                }
            })
            await setMusicData((prevData) => ({
                ...prevData,
                playlists,
            }));
        }
        getPlaylists()
    }, [token, setMusicData])
    
    if (musicData.playlists) return (
        <div className="global_box p-3">
            <audio src={musicData.currentTrackState && musicData.currentTrackState.preview_url} autoPlay controls></audio>
            {musicData.playlists.map(playlist => (
                <TracksList playlist={playlist} key={playlist.id}/>
            ))}
        </div>
    )
}