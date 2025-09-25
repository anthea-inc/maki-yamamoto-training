import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter.jsx";
import Counter2 from "./Counter2.jsx";
import ThemeProvider from "./ThemeProvider.jsx";
import ThemedComponent from "./ThemedComponent.jsx";
import FocusInput from "./FocusInput.jsx";
import Counter5 from "./Counter5.jsx";
import CounterDisplayA from "./CounterDisplayA.jsx";
import CounterDisplayB from "./CounterDisplayB.jsx";

function App() {
  const [count, setCount] = useState(0);

  // テーマ用のstateを追加
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Counter />
        <Counter2 />

        {/* テーマ切り替えボタン */}
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          テーマを切り替え（現在: {theme}）
        </button>

        {/* テーマProviderの適用 */}
        <ThemeProvider value={theme}>
          <br></br>
          <ThemedComponent />
          <br></br>
        </ThemeProvider>
        <br></br>
        <FocusInput />
        <br></br>
        <Counter5 />
        <br></br>
        <CounterDisplayA />
        <br></br>
        <CounterDisplayB />
        <br></br>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
