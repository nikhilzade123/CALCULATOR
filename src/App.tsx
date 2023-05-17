import "./App.css";
import { useState } from "react";

const App = () => {
  let [cur, setcur] = useState("");
  let ops = ["+", "-", "*", "/"];
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  function handler(key: string) {
    if (
      (ops.includes(key) && cur == "") ||
      (ops.includes(key) && ops.includes(cur.slice(-1)))
    ) {
      setcur(cur + "");
    } else if (ops.includes(key) && cur != "") {
      setcur(cur + key);
    } else if (num.includes(key)) {
      setcur(cur + key);
    }

    if (key === "del") {
      if (cur != "") {
        setcur(cur.slice(0, -1));
      }
      if (cur == "") return;
    }
    if (key == "AC") {
      setcur("");
    }
    if (key == "=") setcur("" + eval(cur));
  }
  // let [nex, setNex] = useState("");

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{cur}</div>
      </div>

      <button className="span-2" onClick={() => handler("AC")}>
        AC
      </button>
      <button onClick={() => handler("del")}>del</button>
      <button onClick={() => handler("/")}>/</button>
      <button onClick={() => handler("1")}>1</button>
      <button onClick={() => handler("2")}>2</button>
      <button onClick={() => handler("3")}>3</button>
      <button onClick={() => handler("*")}>*</button>
      <button onClick={() => handler("4")}>4</button>
      <button onClick={() => handler("5")}>5</button>
      <button onClick={() => handler("6")}>6</button>
      <button onClick={() => handler("+")}>+</button>
      <button onClick={() => handler("7")}>7</button>
      <button onClick={() => handler("8")}>8</button>
      <button onClick={() => handler("9")}>9</button>
      <button onClick={() => handler("-")}>-</button>
      <button onClick={() => handler(".")}>.</button>
      <button onClick={() => handler("0")}>0</button>
      <button className="span-2" onClick={() => handler("=")}>
        =
      </button>
    </div>
  );
};

export default App;
