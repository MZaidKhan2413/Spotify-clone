import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

export default function HeroHead() {

    // const serachTrack = (seacrhValue)=>{
    //     const res = axios.get(`https://api.spotify.com/v1/search?q=${seacrhValue}&type=album`, {
    //         headers: {
    //             Authorization: "Bearer "+ token,
    //         }
    //     })
    // }

    return (
        <div className="hero_head py-2">
            <div className="hero_head_top p-3 d-none d-md-flex justify-content-between align-items-center">
                <div>

                </div>
                <div className="d-flex align-items-center gap-2">
                    <a className="nav-btns px-3 py-1 rounded-pill" href="https://open.spotify.com/premium" target="_blank">Explore Premium</a>
                    <span className="nav-btns px-3 py-1 rounded-pill"><IoArrowDownCircleOutline />Install App</span>
                    <FaRegBell className="nav-btns p-2 rounded-circle" />
                </div>
            </div>
        </div>
    )
}