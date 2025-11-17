import "./Cart.css";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { formatPrice } from "../../utils/priceFormatter";
import emptyCartImg from "../../assets/cart.png";

export const Cart = () => {
  const { cart, clearCart, forceClear, deleteItem, forceDelete, total, checkout } = useCartContext();
  const [removing, setRemoving] = useState([]); 
  const [clearing, setClearing] = useState(false);

  const handleDelete = async (id) => {
    const ok = await deleteItem(id);
    if (!ok) return;

    setRemoving((prev) => [...prev, id]);
    setTimeout(() => {
      forceDelete(id);
      setRemoving((prev) => prev.filter((r) => r !== id));
    }, 400);
  };

  const handleClear = async () => {
    const ok = await clearCart();
    if (!ok) return;

    setClearing(true);
    setTimeout(() => {
      forceClear();
      setClearing(false);
    }, 400);
  };

  return (
    <section className="item-list-container">
      <h2>Carrito de compras</h2>

      {cart.length ? (
        <div className={`cart-grid ${clearing ? "fade-out-group" : ""}`}>
          {cart.map((prod) => (
            <div
              key={prod.id}
              className={`cart-item-wrapper ${
                removing.includes(prod.id) ? "fade-out" : ""
              }`}
            >
              <Item {...prod}>
                <span>Cantidad: {prod.quantity}</span>
                <button className="btn" onClick={() => handleDelete(prod.id)}>
                  Eliminar
                </button>
              </Item>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-empty">
          <img
            src={emptyCartImg}
            alt="Carrito vacío"
            className="cart-empty-image"
          />
          <p>Tu carrito está vacío</p>
        </div>
      )}

      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total a pagar: {formatPrice(total())}</p>
          </div>
          <button className="btn" onClick={checkout}>
            Finalizar compra
          </button>
          <button className="btn" onClick={handleClear}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <div className="btn-container">
          <Link className="btn" to="/">
            Volver al inicio
          </Link>
        </div>
      )}
    </section>
  );
};
