import { useEffect, useRef } from "react";

const useVariable = (state) => {
  const varRef = useRef(state);

  useEffect(() => {
    varRef.current = state;
  }, [state]);

  return varRef;
};

export default useVariable