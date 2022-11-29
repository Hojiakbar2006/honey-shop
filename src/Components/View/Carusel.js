import React from "react";
import "./Carusel.css";
import { useState } from "react";

export function Carusel({ data }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(2);
  const [count4, setCount4] = useState(3);

  if (count <= (data.length !== 0 ? data.length - 1 : 0)) {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  } else {
    setCount(0);
  }

  if (count2 <= (data.length !== 0 ? data.length - 1 : data.length)) {
    setTimeout(() => {
      setCount2(count2 + 1);
    }, 3000);
  } else {
    setCount2(0);
  }

  if (count3 <= (data.length !== 0 ? data.length - 1 : data.length)) {
    setTimeout(() => {
      setCount3(count3 + 1);
    }, 3000);
  } else {
    setCount3(0);
  }

  if (count4 <= (data.length !== 0 ? data.length - 1 : data.length)) {
    setTimeout(() => {
      setCount4(count4 + 1);
    }, 3000);
  } else {
    setCount4(0);
  }

  console.log(count);
  console.log(count2);
  console.log(count3);

  return (
    <div className="carusel">
      <img src={data[count]} alt="" />
      <img src={data[count2]} alt="" />
      <img src={data[count3]} alt="" />
      <img src={data[count4]} alt="" />
    </div>
  );
}
