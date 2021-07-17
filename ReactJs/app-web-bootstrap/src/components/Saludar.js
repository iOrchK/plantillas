import React from "react";
import { Button } from "react-bootstrap";

export default function Saludar(props) {
  const { name, age, sayHelloFn } = props;

  return (
    <div>
      <h2>
        Hola {name}, tienes {age} años
      </h2>
      <Button variant="info" onClick={() => sayHelloFn("Hola mundo")}>
        Di hola
      </Button>
    </div>
  );
}
