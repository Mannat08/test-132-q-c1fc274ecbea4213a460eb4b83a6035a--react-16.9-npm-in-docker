import React from 'react';
import logo from './logo.svg';
import './App.css';
import { evaluate } from "mathjs";


function App() {
  const handleClick = function (value) {
    console.log(value);
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
    console.log("clicked");
  };

  const calculate = function () {
    try {
      if (!expression.includes("%")) {
        const result = evaluate(expression);
        if (result === "Infinity" || result === "-Infinity") {
          setExpression("Math Error");
        } else {
          setExpression(result);
        }
      } else {
        let str1 = expression.replace("%", "/100*");
        var ans = evaluate(str1);
        setExpression(ans);
      }
    } catch (ex) {
      setExpression("Math Error");
    }
  };
  const clear = function () {
    setExpression("");
  };
  const handledelete = () => {
    try {
      let ans = expression.toString().slice(0, expression.length - 1);
      setExpression(ans);
    } catch (ex) {
      setExpression("Math Error");
    }
  };

  const [expression, setExpression] = React.useState("");
  return (
    <>
      <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <div className="head">Simple Calculator</div>
        <div className="screen">{expression}</div>
        <div className="btn-container">
          <div className="answers">
            <button id="clear" onClick={clear}>
              AC
            </button>
            <button id="delete" onClick={handledelete}>
              DELETE
            </button>
            <button id="btn1" onClick={calculate}>
              =
            </button>
            <button id="/" onClick={handleClick}>
              /
            </button>
          </div>
          <div className=" button">
            {[
              "7",
              "8",
              "9",
              "*",
              "4",
              "5",
              "6",
              "-",
              "1",
              "2",
              "3",
              "+",
              "0",
              ".",
              "%"
            ].map((el) => (
              <button key={el} id={el} onClick={() => handleClick(el)}>
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

