import { useEffect } from "react";

function UseEffectExample() {
  useEffect(() => {
    alert("Loaded");
  }, []);

  return (
    <>
      <p>This show an alert</p>
    </>
  );
}

export default UseEffectExample;
