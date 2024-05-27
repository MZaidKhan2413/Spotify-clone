import { useContext, useEffect, useState } from "react";
import PlaylistCard from "./TracksCard";
import { TokenContext } from "../contexts/TokenContext";
import axios from "axios";
import convertTime from "../utils/convertTime";

export default function TracksList({playlist}) {
    const {token} = useContext(TokenContext);
    const [tracks, setTracks] = useState([])

    useEffect(()=>{
        async function getTracks() {
            const response = await axios.get(`${playlist.tracksURL}?limit=10`, {
                headers: {
                    Authorization: "Bearer "+token
                }
            })
            const resTracks = response.data.items.map(resTrack => resTrack.track).map(track => {
                return {
                    name: track.name,
                    id: track.id,
                    artists: track.artists.map(artist => artist.name),
                    image: track.album.images[0].url,
                    preview_url: track.preview_url,
                    duration_ms: convertTime(track.duration_ms),
                }
            });
            // console.log(resTracks)
            setTracks(resTracks)
        }
        getTracks()
    }, [token, setTracks])
    return (
        <>
            <h3 className="fw-bolder">{playlist.name}</h3>
            <div className="featured_playlists">
                {tracks && tracks.map((track)=>{
                    return (
                        <PlaylistCard key={track.id} data={track} />
                    )
                })}
            </div>
            <br /><br />
        </>
    )
}