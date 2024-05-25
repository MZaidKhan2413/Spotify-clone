import "../assets/css/UserPlaylist.css"

export default function UserPlaylist({ playlist }) {
  return (
    <div className="userPlaylist d-flex align-items-center p-2 ms-2">
      <img src={playlist.images} alt="playlist" className="user-pl-img me-2" />
      <div className="user-pl-info">
        <h6 className="m-0">{playlist.name}</h6>
        <p className="m-0">Playlist • {playlist.owner}</p>
      </div>
    </div>
  );
}
