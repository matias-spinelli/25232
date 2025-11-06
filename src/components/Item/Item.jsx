import "./Item.css";
import { formatPrice } from "../../utils/priceFormatter";

export const Item = ({ name, price, description, imageUrl, children }) => {

  return (
    <article className="product-item">
      <div className="image-wrapper">
        <img src={imageUrl} alt={description} />
      </div>
      <h2>{name}</h2>
      <p className="price">{formatPrice(price)}</p>
      <p className="description">{description}</p>
      {children}
    </article>
  );
};
