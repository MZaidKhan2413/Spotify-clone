import { createContext, useState } from "react";

export const SpotifyContext = createContext();

export function SpotifyProvider({children}) {
    const [musicData, setMusicData] = useState({
        userPlaylists: null,
        playlists: null,
        currentTrackState: null,
    });
    const providerValue = {musicData, setMusicData}
    return(
        <SpotifyContext.Provider value={providerValue}>
            {children}
        </SpotifyContext.Provider>
    )
}