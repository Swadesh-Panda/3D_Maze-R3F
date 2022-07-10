import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Environment } from "@react-three/drei";
import React from "react";

// Prefabs
import Ground from "../prefabs/Ground";
import Player from "../prefabs/Player";
import Enemy from "../prefabs/Enemy";
import { Damaged_Wall } from "../prefabs/Wall";
import Maze from "../prefabs/Maze";

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

        <Player position= {[0, 2, 8*7]} />

        <group name="enemy">
          <Enemy position={[8*4, 1, 8*8]} />
        </group>
        
        <Maze />


      </Physics>
      <PointerLockControls
        maxPolarAngle={Math.PI * 0.65}
        minPolarAngle={Math.PI * 0.35}
      />
    </>
  );
};

export default DefaultScene;
