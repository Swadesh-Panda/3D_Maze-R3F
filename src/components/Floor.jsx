import React from "react";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow={true}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#333333" roughness="0.6" />
    </mesh>
  );
};

export default Floor;
