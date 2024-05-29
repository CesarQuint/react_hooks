import { useContext } from "react";
import { BasicContext } from "./useContextHook";

const UseContextOutput = () => {
  const { state } = useContext(BasicContext);
  return <div>{state}</div>;
};

export default UseContextOutput;
