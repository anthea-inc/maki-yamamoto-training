import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleList from "./SimpleList";
import ItemList from "./ItemList";

function App() {
  const [count, setCount] = useState(0);

  // SimpleList 用（文字列の配列）
  const fruits = ["リンゴ", "バナナ", "チェリー"];

  // ItemList 用（オブジェクトの配列）
  const fruitObjects = [
    { id: "a1", name: "リンゴ" },
    { id: "b2", name: "バナナ" },
    { id: "c3", name: "チェリー" },
  ];

  return (
    <div>
      <h2>SimpleList（文字列の配列）</h2>
      <SimpleList items={fruits} />

      <h2>ItemList（オブジェクトの配列）</h2>
      <ItemList items={fruitObjects} />

      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

// function のネストは JSX 内でしてはいけない
