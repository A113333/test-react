import React, { useState, Link } from "react";
import BottomValueCard from "./BottomValueCard";
import ValueCard from "./ValueCard";

export default function ValueSorter(obj) {
  const valueArray = obj.valueArray;
  const [topValue, setTopValue] = useState(valueArray);
  const [bottomValue, setBottomValue] = useState(valueArray);
  const [current, setCurrent] = useState(2);
  console.log(topValue);

  // if current === length - 1: return 0 else return +1
  const next = () => {
    setCurrent(current === valueArray.length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    console.log(current);
    console.log(valueArray.length);
    setCurrent(current === 0 ? valueArray.length - 1 : current - 1);
  };

  const topCardClicked = (obj) => {
    console.log(obj);
  };
  const bottomCardClicked = (obj) => {
    //console.log(obj);
    const addScore = valueArray.map((item, index) => {
      if (obj.id === item.id) {
        item.pts = item.pts + 1;
        //  valueArray.splice(index, 1);
        console.log(index);
        setBottomValue(valueArray);
      }
    });

    setBottomValue(valueArray);
    console.log("hittade inte id");
  };
  return (
    <div className="valueSorterWrapper">
      <div>
        {/* on on click inte ()=> så körs den på render */}
        <button className="topCard" value={topValue[0].id} onClick={prev}>
          <h3> {topValue[0].title} </h3>
          {topValue[0].desc}
        </button>

        <p className="eller">Eller...</p>
        <div>
          <ValueCard
            className={"bottomCard"}
            value={valueArray[1]}
            onClick={next}
          />
        </div>
        <BottomValueCard valueArray={valueArray} />
        {valueArray.map((value, index) => {
          return (
            <div className="slide" key={index}>
              {index === current && (
                <p {...value.title} key={value.id} alt={value.text} />
              )}
              {index === current && <h1 className="text">{value.text}</h1>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
