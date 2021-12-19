import React from "react";

export default function ValueCard({ className, value, onClick }) {
  return (
    <div>
      <button className={className} onClick={() => onClick(value)}>
        <h3> {value.title} </h3>
        {value.desc}
      </button>
    </div>
  );
}
