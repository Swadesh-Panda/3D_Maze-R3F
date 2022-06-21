import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Input from "./Input";

const FpCamera = () => {
  const pLock = useRef();
  const input = new Input();

  const setMovement = () => {
    if (input.keys.forward) pLock.current.moveForward(0.05);
    if (input.keys.backward) pLock.current.moveForward(-0.05);
    if (input.keys.right) pLock.current.moveRight(0.05);
    if (input.keys.left) pLock.current.moveRight(-0.05);
  };

  useFrame(() => {
    if (!pLock.current.isLocked) return;

    setMovement();
  });

  return (
    <>
      <PointerLockControls ref={pLock} />
    </>
  );
};

export default FpCamera;
