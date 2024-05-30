import "./App.css";
import UseStateExample from "./components/hooks/useStateHook";
import UseEffectExample from "./components/hooks/useEffectHook";
import UseContexInput from "./components/hooks/useContexInput";
import UseContextOutput from "./components/hooks/UseContextOutput";
import UseReducerHook from "./components/hooks/useReducerHook";
import SearchBar from "./components/hooks/useCallbackHook";
import ExpensiveCalculation from "./components/hooks/useMemoHook";
import InputWithFocus from "./components/hooks/UseRefHook";
import ResizableBox from "./components/hooks/useLayoutEffectHook";
import UseFetch from "./components/hooks/UseDebugValueHook";

function App() {
  const data = UseFetch({ url: "https://catfact.ninja/fact" });
  return (
    <>
      <h1>Hellow Again </h1>
      <section>
        <p>This is an example of the use of React Hooks</p>
      </section>
      <section>
        <h2>useState</h2>
        <UseStateExample />
      </section>
      <section>
        <h2>useEffect</h2>
        <UseEffectExample />
      </section>
      <h3>Those are the easiest hooks in react</h3>
      <section>
        <h2>UseContex</h2>
        <UseContexInput />
        <UseContextOutput />
      </section>
      <section>
        <h2>Use Reducer</h2>
        <UseReducerHook />
      </section>
      <section>
        <h2>Use Callback</h2>
        <SearchBar
          onSearch={() => {
            console.log("searching");
          }}
        />
      </section>
      <section>
        <h2>Use Memo</h2>
        <ExpensiveCalculation a={2} b={3} />
      </section>
      <section>
        <h2>Use Ref</h2>
        <InputWithFocus />
      </section>
      <section>
        <h2>Use ResizableBox</h2>
        <ResizableBox />
      </section>
      <section>
        <h2>Use ResizableBox</h2>
        <div>{data ? data.fact : "Loading..."}</div>
      </section>
    </>
  );
}

export default App;
