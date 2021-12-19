import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2> Oj, något har blivit fel!</h2>
      <p> Sidan kan inte hittas</p>
      <Link to="/"> Tillbaka till startsidan </Link>
    </div>
  );
}
