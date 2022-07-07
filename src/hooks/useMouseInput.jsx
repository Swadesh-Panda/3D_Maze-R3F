import { useEffect, useState } from "react";

const useMouseInput = () => {
  const [keysPressed, setPressedKeys] = useState({ left:{}, right:{}});

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 2) {
        setPressedKeys((current) => ({ ...current, right:{hold: true, down: true} }));
      } else if (e.button === 0) {
        setPressedKeys((current) => ({ ...current, left:{hold: true, down: true} }));
      }
    };
    const handleMouseUp = (e) => {
      if (e.button === 2) {
        setPressedKeys((current) => ({ ...current, right:{hold: false, up: true} }));
      } else if (e.button === 0) {
        setPressedKeys((current) => ({ ...current, left:{hold: false, up: true} }));
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return keysPressed;
};

export default useMouseInput