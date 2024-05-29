import "./App.css";
import UseStateExample from "./components/hooks/useStateHook";
import UseEffectExample from "./components/hooks/useEffectHook";
import UseContexInput from "./components/hooks/useContexInput";
import UseContextOutput from "./components/hooks/UseContextOutput";

function App() {
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
    </>
  );
}

export default App;
