import { useState } from "react";

// カスタムフック定義
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);

  return { count, increment };
};

export default useCounter;
