import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./Floor";
import FpCamera from "./controls/FpCamera";
import EnvMap from "./EnvMap";

const World = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <FpCamera />
      <EnvMap />
      <Floor />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default World;
