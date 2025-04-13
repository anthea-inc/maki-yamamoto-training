import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <p>現在のテーマ: {theme}</p>
      <button onClick={toggleTheme}>
        {theme === "dark"
          ? "☀️ ライトモードに切り替え"
          : "🌙 ダークモードに切り替え"}
      </button>
    </>
  );
};

export default ThemedComponent;
