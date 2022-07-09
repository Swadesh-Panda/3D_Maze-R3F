import UI from "./UI/UI"
import Crosshair from "./UI/Crosshair"
import DefaultScene from "./scenes/DefaultScene";
import { Canvas } from "@react-three/fiber";
import HealthBar from "./UI/HealthBar";

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