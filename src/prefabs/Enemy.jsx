import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import Hollow from "../assets/models/Hollow";

const Enemy = ({...props}) => {
  const {scene} = useThree()


  //-----------------------------Set_Combat_System---------------------------//
  const player = scene.getObjectByName("player")
  const player_hp = document.getElementById("player_hp")

  const SetCombat = () => {
    if(! player) return

    player.health--;
    player_hp.style.width = player.health + '%'
  };

  useFrame(() => {
    SetCombat()
  })

  return (
    <group userData={ {isParent:true} } health={100} >
      {/* Model */}
    <Hollow action={"idle"} position={[0,0,-2]} scale={0.1} />
    </group>
  );
};

export default Enemy;
