import React, { useState, Link } from "react";

function BottomValueCard({ valueArray: valueArray }) {
  console.log(valueArray);
  const [current, setCurrent] = useState(2);
  const [show, setshow] = useState(0);
  const next = () => {
    setCurrent(current === valueArray.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    console.log(current);
    console.log(valueArray.length);
    setCurrent(current === 0 ? valueArray.length - 1 : current - 1);
  };

  const show1 = (id) => {
    console.log(id);
    setshow(id + 1);
  };
  return (
    <div>
      {valueArray.map(({ title, desc }, id) => {
        return (
          <div
            className={id === show ? "show" : "hidden"}
            onClick={() => show1(id)}
          >
            <h3 key={id}>{title}</h3>
            <p> {desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BottomValueCard;
