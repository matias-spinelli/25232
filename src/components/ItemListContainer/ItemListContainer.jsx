import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import chulengoImg from "../../assets/chulengo.png";
import { getProducts } from "../../services/products";

export const ItemListContainer = ({ titulo, subtitulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {

    getProducts(category).then((data)=> setProducts(data))
    .catch((error) => console.log(error));
  }, [category]);

  //   fetch("/data/products.json")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Hubo un error");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (category) {
  //         setProducts(data.filter((prod) => prod.category === category));
  //       } else {
  //         setProducts(data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, [category]);

  return (
    <section className="item-list-container">
      <h1>{category || titulo}</h1>
      {subtitulo && <p className="item-subtitle">{subtitulo}</p>}

      {!category && (
        <div className="chulengo-image-wrapper">
          <img src={chulengoImg} alt="Chulengo" className="chulengo-image" />
        </div>
      )}

      <div className="item-grid">
        <ItemList lista={products} />
      </div>
    </section>
  );
};
