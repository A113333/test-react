import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateValue() {
  // skapar något att lagra inputen i
  const [valueTitle, setValueTitle] = useState(" ");
  const [valueDesc, setValueDesc] = useState(" ");
  const [valueCategori, setvalueCategori] = useState("Fritid");
  //för att kunna visa loading msg
  const [isPending, setIsPending] = useState(false);
  // obj som representerar history
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // tar värderna från STATE och gör ett objekt av dom
    const value = {
      title: valueTitle,
      desc: valueDesc,
      categori: valueCategori,
    };
    setIsPending(true);

    fetch("http://localhost:3000/valueList", {
      // berättar för servern att det är en post med JSON data
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //datan som ska skickas
      body: JSON.stringify(value),
    }).then(() => {
      console.log(value);
      console.log("nytt värde tillagt");
      setIsPending(false);
      history.push("/");
    });
    // går tillbaka ett steg
    // history.go(-1);
  };
  return (
    <div className="create">
      <h2> Du är på create!</h2>
      <form onSubmit={handleSubmit}>
        <lable>Värdering:</lable>
        <input
          type="text"
          required
          value={valueTitle}
          onChange={(e) => setValueTitle(e.target.value)}
        />

        <lable>Beskrivning:</lable>
        <input
          type="text"
          required
          value={valueDesc}
          onChange={(e) => setValueDesc(e.target.value)}
        />
        <select
          value={valueCategori}
          onChange={(e) => setvalueCategori(e.target.value)}
        >
          <option value="Arbete"> Arbete </option>
          <option value="Fritid"> Fritid </option>
        </select>
        {/* första knappen visas om isPending inte sant   */}
        {!isPending && (
          <button onChange={(e) => handleSubmit(e)}>Lägg till värdering</button>
        )}
        {isPending && (
          <button disable onChange={(e) => handleSubmit(e)}>
            Laddar upp värdering
          </button>
        )}
        <p> {valueTitle}</p>
        <p> {valueDesc}</p>
        <p> {valueCategori}</p>
      </form>
    </div>
  );
}
