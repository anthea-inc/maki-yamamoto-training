// App.jsx
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center p-6 space-y-8">
      {/* ロゴ部分 */}
      <div className="flex space-x-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-20 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-20 hover:rotate-12 transition-transform"
            alt="React logo"
          />
        </a>
      </div>

      {/* タイトル */}
      <h1 className="text-4xl font-bold text-yellow-400">
        Vite + React + Tailwind
      </h1>

      {/* カード表示（propsとして渡す） */}
      <Card
        title="Tailwindで作ったカード"
        content={
          <>
            <p className="text-sm text-gray-700 mb-4">
              こちらはTailwind CSSでスタイリングされたCardコンポーネントです。
            </p>
            <Button>Click me</Button>
          </>
        }
      />
    </div>
  );
}

export default App;
