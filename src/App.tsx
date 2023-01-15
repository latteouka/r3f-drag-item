import "./App.css";
import Pos from "./components/Pos";
import Scene from "./components/Scene";

function App() {
  console.log("app");
  return (
    <div className="">
      <div className="App">
        <Scene />
      </div>
      <Pos />
    </div>
  );
}

export default App;
