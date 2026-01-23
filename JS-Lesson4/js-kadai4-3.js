//　実践課題３

/* テンプレートリテラル（Template Literal）
	•	バッククォート（`）を使った文字列リテラルを使用
	•	変数や式を ${} の中に埋め込んで、簡潔に出力できる */

// １ブロック
console.log("===============");
console.log("Value:  1");
const a = 1;
console.log(
  `String: ${String(a)} (type: ${typeof String(a)})\n` +
    `Number: ${Number(a)} (type: ${typeof Number(a)})\n` +
    `Boolean: ${Boolean(a)} (type: ${typeof Boolean(a)})`
);
console.log("===============");

// ２ブロック
console.log("Value:  '1'");
const b = "1";
console.log(
  `String: ${String(b)} (type: ${typeof String(b)})\n` +
    `Number: ${Number(b)} (type: ${typeof Number(b)})\n` +
    `Boolean: ${Boolean(b)} (type: ${typeof Boolean(b)})`
);
console.log("===============");

// ３ブロック
console.log("Value:  -1");
const c = -1;
console.log(
  `String: ${String(c)} (type: ${typeof String(c)})\n` +
    `Number: ${Number(c)} (type: ${typeof Number(c)})\n` +
    `Boolean: ${Boolean(c)} (type: ${typeof Boolean(c)})`
);
console.log("===============");

// ４ブロック
console.log("Value:  '-1'");
const d = "-1";
console.log(
  `String: ${String(d)} (type: ${typeof String(d)})\n` +
    `Number: ${Number(d)} (type: ${typeof Number(d)})\n` +
    `Boolean: ${Boolean(d)} (type: ${typeof Boolean(d)})`
);
console.log("===============");

// ５ブロック
console.log("Value:  0");
const e = 0;
console.log(
  `String: ${String(e)} (type: ${typeof String(e)})\n` +
    `Number: ${Number(e)} (type: ${typeof Number(e)})\n` +
    `Boolean: ${Boolean(e)} (type: ${typeof Boolean(e)})`
);
console.log("===============");

// ６ブロック
console.log("Value:  '0'");
const f = "0";
console.log(
  `String: ${String(f)} (type: ${typeof String(f)})\n` +
    `Number: ${Number(f)} (type: ${typeof Number(f)})\n` +
    `Boolean: ${Boolean(f)} (type: ${typeof Boolean(f)})`
);
console.log("===============");

// ７ブロック
console.log("Value:  false");
const g = false;
console.log(
  `String: ${String(g)} (type: ${typeof String(g)})\n` +
    `Number: ${Number(g)} (type: ${typeof Number(g)})\n` +
    `Boolean: ${Boolean(g)} (type: ${typeof Boolean(g)})`
);
console.log("===============");

// ８ブロック
console.log("Value:  true");
const h = true;
console.log(
  `String: ${String(h)} (type: ${typeof String(h)})\n` +
    `Number: ${Number(h)} (type: ${typeof Number(h)})\n` +
    `Boolean: ${Boolean(h)} (type: ${typeof Boolean(h)})`
);
console.log("===============");

// ９ブロック
console.log("Value:  NaN");
const i = NaN;
console.log(
  `String: ${String(i)} (type: ${typeof String(i)})\n` +
    `Number: ${Number(i)} (type: ${typeof Number(i)})\n` +
    `Boolean: ${Boolean(i)} (type: ${typeof Boolean(i)})`
);
console.log("===============");

// １０ブロック
console.log("Value:  null");
const j = null;
console.log(
  `String: ${String(j)} (type: ${typeof String(j)})\n` +
    `Number: ${Number(j)} (type: ${typeof Number(j)})\n` +
    `Boolean: ${Boolean(j)} (type: ${typeof Boolean(j)})`
);
console.log("===============");

// １１ブロック
console.log("Value:  undefined");
const k = undefined;
console.log(
  `String: ${String(k)} (type: ${typeof String(k)})\n` +
    `Number: ${Number(k)} (type: ${typeof Number(k)})\n` +
    `Boolean: ${Boolean(k)} (type: ${typeof Boolean(k)})`
);
console.log("===============");

// １２ブロック
console.log("Value:  []");
const l = [];
console.log(
  `String: ${String(l)} (type: ${typeof String(l)})\n` +
    `Number: ${Number(l)} (type: ${typeof Number(l)})\n` +
    `Boolean: ${Boolean(l)} (type: ${typeof Boolean(l)})`
);
console.log("===============");

// １３ブロック
console.log("Value:  ''");
const m = "";
console.log(
  `String: ${String(m)} (type: ${typeof String(m)})\n` +
    `Number: ${Number(m)} (type: ${typeof Number(m)})\n` +
    `Boolean: ${Boolean(m)} (type: ${typeof Boolean(m)})`
);
console.log("===============");

// １４ブロック
console.log("Value:  [23]");
const n = [23];
console.log(
  `String: ${String(n)} (type: ${typeof String(n)})\n` +
    `Number: ${Number(n)} (type: ${typeof Number(n)})\n` +
    `Boolean: ${Boolean(n)} (type: ${typeof Boolean(n)})`
);
console.log("===============");

// １５ブロック
console.log("Value:  [10,23]");
const o = [10, 23];
console.log(
  `String: ${String(o)} (type: ${typeof String(o)})\n` +
    `Number: ${Number(o)} (type: ${typeof Number(o)})\n` +
    `Boolean: ${Boolean(o)} (type: ${typeof Boolean(o)})`
);
console.log("===============");

// １６ブロック
console.log("Value:  ' '");
const p = " ";
console.log(
  `String: ${String(p)} (type: ${typeof String(p)})\n` +
    `Number: ${Number(p)} (type: ${typeof Number(p)})\n` +
    `Boolean: ${Boolean(p)} (type: ${typeof Boolean(p)})`
);
console.log("===============");

// １７ブロック
console.log("Value:  ['fun']");
const q = ["fun"];
console.log(
  `String: ${String(q)} (type: ${typeof String(q)})\n` +
    `Number: ${Number(q)} (type: ${typeof Number(q)})\n` +
    `Boolean: ${Boolean(q)} (type: ${typeof Boolean(q)})`
);
console.log("===============");

// １８ブロック
console.log("Value:  ['fun','enjoy']");
const r = ["fun", "enjoy"];
console.log(
  `String: ${String(r)} (type: ${typeof String(r)})\n` +
    `Number: ${Number(r)} (type: ${typeof Number(r)})\n` +
    `Boolean: ${Boolean(r)} (type: ${typeof Boolean(r)})`
);
console.log("===============");

// １９ブロック
console.log("Value:  {}");
const s = {};
console.log(
  `String: ${String(s)} (type: ${typeof String(s)})\n` +
    `Number: ${Number(s)} (type: ${typeof Number(s)})\n` +
    `Boolean: ${Boolean(s)} (type: ${typeof Boolean(s)})`
);
console.log("===============");
