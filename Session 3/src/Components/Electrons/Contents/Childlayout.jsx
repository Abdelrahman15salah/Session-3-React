import "./Childlayout.css";
import { Outlet } from "react-router-dom";
// import NavBar from "../../NavBar/NavBar";
import Electrons from "../Electrons";
export default function Childlayout() {
  return (
    <section className="electrons-content-shell">
      {/* <NavBar /> */}
      <Electrons />
      <div className="electrons-outlet page-card">
        <Outlet />
      </div>
    </section>
  );
}
