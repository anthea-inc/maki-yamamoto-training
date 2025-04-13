import React, { useRef } from "react";

function FocusInput() {
  // useRefでrefオブジェクトを作成
  const inputRef = useRef(null);

  // ボタンクリック時に入力欄にフォーカスを当てる関数
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="ここに入力"
        style={{
          outline: "2px solid #00bfff",
          padding: "4px",
          borderRadius: "4px",
          backgroundColor: "#111",
          color: "#fff",
        }}
      />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        フォーカスを当てる
      </button>
    </div>
  );
}

export default FocusInput;
