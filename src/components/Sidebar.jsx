import Navigation from "./Navigation"
import Library from "./Library"
import "../assets/css/Sidebar.css"

export default function Sidebar() {
    return (
        <section className="sidebar w-25 pe-2 d-flex flex-column justify-content-between">
            <Navigation />
            <Library />
        </section>
    )
}