import "../assets/css/GlobalBox.css"
import axios from "axios"
import { useContext, useEffect } from "react"
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import PlaylistCard from "./PlaylistCard";

export default function GlobalBox() {
    const {token} = useContext(TokenContext);
    const {musicData, setMusicData} = useContext(SpotifyContext);
    useEffect(()=>{
        async function getPlaylists() {
            let response = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
                headers: {
                    Authorization: "Bearer "+ token,
                }
            });
            const featuredPlaylists = response.data.playlists.items.map((item)=>{
                return {
                    name: item.name,
                    id: item.id,
                    image: item.images[0].url,
                    description: item.description,
                    tracksURL: item.tracks.href,
                }
            })
            setMusicData((prevData) => ({
                ...prevData,
                featuredPlaylists,
            }));
        }
        getPlaylists()
    }, [token, setMusicData])
    
    return (
        <div className="global_box p-3">
            <h4 className="fw-bolder">Featured Playlists</h4>
            <div className="featured_playlists">
                {musicData.featuredPlaylists && musicData.featuredPlaylists.map((list)=>{
                    return (
                        <PlaylistCard key={list.id} data={list} />
                    )
                })}
            </div>
        </div>
    )
}