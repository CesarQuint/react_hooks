import { useState, useLayoutEffect, useRef, FC } from "react";

const ResizableBox: FC = () => {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (boxRef.current) {
        setWidth(boxRef.current.clientWidth);
        setHeight(boxRef.current.clientHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "50%",
        margin: "auto",
        height: "50%",
        backgroundColor: "red",
      }}
    >
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default ResizableBox;
