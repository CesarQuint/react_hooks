import { useMemo, FC } from "react";

interface ExpensiveCalculationProps {
  a: number;
  b: number;
}

const ExpensiveCalculation: FC<ExpensiveCalculationProps> = ({ a, b }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    return a * b;
  }, [a, b]);

  return <p>Result: {result}</p>;
};

export default ExpensiveCalculation;
