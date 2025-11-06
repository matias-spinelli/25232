import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";

export const Nav = () => {
  const { getTotalItems } = useCartContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={menuOpen ? "open" : ""}>
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/carnes">Carnes</Link>
        </li>
        <li>
          <Link to="/category/achuras">Achuras</Link>
        </li>
        <li>
          <Link to="/category/otros">Otros</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
