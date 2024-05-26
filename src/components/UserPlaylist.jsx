import "../assets/css/UserPlaylist.css"
let default_img_URL = "https://cdn3.vectorstock.com/i/1000x1000/37/32/404-error-page-not-found-vinyl-music-broken-vector-26853732.jpg";
export default function UserPlaylist({ image=default_img_URL, name="-/-", artist="-/-" }) {
  return (
    <div className="userPlaylist d-flex align-items-center p-2 ms-2">
      <img src={image} alt="playlist" className="user-pl-img me-2" />
      <div className="user-pl-info">
        <h6 className="m-0">{name}</h6>
        <p className="m-0 text-secondary">{artist}</p>
      </div>
    </div>
  );
}

// Playlist •