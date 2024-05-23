import Wrapper from './components/Wrapper'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Hero />
      <Player></Player>
    </Wrapper>
  )
}

export default App
