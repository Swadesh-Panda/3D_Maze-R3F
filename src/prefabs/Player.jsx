import { Suspense, useEffect, useRef, useState } from "react";
import { useBox, useCylinder, useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { MathUtils, Raycaster, Vector3 } from "three";
import Weapon from "../assets/models/Weapon"
import useVariable from "../hooks/useVariable"
import useKeyboardInput from "../hooks/useKeyboardInput"
import useMouseInput from "../hooks/useMouseInput"

// Constants
const walkSpeed = 200;
const runSpeed = 400;

const attackSpeed = 30;
const attackCoolDown = 800;

const jumpSpeed = 4;
const jumpCoolDown = 800;

const Player = (props) => {
  const { camera, scene } = useThree();

  // Weapon Ref
  const weapon = useRef();
  // Action State
  const [action, setAction] = useState("idle")
  // Player Body
  let [ref, api] = useCylinder(() => ({
    mass: 100,
    fixedRotation: true,
    position: [0, 2, 0],
    args: [0.8,0.8,2.2,10],
    material: {
      friction: 0
    },
    ...props
  }));
  
  // Input Hooks
  const pressed_key = useKeyboardInput(["w", "a", "s", "d", " ", "shift"]);
  const pressed_mouse = useMouseInput();

  // Input Refs
  const input = useVariable(pressed_key);
  const mouseInput = useVariable(pressed_mouse);

  // States
  const state = useRef({
    jumping: false,
    moving: false,
    blocking: false,
    
    timeToAttack: 0,
    timeTojump: 0,
    vel: [0, 0, 0],
  });
  // Animations
  const animations = {

  }

  useEffect(() => {
    api.velocity.subscribe((v) => (state.current.vel = v));
  }, [api]);




  //-----------------------------Set_Player_Movement---------------------------//
  const SetMovement = (delta) => {
    let velocity = new Vector3(0, 0, 0);
    let forward = new Vector3();
    let right = new Vector3();

    ref.current.getWorldPosition(camera.position);
    forward.setFromMatrixColumn(camera.matrix, 0);
    forward.crossVectors(camera.up, forward);
    right.setFromMatrixColumn(camera.matrix, 0);

    // Keys
    const { w, s, a, d, shift } = input.current;
    const space = input.current[" "];

    let [horizontal, vertical] = [0, 0];
    if (w) vertical += 1;
    if (s) vertical -= 1;
    if (d) horizontal += 1;
    if (a) horizontal -= 1;
    

    // Mesh Movement
    let speed = walkSpeed

    if(shift) speed = runSpeed
    else speed = walkSpeed

    if (horizontal !== 0 && vertical !== 0) {
      velocity
        .add(forward.clone().multiplyScalar(speed * vertical))
        .add(right.clone().multiplyScalar(speed * horizontal));
      velocity.clampLength(-speed, speed);
    }
    else if (horizontal !== 0) {
      velocity.add(right.clone().multiplyScalar(speed * horizontal));
    }
    else if (vertical !== 0) {
      velocity.add(forward.clone().multiplyScalar(speed * vertical));
    }

    if(horizontal || vertical) state.current.moving = true
    else state.current.moving = false

    // Body Movement
    api.velocity.set(
      velocity.x * delta,
      state.current.vel[1],
      velocity.z * delta
    );

    
    // Ground Check
    if (state.current.jumping && state.current.vel[1] < 0) {

      let p = new Vector3()
      ref.current.getWorldPosition(p)

      const groundCheck = new Raycaster(
        p,
        new Vector3(0, -1, 0),
        0,
        1.2
      );
      const intersects = groundCheck.intersectObjects(scene.children);

      if(intersects.length !== 0) state.current.jumping = false;
    }

    // Jumping
    if (space && !state.current.jumping) {
      const now = Date.now();

      if (now > state.current.timeTojump) {
        // Jump Speed
        api.velocity.set(state.current.vel[0], jumpSpeed, state.current.vel[2]);
        
        // Jump CoolDown
        state.current.jumping = true;
        state.current.timeTojump = now + jumpCoolDown;
      }
    }
    
    // Weapon Movement
    let q = new Vector3()
    weapon.current.position.y = 1
    weapon.current.rotation.copy(camera.rotation);
    weapon.current.position.copy(camera.position).add(camera.getWorldDirection(q).multiplyScalar(1));
    
  }

  //-----------------------------Set_Combat_System---------------------------//
  const SetCombat = (delta) => {

    // Attack
    if (mouseInput.current.left) {

      const now = Date.now();
      if(now >= state.current.timeToAttack) {
        // Raycaster
        const raycaster = new Raycaster()
        let offset = {x:0, y:0}
        raycaster.setFromCamera(offset, camera)
        raycaster.far = 4
        
        // Targets
        const target = scene.getObjectByName("enemy")
        const hits = raycaster.intersectObject(target)

        if(hits[0]) {
          hits[0].object.parent.health --;
          console.log(hits[0].object.parent.health);
        }
        
        // Attack Cooldown
        state.current.timeToAttack = now + attackCoolDown;
      }

    }

    // Defend
    if (mouseInput.current.right) {
      const {shift} = input.current
      const {moving, jumping} = state.current

      if( (moving && shift) || jumping) state.current.blocking = false
      else state.current.blocking = true
    }
    else state.current.blocking = false

  }

  //-----------------------------Set_Animation---------------------------//
  const SetAnimation = (delta) => {
    const {shift} = input.current
    const {moving,jumping,blocking} = state.current
    const {left, right} = mouseInput.current

    switch (action) {
      case "idle":
        if(moving) setAction("walk")
        if(left) setAction("attack_left")
        if(blocking) setAction("block_loop")
        break;
    
      case "walk":
        if(moving)
        {
          if(shift) setAction("run")
          if(left) setAction("attack_left")
        }
        else setAction("idle")
        break;
            
      case "run":
        if(moving)
        {
          if(!shift) setAction("walk")
        }
        else setAction("idle")
        break;       

      case "attack_left":
        if(!left) setAction("idle")
        break;

      case "block_loop":
        if(!blocking) setAction("idle")
        break;
    
      default:
        break;
    }
  }

  useFrame((state,delta) => {
    SetMovement(delta)
    SetCombat(delta)
    SetAnimation(delta)

  });

  return (
    <>
      <group ref={weapon} >
        <Suspense fallback={null}>
          <Weapon action={action} position={[0, -1, 1]} rotation={[0, Math.PI * 0.96, 0]} scale={0.6} />
        </Suspense>
      </group>
    </>
  );
};

export default Player;