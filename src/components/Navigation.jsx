import { useState, useContext } from 'react';
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TokenContext } from "../contexts/TokenContext";
import { SpotifyContext } from "../contexts/SpotifyContext";
import axios from "axios"

export default function Navigation() {
  const {token} = useContext(TokenContext);
  const {setMusicData} = useContext(SpotifyContext);

  const [navs, setNavs] = useState([
    { value: "Home", isActive: true, logo: <MdHomeFilled className="fs-2 me-3"/> },
    { value: "Search", isActive: false, logo: <IoIosSearch className="fs-2 me-3"/> },
  ]);

  const handleOnClick = (clickedNav) => {
    const updatedNavs = navs.map((nav) => ({
      ...nav,
      isActive: nav.value === clickedNav.value,
    }));
    setNavs(updatedNavs);

    clickedNav.value === "Home" && getPlaylists()
  };

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
    setMusicData((prevData) => ({
        ...prevData,
        playlists,
    }));
}

  return (
    <nav className="navigation p-3 d-flex flex-column justify-content-evenly">
      {navs.map((nav, idx) => (
        <li className="p-1" key={idx}>
          <button 
            onClick={() => handleOnClick(nav)} 
            className={nav.isActive ? "fw-bold fs-6 active" : "fw-bold fs-6"}
          >
            {nav.logo}
            {nav.value}
          </button>
        </li>
      ))}
    </nav>
  );
}
