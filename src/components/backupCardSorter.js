import React, { useState } from "react";

function BottomValueCard({ valueArray: arryOfValues }) {
  // console.log(arryOfValues);
  const [valueArray, setvalueArray] = useState(arryOfValues);
  const [current, setCurrent] = useState(2);
  const [showTop, setShowTop] = useState(valueArray[0].id);
  const [showBottom, setShowBottom] = useState(valueArray[1].id);
  const [startValue, setstartValue] = useState(2);
  const [counter, setCounter] = useState(2);

  const prev = () => {
    setCurrent(current === 0 ? valueArray.length - 1 : current - 1);
  };

  // körs vid sista kortet för att ta bort första kortet ur displayn
  const restartArr = () => {
    // en counter som ökar med 1 för varje iteration genom kortleken
    setstartValue(startValue + 1);
    // updaterar så att nästa item visas
    setShowBottom(startValue + 1);
    setCounter(startValue + 1);
    setShowTop(startValue);
    console.log("showtop / startvalue" + startValue);
  };

  const clickBottom = (id) => {
    if (startValue === valueArray.length) {
      return console.log("done");
    }

    // den första körs när arrayen är slut
    setCounter(counter + 1);
    id === valueArray.length ? restartArr() : setShowBottom(id + 1);
    valueArray.map((item, index) => {
      id === item.id ? (item.pts = item.pts + 1) : console.log("hehe");
    });
    console.log(valueArray);
  };

  // id kommer vara samma tills den startar om
  const clickTop = (id) => {
    console.log("startValue" + startValue);
    console.log("valueArr lenght" + valueArray.length);
    setCounter(counter + 1);
    if (startValue === valueArray.length) {
      return console.log("done");
    }
    //lägger till pts
    valueArray.map((item, index) => {
      id === item.id ? (item.pts = item.pts + 1) : console.log("item");
    });
    // om vi är på sista kortet
    if (counter === valueArray.length) {
      setstartValue(startValue + 1);
      setShowTop(startValue);
      setCounter(startValue + 1);
      setShowBottom(startValue + 1);
    } else {
      setShowBottom(showBottom + 1);
    }
  };
  return (
    <div>
      <div className="topCardWrapper">
        {valueArray.map(({ title, desc, id }) => {
          return (
            <div
              className={id === showTop ? "show" : "hidden"}
              onClick={() => clickTop(id)}
            >
              <h3 key={id}>{title}</h3>
              <p> {desc}</p>
            </div>
          );
        })}
      </div>
      <p className="eller">Eller...</p>

      <div className="bottomCardWrapper">
        {valueArray.map(({ title, desc, id }) => {
          return (
            <div
              className={id === showBottom ? "show" : "hidden"}
              onClick={() => clickBottom(id)}
            >
              <h3 key={id}>{title}</h3>
              <p> {desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottomValueCard;
