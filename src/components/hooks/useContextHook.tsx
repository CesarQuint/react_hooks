import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IContext {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

// Initialize your context with a default setState function that does nothing
export const BasicContext = createContext<IContext>({
  state: "",
  setState: () => {},
});

const MyProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState("Global");

  return (
    <BasicContext.Provider value={{ state, setState }}>
      {children}
    </BasicContext.Provider>
  );
};

export default MyProvider;
