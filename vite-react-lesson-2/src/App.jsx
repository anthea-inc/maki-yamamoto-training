import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Layoutをインポート
import Layout from "./Layout";

// Greetingをインポート
import Greeting from "./Greeting";

// UserInfoをインポート
import UserInfo from "./UserInfo";

function App() {
  const [count, setCount] = useState(0);

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

      {/* Greeting コンポーネントを追加 */}
      <Greeting name="Anthea" />

      {/* Layout コンポーネントを追加 */}
      <Layout>
        <h2>Welcome!</h2>
        <p>This is a sample page.</p>
      </Layout>

      <Layout>
        <Greeting name="Anthea" />
        <Greeting name="Antheia" />
      </Layout>

      {/* UserInfo コンポーネントを追加 */}
      <div>
        <h1>ログイン状態の表示</h1>
        <h2>if-else パターン</h2>
        <UserInfo isLoggedIn={true} method="if" />
        <UserInfo isLoggedIn={false} method="if" />

        {/*
        ほぼ引用のためコメントアウトする
        
        <h2>三項演算子パターン</h2>
        <UserInfo isLoggedIn={true} method="ternary" />
        <UserInfo isLoggedIn={false} method="ternary" />
        <h2>論理AND パターン</h2>
        <UserInfo isLoggedIn={true} method="and" />
        <UserInfo isLoggedIn={false} method="and" />
     */}
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
    </>
  );
}

export default App;
