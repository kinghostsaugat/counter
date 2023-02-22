import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return ( 
    <div className="App">
      <header>
        <h1>The Counter</h1>
      </header>
      <main>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((pervCount) => pervCount + 1)}>
          Increase
        </button>
        <button onClick={() => setCounter((pervCount) => pervCount - 1)}>
          {" "}
          Decrease{" "}
        </button>
        <button
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;
