import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo, subtitulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Hubo un error");
        return res.json();
      })
      .then((data) => {
        if (category) {
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <section className="item-list-container">
      <h1>{category || titulo}</h1>
        {subtitulo && <p className="item-subtitle">{subtitulo}</p>}
      <div className="item-grid">
        <ItemList lista={products} />
      </div>
    </section>
  );
};
