import React from "react";
import { usePlane } from "@react-three/cannon";
import { RepeatWrapping, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const Ground = () => {
  /** Plane collider */
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: {
      friction: 0,
    },
  }));

  const texture = useLoader(
    TextureLoader,
    "/textures/ground/Wall_stone_albedo.png"
  );
  texture.wrapS = texture.wrapT = RepeatWrapping;

  return (
    <mesh ref={ref} receiveShadow={true} scale={[1000, 1000, 1000]}>
      <planeBufferGeometry />
      <meshPhongMaterial
        receiveShadow
        
        map={texture}
        map-repeat={[240, 240]}
        
        color="gray"
      />
    </mesh>
  );
};

export default Ground;
