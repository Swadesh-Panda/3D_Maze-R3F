import UI from "./Utils/UI"
import Crosshair from "./Utils/Crosshair"
import DefaultScene from "./scenes/DefaultScene";
import { Canvas } from "@react-three/fiber";

const Game = () => {
  return (
    <>
      <UI>
        <Crosshair />
      </UI>
      <Canvas 
        shadows
        gl={{ alpha: false }}
        camera={{ fov: 50 }}
      >
        <DefaultScene />
      </Canvas>
    </>
  )
}

export default Game