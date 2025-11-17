import "./Item.css";
import { formatPrice } from "../../utils/priceFormatter";
import { FallbackImage } from "../FallbackImage/FallbackImage";

// const getAvailability = ({ price, quantity }) => {
//   if (quantity === 0) return "Agotado";
//   if (price == null) return "No Disponible";
//   return null;
// };

export const Item = ({ name, price, description, imageUrl, children }) => {
  const unavailable = price == null;
//   const availability = getAvailability({ price, quantity });
//   const unavailable = availability !== null;

  return (
    <div className="product-wrapper">
      <article className={`product-item ${unavailable ? "unavailable" : ""}`}>
        <div className="image-wrapper">
          <FallbackImage src={imageUrl} alt={description || name} />
        </div>

        <h2>{name}</h2>

        {unavailable ? (
          <p className="price unavailable-text">Precio no disponible</p>
        ) : (
          <p className="price">{formatPrice(price)}</p>
        )}

        <p className="description">{description}</p>

        {!unavailable && (
          <div className="children-container">
            {children}
          </div>
        )}
      </article>

      {unavailable && <div className="availability-badge">No Disponible</div>}
    </div>
  );
};
