import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

export default function HeroHead() {
    return (
        <div className="hero_head">
            <div className="hero_head_top p-3 d-none d-md-flex justify-content-between align-items-center">
                <div>
                    <IoChevronBackCircle className="nav-icons"/>
                    <IoChevronForwardCircle className="nav-icons"/>
                </div>
                <div className="">
                    <a className="nav-btns px-3 py-1 rounded-pill" href="https://open.spotify.com/premium" target="_blank">Explore Premium</a>
                    <span className="nav-btns px-3 py-1 rounded-pill ms-2"><IoArrowDownCircleOutline />Install App</span>
                    <FaRegBell className="nav-btns p-2 rounded-circle ms-2" />
                    <span className="nav-btns p-2 rounded-circle ms-2" >Z</span>
                </div>
            </div>
        </div>
    )
}