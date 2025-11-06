import "./Nav.css";
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext"

export const Nav = () => {

    const {getTotalItems} = useCartContext()

    return <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/carnes"}>Carnes</Link>
            </li>
            <li>
                <Link to={"/category/achuras"}>Achuras</Link>
            </li>
            <li>
                <Link to={"/category/otros"}>Otros</Link>
            </li>
            <li>
                <Link to={"/carrito"}>carrito</Link>
                {getTotalItems() > 0 && <span className="in-cart">{getTotalItems()}</span>}
            </li>
        </ul>
    </nav>
}