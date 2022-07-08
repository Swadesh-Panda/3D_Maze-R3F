/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import usePrevious from '../../hooks/usePrevious'

export default function Model({action, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/player.glb')
  const { actions } = useAnimations(animations, group)
  
  if(group.current)
  {
    // Sword_Position
    const sword = group.current.getObjectByName("sword")
    sword.position.set(0,0,0)

    // Shield_Position
    const shield = group.current.getObjectByName("shield")
  }
  
  //-----------------------------Set_Animation---------------------------//
  if(actions["idle"]) actions["idle"].play()

  const prevAction = usePrevious(action)
  useEffect(() => {
    if(! prevAction) return

    actions[action].reset()
    actions[action].crossFadeFrom(actions[prevAction], 0.2)

    if("walk" || "run") actions[action].setEffectiveTimeScale(0.5)

    actions[action].play()
  }, [action])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="root" rotation={[Math.PI, 0, 0]}>
            <group name="pelvis" position={[0, 1.06, 96.75]} rotation={[0, -Math.PI / 2, 0]}>
              <group name="spine_01" position={[10.81, -0.85, 0]} rotation={[0, 0, -0.12]}>
                <group name="spine_02" position={[18.88, 3.8, 0]} rotation={[0, 0, 0.25]}>
                  <group name="spine_03" position={[13.41, 0.42, 0]} rotation={[0, 0, 0.04]}>
                    <group name="clavicle_l" position={[11.88, -2.73, -3.78]} rotation={[2.76, 1.35, -2.94]}>
                      <group name="upperarm_l" position={[15.78, 0, 0]} rotation={[0.43, 0.25, -0.31]}>
                        <group name="lowerarm_l" position={[30.34, 0, 0]} rotation={[0, 0, -0.9]}>
                          <group name="hand_l" position={[26.98, 0, 0]} rotation={[-3.05, 0.6, 0.96]}>
                            <group name="index_01_l" position={[12.07, 1.76, -2.11]} rotation={[-0.04, 0.07, 1.54]}>
                              <group name="index_02_l" position={[4.29, 0, 0]} rotation={[0.02, 0, 1.28]}>
                                <group name="index_03_l" position={[3.39, 0, 0]} rotation={[0.02, 0.01, 0.91]} />
                              </group>
                            </group>
                            <group name="middle_01_l" position={[12.24, 1.29, 0.57]} rotation={[-0.06, -0.09, 1.51]}>
                              <group name="middle_02_l" position={[4.64, 0, 0]} rotation={[-0.04, 0.01, 1.29]}>
                                <group name="middle_03_l" position={[3.65, 0, 0]} rotation={[-0.01, -0.08, 0.81]} />
                              </group>
                              <mesh name="shield" castShadow receiveShadow geometry={nodes.shield.geometry} material={materials.Sword_Shield_SG} rotation={[1.89, -0.45, -1.17]} scale={3.17} />
                            </group>
                            <group name="pinky_01_l" position={[10.14, 2.26, 4.64]} rotation={[-0.04, -0.33, 1.22]}>
                              <group name="pinky_02_l" position={[3.57, 0, 0]} rotation={[0.02, -0.02, 1.44]}>
                                <group name="pinky_03_l" position={[2.99, 0, 0]} rotation={[0.01, 0.07, 1.09]} />
                              </group>
                            </group>
                            <group name="ring_01_l" position={[11.5, 1.75, 2.85]} rotation={[-0.06, -0.24, 1.46]}>
                              <group name="ring_02_l" position={[4.43, 0, 0]} rotation={[0.01, -0.03, 1.41]}>
                                <group name="ring_03_l" position={[3.48, 0, 0]} rotation={[0.01, 0.05, 0.85]} />
                              </group>
                            </group>
                            <group name="thumb_01_l" position={[4.76, 2.37, -2.54]} rotation={[1.9, 0.43, -0.62]}>
                              <group name="thumb_02_l" position={[3.87, 0, 0]} rotation={[-0.02, 0.17, 0.26]}>
                                <group name="thumb_03_l" position={[4.06, 0, 0]} rotation={[0.04, 0, 0.63]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="clavicle_r" position={[11.88, -2.73, 3.78]} rotation={[-2.62, -1.39, 1]}>
                      <group name="upperarm_r" position={[-15.78, 0, 0]} rotation={[0.25, 0.14, -1.04]}>
                        <group name="lowerarm_r" position={[-30.34, 0, 0]} rotation={[0, 0, -1.41]}>
                          <group name="hand_r" position={[-26.98, 0, 0]} rotation={[-2.9, -0.02, -0.31]}>
                            <group name="index_01_r" position={[-12.07, -1.76, 2.11]} rotation={[0.05, -0.09, 1.47]}>
                              <group name="index_02_r" position={[-4.29, 0, 0]} rotation={[0.02, 0, 1.56]}>
                                <group name="index_03_r" position={[-3.39, 0, 0]} rotation={[0.02, 0.01, 0.95]} />
                              </group>
                            </group>
                            <group name="middle_01_r" position={[-12.24, -1.29, -0.57]} rotation={[-0.06, -0.21, 1.6]}>
                              <group name="middle_02_r" position={[-4.64, 0, 0]} rotation={[-0.04, 0.01, 1.39]}>
                                <group name="middle_03_r" position={[-3.65, 0, 0]} rotation={[-0.01, -0.08, 0.85]} />
                                <mesh name="sword" castShadow receiveShadow geometry={nodes.sword.geometry} material={materials.Sword_Main_SG} rotation={[0.61, 1, 1.1]} scale={2.47} />
                              </group>
                            </group>
                            <group name="pinky_01_r" position={[-10.14, -2.26, -4.64]} rotation={[-0.2, -0.51, 1.35]}>
                              <group name="pinky_02_r" position={[-3.57, 0, 0]} rotation={[0.02, -0.02, 1.47]}>
                                <group name="pinky_03_r" position={[-2.99, 0, 0]} rotation={[0.01, 0.07, 1.13]} />
                              </group>
                            </group>
                            <group name="ring_01_r" position={[-11.5, -1.75, -2.85]} rotation={[-0.14, -0.37, 1.56]}>
                              <group name="ring_02_r" position={[-4.43, 0, 0]} rotation={[0.01, -0.03, 1.49]}>
                                <group name="ring_03_r" position={[-3.48, 0, 0]} rotation={[0.01, 0.05, 0.81]} />
                              </group>
                            </group>
                            <group name="thumb_01_r" position={[-4.76, -2.38, 2.54]} rotation={[2.15, 0.42, -1.2]}>
                              <group name="thumb_02_r" position={[-3.87, 0, 0]} rotation={[0.04, 0.15, 1]}>
                                <group name="thumb_03_r" position={[-4.06, 0, 0]} rotation={[0.04, 0, 0.46]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="neck_01" position={[16.56, -0.36, 0]} rotation={[0, 0, -0.41]}>
                      <group name="head" position={[9.28, 0.36, 0]} rotation={[0, 0, 0.27]} />
                    </group>
                  </group>
                </group>
              </group>
              <group name="thigh_l" position={[-1.45, -0.53, -9.01]} rotation={[0.15, -0.13, -0.01]}>
                <group name="calf_l" position={[-42.57, 0, 0]} rotation={[-0.1, 0.04, -0.13]}>
                  <group name="calf_twist_01_l" position={[-20.48, 0, 0]} rotation={[0.01, 0, -0.02]} />
                  <group name="foot_l" position={[-40.2, 0, 0]} rotation={[-0.06, 0.07, 0.16]}>
                    <group name="ball_l" position={[-10.45, -16.58, 0.08]} rotation={[0, 0, -1.6]} />
                  </group>
                </group>
                <group name="thigh_twist_01_l" position={[-22.09, 0, 0]} rotation={[-0.09, 0, 0]} />
              </group>
              <group name="thigh_r" position={[-1.45, -0.53, 9.01]} rotation={[-0.15, 0.13, 3.13]}>
                <group name="calf_r" position={[42.57, 0, 0]} rotation={[-0.1, 0.04, -0.13]}>
                  <group name="calf_twist_01_r" position={[20.48, 0, 0]} rotation={[0.01, 0, -0.02]} />
                  <group name="foot_r" position={[40.2, 0, 0]} rotation={[-0.06, 0.07, 0.16]}>
                    <group name="ball_r" position={[10.45, 16.58, -0.08]} rotation={[0, 0, -1.6]} />
                  </group>
                </group>
                <group name="thigh_twist_01_r" position={[22.09, 0, 0]} rotation={[-0.09, 0, 0]} />
              </group>
            </group>
            <group name="ik_foot_root">
              <group name="ik_foot_l" position={[17.08, 8.07, 13.47]} rotation={[0, -Math.PI / 2, 0]} />
              <group name="ik_foot_r" position={[-17.08, 8.07, 13.47]} rotation={[-Math.PI, -1.57, 0]} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/player.glb')
