import { useState } from "react";
import { CartContext } from "./CartContext";
import { useChuletuteAlertContext } from "../../components/UI/ChuletuteAlert/useChuletuteAlertContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { showToast, showAlert, showConfirm } = useChuletuteAlertContext();

  const exists = (id) => cart.some((p) => p.id === id);

  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + item.quantity }
          : prod
      );
      setCart(updatedCart);
      showToast(`Cantidad actualizada`, "info");
    } else {
      setCart([...cart, item]);
      showToast(`${item.name} agregado al carrito`, "success");
    }
  };

  const deleteItem = async (id) => {
    const product = cart.find((p) => p.id === id);
    if (!product) return false;

    const ok = await showConfirm(
      `¿Seguro que querés eliminar "${product.name}" del carrito?`,
      "warning"
    );

    return ok;
  };

  const forceDelete = (id) => {
    const product = cart.find((p) => p.id === id);
    if (product) {
      setCart(cart.filter((p) => p.id !== id));
      showToast(`"${product.name}" eliminado`, "error");
    }
  };

  const clearCart = async () => {
    if (cart.length === 0) {
      showToast("El carrito ya está vacío", "info");
      return false;
    }

    const ok = await showConfirm(
      "¿Seguro que querés vaciar todo el carrito?",
      "warning"
    );

    return ok; 
  };

  const forceClear = () => {
    setCart([]);
    showToast("Carrito vaciado", "warning");
  };


  const getTotalItems = () => cart.reduce((acc, p) => acc + p.quantity, 0);

  const total = () =>
    Math.round(cart.reduce((acc, p) => acc + p.price * p.quantity, 0) * 100) /
    100;

  const checkout = async () => {
    const ok = await showConfirm(
      "¿Seguro que querés finalizar la compra?",
      "warning"
    );

    if (ok) {
      showAlert("¡Compra realizada con éxito!", "success");
      setCart([]);
    } else {
      showToast("Compra cancelada", "info");
    }
  };

  const values = { cart, addItem, deleteItem, forceDelete, clearCart, forceClear, getTotalItems, total, checkout };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
