import UI from "./Utils/UI"
import Crosshair from "./Utils/Crosshair"
import DefaultScene from "./scene/DefaultScene";
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
        camera={{ fov: 45 }}
      >
        <DefaultScene />
      </Canvas>
    </>
  )
}

export default Game