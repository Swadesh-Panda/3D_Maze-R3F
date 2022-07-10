import { useCylinder } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { LoopOnce, Vector3 } from "three";

// hooks
import usePrevious from "../hooks/usePrevious";
// Models
import Knight from "../assets/models/Knight";



// Constants
const walkingSpeed = 1000;
const attackCoolDown = 1000;

const Enemy = ({ ...props }) => {
  const { camera, scene } = useThree();

  // Player
  const player = scene.getObjectByName("player");

  // Model
  const model = useRef()
  const [hp,setHp] = useState(100)

  // Model Body
  let [ref, api] = useCylinder(() => ({
    mass: 100,
    fixedRotation: true,
    args: [0.8, 0.8, 1.5, 10],
    material: {
      friction: 0.1,
    },
    ...props,
  }));

  // States
  const state = useRef({
    moving: false,
    attacking: false,
    impact: false,
    dead: false,

    canAttack: false,

    timeToAttack: 0,
    distance: 0,
    vel: [0,0,0],
  });

  //-----------------------------Set_Movement---------------------------//
  const SetMovement = (delta) => {

    let pos = new Vector3
    ref.current.getWorldPosition(pos)

    const x = camera.position.x - pos.x
    const z = camera.position.z - pos.z

    const d = Math.sqrt(x*x + z*z)
    state.current.distance = d

    if(d > 1.6 && d < 10)
    {
      // Moving state
      state.current.moving = true
      
      // Movement
      let velocity = new Vector3(0, 0, 0);
      let [horizontal,vertical] = [0,0]

      if(x > 0.2 || x < -0.2) horizontal = x/Math.abs(x)
      if(z > 0.2 || z < -0.2) vertical = z/Math.abs(z)

      velocity.lerp(new Vector3(horizontal * walkingSpeed ,0 , vertical * walkingSpeed), 0.2)
      velocity.clampLength(-walkingSpeed, walkingSpeed);
       
      api.velocity.set(velocity.x * delta, 0 ,velocity.z * delta)
    }
    else state.current.moving = false

    // Rotation
    if(d > 0 && d < 10) model.current.lookAt(camera.position.x, 0.5 , camera.position.z)
  };

  //-----------------------------Set_Animation---------------------------//
  let actions = null;
  let mixer = null;
  if (model.current) {
    actions = model.current.children[0].actions;
    mixer = model.current.children[0].mixer;
    actions["Idle"].play();
  }

  //   Initial State
  const [action, setAction] = useState("Idle");

  //   Mixer Finished Listener
  const Finished = () => {
    mixer.removeEventListener("finished", Finished);
    if(state.current.distance < 2)
      state.current.canAttack = true
    setAction("Idle");
  };
  const ImpactFinished = () => {
    mixer.removeEventListener("finished", ImpactFinished);
      state.current.impact = false
    setAction("Idle");
  };

  //   Set Action
  const prevAction = usePrevious(action);
  useEffect(() => {
    if (!prevAction || !actions || !mixer) return;

    switch (action) {
      case "Dead":
        actions[action].reset();
        actions[action].setLoop(LoopOnce, 1);
        actions[action].clampWhenFinished = true;
        actions[action].crossFadeFrom(actions[prevAction], 0.2);
        actions[action].play();
        break;

      case "Attack":
        if(state.current.impact) actions[action].stop()
        actions[action].reset();
        actions[action].setEffectiveTimeScale(2.5);
        actions[action].setEffectiveWeight(1.0);
        actions[action].setLoop(LoopOnce, 1);
        actions[action].clampWhenFinished = true;
        actions[action].crossFadeFrom(actions[prevAction], 0);
        actions[action].play();
        mixer.addEventListener("finished", Finished);
        break;

      case "Hit":
        actions[action].reset();
        actions[action].setEffectiveTimeScale(1);
        actions[action].setEffectiveWeight(2.0);
        actions[action].setLoop(LoopOnce, 1);
        actions[action].clampWhenFinished = true;
        actions[action].crossFadeFrom(actions[prevAction], 0);
        actions[action].play();
        mixer.addEventListener("finished", ImpactFinished);
        break;

      case "Walking":
        actions[action].time = 0.0;
        actions[action].enabled = true;
        actions[action].setEffectiveTimeScale(1.5);
        actions[action].setEffectiveWeight(1.0);
        actions[action].crossFadeFrom(actions[prevAction], 0.1);
        actions[action].play();
        break;

      case "Idle":
        actions[action].time = 0.0;
        actions[action].enabled = true;
        actions[action].setEffectiveTimeScale(0.5);
        actions[action].setEffectiveWeight(1.0);
        actions[action].crossFadeFrom(actions[prevAction], 0.25);
        actions[action].play();
        break;

      default:
        break;
    }
  }, [action]);
  const SetAnimation = () => {
    const { moving, attacking, impact, distance, dead } = state.current;

    switch (action) {
      case "Idle":
        if (dead) setAction("Dead")
        else if (impact) setAction("Hit")
        else if (distance < 2) setAction("Attack");
        else if (moving) setAction("Walking");
        break;

      case "Walking":
        if (dead) setAction("Dead")
        else if (impact) setAction("Hit")
        else if (!moving) setAction("Idle");
        break;

      case "Attacking":
        if (dead) setAction("Dead")
        else if (impact) setAction("Hit")
        

      default:
        break;
    }
  };

  //-----------------------------Set_Combat_System---------------------------//

  // Impact
  const prevHp = usePrevious(hp)
  useEffect(() => {
    if(prevHp > hp)
    {
      state.current.impact = true
      state.current.moving = false
    }

    if(hp == 0) state.current.dead = true 
  },[prevHp,hp])

  const SetCombat = () => {
    if (!player || !ref.current) return;
    
    // Attack
    if (state.current.distance < 2) {

      if (state.current.canAttack) {

        // Player Health
        if(! player.blocking) player.health -= 5;

        // Attack Cooldown
        state.current.canAttack = false
      }

    }

    // Set Health
    setHp(ref.current.health);
  };

  useFrame((_,delta) => {
    if(!state.current.dead) SetMovement(delta);
    SetAnimation();
    SetCombat();
  });

  return (
    <group ref={ref} userData={{ isParent: true }} health={100}>
      
      {/* HealthBar */}
        <Html scale={0.5} rotation={[0,0,0]} position={[0, 0.8, 0]} transform occlude>
            <div className="hpbar">
              HP: {hp}
            </div>
        </Html>

      {/* Model */}
      <group ref={model}>
        <Knight position={[0, -0.6, -0.5]} scale={0.4} />
      </group>
    </group>
  );
};

export default Enemy