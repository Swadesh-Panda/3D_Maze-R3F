import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Environment } from "@react-three/drei";
import React from "react";

// Prefabs
import Ground from "../prefabs/Ground";
import Player from "../prefabs/Player";
import Enemy from "../prefabs/Enemy";
import { Wall, Walls } from "../prefabs/Wall"

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

        <Walls num={5} type={"Static"} rotation={[0,Math.PI * 0.5,0]}/>

        <group name="enemy">
          <Enemy />
        </group>


      </Physics>
      <PointerLockControls
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * 0.35}
      />
    </>
  );
};

export default DefaultScene;
