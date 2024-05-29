import "./App.css";
import UseStateExample from "./components/hooks/useStateHook";
import UseEffectExample from "./components/hooks/useEffectHook";

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
      <h2>Those are the easiest hooks in react</h2>
    </>
  );
}

export default App;
