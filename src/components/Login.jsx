import Spotify_logo_black from "../assets/Spotify_logo_black.png";


async function getToken() {
  const API_URL = "https://accounts.spotify.com/authorize";
  const SPPOTIFY_CLIENT_ID="a6553d4fc0274795901491649192b2ac";
  const REDIRECT_URL="http://localhost:5173/";
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played"
  ]
  window.location.href = `${API_URL}?client_id=${SPPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope.join(" ")}&response_type=token&show_daialoge=true`;
}

export default function Login() {
  return (
    <div className="login d-flex flex-column align-items-center justify-content-center">
      <img src={Spotify_logo_black} alt="Spotify" className="mb-4" />
      <button className="btn fw-bold p-3" onClick={getToken}>Connect Spotify</button>
    </div>
  );
}
