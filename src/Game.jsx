import UI from "./Utils/UI"
import Crosshair from "./Utils/Crosshair"
import DefaultScene from "./scenes/DefaultScene";
import { Canvas } from "@react-three/fiber";
import HealthBar from "./Utils/HealthBar";

const Game = () => {
  return (
    <>
      <UI>
        <Crosshair />
        <HealthBar />
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