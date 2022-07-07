import React from "react";
import Hollow from "../assets/models/Hollow";

const Enemy = () => {
  return (
    <>
      <group>
        <Hollow action={"idle"} position={[0,0,-2]} scale={0.1} />
      </group>
    </>
  );
};

export default Enemy;
