import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Saludar from "../components/Saludar";
import { Alert } from "react-bootstrap";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";

export default function QuienSoy() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const userName = "Jorge Chable";
  const age = 26;

  useEffect(() => {}, [count]);

  const sayHelloFn = (message) => {
    setShow(!show);
    setCount(count + 1);
  };
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Saludar name={userName} age={age} sayHelloFn={sayHelloFn} />
      <Alert
        variant="info"
        show={show}
        onClose={() => setShow(false)}
        dismissible
      >
        Hola mundo {count}
      </Alert>
      <ReactIcon></ReactIcon>
    </div>
  );
}
