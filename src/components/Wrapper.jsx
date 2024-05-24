import Sidebar from './Sidebar';
import Hero from './Hero';
import Player from './Player';

export default function Wrapper() {
    return (
        <main className="wrapper d-flex p-2">
            <Sidebar />
            <Hero />
            <Player />
        </main>
    )
}