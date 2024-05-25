import HeroHead from "./HeroHead";
import GlobalBox from "./GlobalBox";
import "../assets/css/Hero.css"

export default function Hero() {
    return (
        <section className="hero w-75">
            <HeroHead />
            <GlobalBox />
        </section>
    )
}