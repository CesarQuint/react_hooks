import React, { useRef, useImperativeHandle } from "react";

interface InputProps {
  placeholder: string;
}

interface InputHandle {
  focus: () => void;
  value: string;
}

const Input = React.forwardRef<InputHandle, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    get value() {
      return inputRef.current?.value || "";
    },
  }));

  return <input type="text" ref={inputRef} placeholder={props.placeholder} />;
});

const App: React.FC = () => {
  const inputRef = useRef<InputHandle>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <Input ref={inputRef} placeholder="Type here" />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
};

export default App;
