import { useState } from "react";

import { css } from "../src/styled-system/css";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Button from "./components/Button";
import Card from "./components/Card";

// ✅ styled() を使ったスタイル検出用ダミーBox

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Panda CSS のビルド対象に styled() を含めるため */}
      {/* <ForceBox display="none" /> */}

      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          gap: "4",
          mb: "4",
        })}
      >
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className={css({ h: "16", w: "16" })}
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={css({ h: "16", w: "16" })}
            alt="React logo"
          />
        </a>
      </div>

      <h1
        className={css({
          fontSize: "4xl",
          fontWeight: "bold",
          textAlign: "center",
          mb: "4",
          color: "white",
        })}
      >
        Vite + React + Panda CSS 🐼
      </h1>

      <Card title="お知らせ">
        <p>これはカードの本文です。</p>
      </Card>

      <button
        onClick={() => setCount((c) => c + 1)}
        className={css({
          bg: "blue.500",
          color: "white",
          fontWeight: "semibold",
          px: "4",
          py: "2",
          borderRadius: "md",
          _hover: { bg: "blue.600" },
          mb: "4",
        })}
      >
        count is {count}
      </button>

      <Button>カスタムボタン</Button>

      <p
        className={css({
          fontSize: "sm",
          mt: "4",
          color: "gray.700",
        })}
      >
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>

      <p
        className={css({
          fontSize: "xs",
          mt: "8",
          textAlign: "center",
          color: "gray.300",
        })}
      >
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
