import { useState } from "react";
import khanmigo from "/khanmigo.svg";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://khanmigo.ai" target="_blank">
          <img src={khanmigo} alt="Khanmigo" />
        </a>
      </div>
      <h1>Learning Coach</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};
