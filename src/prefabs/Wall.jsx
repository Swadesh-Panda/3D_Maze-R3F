import React, { Suspense, useMemo } from "react";
import { useBox } from "@react-three/cannon";
import niceColors from "nice-color-palettes";
import { useGLTF } from "@react-three/drei";

// Constants
const paletteIndex = 8;

const Walls = ({num, ...props}) => {
if(!num) return

else return(
  <>
    <Damaged_Wall position={[num * 7.9, 1.5, 5]} {...props} />
    <Walls num={num - 1} {...props} />
  </>
  )
}

const Wall = ({...props}) => {
  const [cubeRef] = useBox(() => ({
    mass: 1,
    args: [2, 3, 0.5],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props,
  }));

  /** Random cube color */
  const color = useMemo(
    () =>
      niceColors[paletteIndex][
        Math.floor(Math.random() * niceColors[paletteIndex].length)
      ],
    []
  );

  return (
    <mesh ref={cubeRef} castShadow {...props}>
      <boxBufferGeometry args={[2, 3, 0.5]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

const Damaged_Wall = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/Damaged_Wall.glb')
  
  const [cubeRef] = useBox(() => ({
    mass: 1,
    args: [8, 3, 0.5],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));

  return (
    <Suspense fallback={null}>
      <group ref={cubeRef} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0,-1.55,0]} scale={[0.04,0.02,0.04]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Default_OBJ} />
        </group>
      </group>
    </Suspense>
  )
}
useGLTF.preload('/models/Damaged_Wall.glb')

export { Wall ,Damaged_Wall, Walls}