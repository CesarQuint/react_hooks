import { useContext, ChangeEvent } from "react";
import { BasicContext } from "./useContextHook";

const UseContexInput = () => {
  const { setState } = useContext(BasicContext);

  const updateContext = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="ttt" onChange={updateContext}></input>
    </div>
  );
};

export default UseContexInput;
