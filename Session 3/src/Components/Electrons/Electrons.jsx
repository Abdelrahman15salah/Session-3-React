import { Link } from "react-router-dom";
import "./Electrons.css";

export default function Electrons() {
  return (
    <section className="electrons-shell page-card">
      <div className="electrons-header">
        <p className="section-tag">Electrons</p>
        <h2>Nested routes</h2>
        <p className="section-copy">
          Choose one of the inner pages below to render it inside this section.
        </p>
      </div>

      <div className="electrons-links">
        <Link to={"TV"}>TV</Link>
        <Link to={"Car"}>Car</Link>
        <Link to={"Phone"}>Phone</Link>
      </div>
    </section>
  );
}
