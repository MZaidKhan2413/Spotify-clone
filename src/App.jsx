import { useEffect } from "react";
import { SpotifyProvider } from "./contexts/SpotifyContext";
import { TokenProvider } from "./contexts/TokenContext";
// import Wrapper from './components/Wrapper'
import Login from "./components/Login";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const TOKEN = hash.substring(1).split("&")[0].split("=")[1];
      console.log(TOKEN);
    }
  }, []);
  
  return (
    <TokenProvider>
      <SpotifyProvider>
        <Login />
      </SpotifyProvider>
    </TokenProvider>
  );
}

export default App;
