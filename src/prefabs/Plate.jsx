import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'

const Plate = ({...props}) => {
    const {scene} = useThree()
    const {position} = props;

    // Player
    const player = scene.getObjectByName("player");

    useFrame((_,delta) => {
        if(!player) return
        // if(position[0] == player.position.x && position[1] == player.position.y && position[2] == player.position.z)
        // console.log(position);
    })

  return (
    <group>

    </group>
  )
}

export default Plate