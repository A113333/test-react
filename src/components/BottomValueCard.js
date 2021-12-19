import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function BottomValueCard({ valueArray: arryOfValues }) {
  console.log("arryOfValues ");
  console.log(arryOfValues);
  const history = useHistory();
  const [valueArray, setvalueArray] = useState(arryOfValues);
  const [current, setCurrent] = useState(0);
  const [showTop, setShowTop] = useState(0);
  const [showBottom, setShowBottom] = useState(1);
  const [startValue, setstartValue] = useState(2);
  const [counter, setCounter] = useState(2);

  const prev = () => {
    setCurrent(current === 0 ? valueArray.length - 1 : current - 1);
  };

  // körs vid sista kortet för att ta bort första kortet ur displayn
  const restartArr = () => {
    console.log("arr slut");
    // en counter som ökar med 1 för varje iteration genom kortleken
    setstartValue(startValue + 1);
    // updaterar så att nästa item visas
    setShowBottom(startValue);
    setCounter(startValue + 1);
    setShowTop(showTop + 1);
    console.log("showtop / startvalue" + startValue);
  };

  // id kommer vara samma tills den startar om
  const clickTop = ({ index, id }) => {
    console.log("startValue" + startValue);
    console.log("valueArr lenght" + valueArray.length);
    setCounter(counter + 1);
    if (startValue === valueArray.length) {
      // om övningen är klar
      console.log("done");
      console.log(valueArray);
      history.push({
        pathname: "/valueResults",
        state: valueArray,
      });
    }
    //lägger till pts
    valueArray.map((item, index) => {
      id === item.id ? (item.pts = item.pts + 1) : console.log("item");
    });
    // om vi är på sista kortet
    if (counter === valueArray.length) {
      setstartValue(startValue + 1);
      setShowTop(showTop + 1);
      setCounter(startValue + 1);
      setShowBottom(startValue);
      console.log("counter === valueArray.length");
      console.log(startValue);
    } else {
      setShowBottom(showBottom + 1);
    }
  };

  const clickBottom = ({ index, id }) => {
    //om ävningen är klart
    if (startValue === valueArray.length) {
      console.log("done");

      history.push({
        pathname: "/valueResults",
        state: valueArray,
      });
    }
    setCounter(counter + 1);
    console.log("index");
    console.log(index);
    index + 1 === valueArray.length ? restartArr() : setShowBottom(index + 1);
    valueArray.map((item, index) => {
      id === item.id ? (item.pts = item.pts + 1) : console.log("hehe");
    });
    console.log(valueArray);
  };

  return (
    <div>
      <div className="topCardWrapper">
        {valueArray.map(({ title, desc, id }, index) => {
          return (
            <div
              className={index === showTop ? "show" : "hidden"}
              onClick={() => clickTop({ index: index, id: id })}
            >
              <h3 key={index}>{title}</h3>
              <p> {desc}</p>
            </div>
          );
        })}
      </div>
      <p className="eller">Eller...</p>

      <div className="bottomCardWrapper">
        {valueArray.map(({ title, desc, id }, index) => {
          return (
            <div
              className={index === showBottom ? "show" : "hidden"}
              onClick={() => clickBottom({ index: index, id: id })}
            >
              <h3 key={index}>{title}</h3>
              <p> {desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottomValueCard;
