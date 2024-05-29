import { useReducer } from "react";

enum CountActionKind {
  INCREMENTED = "incremented_age",
  DECREASE = "decrease_age",
}

// An interface for our actions
interface ReducerActions {
  type: CountActionKind;
}

// An interface for our state
interface ReducerState {
  age: number;
}

function reducer(state: ReducerState, action: ReducerActions) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: CountActionKind.INCREMENTED });
        }}
      >
        Incrementar edad
      </button>
      <p>¡Hola! Tú tienes {state.age}.</p>
    </>
  );
}
