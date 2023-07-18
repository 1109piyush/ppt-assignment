import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <p className="count">{ count }</p>
        <div className="button-container">
          <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        </div>
        
      </div>
    </>
  );
}

export default App;
