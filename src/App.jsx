import './App.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import graphic from '../src/assets/lottie/graphic.json'
function App() {
  return (
    <>
      <div className="flex justify-center">
        <Player
          autoplay
          loop
          src={graphic}
          style={{ height: "512px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </>
  )
}

export default App
