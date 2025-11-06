import "./Header.css";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/chuletute.png";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Chuletute logo" />
      </Link>
      <Nav />
    </header>
  );
};
