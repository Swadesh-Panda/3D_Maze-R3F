import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Environment } from "@react-three/drei";
import React from "react";

// Prefabs
import Ground from "../prefabs/Ground";
import Player from "../prefabs/Player";
import Wall from "../prefabs/Wall"
import Damaged_Wall from "../prefabs/Damaged_Wall";

const Walls = ({num}) => {
  if(!num) return

  else return(
      <>
      <Damaged_Wall position={[num * 7.9, 1.5, 5]} type={"Static"} />
      <Walls num={num - 1} />
      </>
    )
  }

const DefaultScene = () => {
  return (
    <>
      <Environment
        background={true}
        files={[
          "left.jpg",
          "right.jpg",
          "top.jpg",
          "bottom.jpg",
          "back.jpg",
          "front.jpg",
        ]}
        path="/textures/skybox/"
      />

      <ambientLight intensity={1} />
      <directionalLight castShadow intensity={0.6} position={[100, 100, 100]} />

      <Physics
        gravity={[0, -9.81, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <Ground />
        <Player />
        <Walls num={5}/>


      </Physics>
      <PointerLockControls
        maxPolarAngle={Math.PI * 0.6}
        minPolarAngle={Math.PI * 0.4}
      />
    </>
  );
};

export default DefaultScene;
