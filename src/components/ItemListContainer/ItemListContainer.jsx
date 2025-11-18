import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import chulengoImg from "../../assets/chulengo.png";
import { getProducts } from "../../services/products";
import { Loader } from "../UI/Loader/Loader";

export const ItemListContainer = ({ titulo, subtitulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setProducts([]);

    getProducts(category)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [category]);

  return (
    <section className="item-list-container">
      <h1>{category || titulo}</h1>
      {subtitulo && <p className="item-subtitle">{subtitulo}</p>}

      {!category && (
        <div className="chulengo-image-wrapper">
          <img src={chulengoImg} alt="Chulengo" className="chulengo-image" />
        </div>
      )}

      {loading && <Loader />}

      {!loading && (
        <div className="item-grid">
          <ItemList lista={products} />
        </div>
      )}
    </section>
  );
};
