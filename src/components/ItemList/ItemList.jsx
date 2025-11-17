import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";
import emptyImg from "../../assets/empty-v.png";

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <div className="item-list-empty">
          <img
            src={emptyImg}
            alt="Sin productos disponibles"
            className="empty-image"
          />
          <p>No hay productos disponibles</p>
        </div>
      )}
    </div>
  );
};
