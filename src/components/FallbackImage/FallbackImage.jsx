import placeholderImg from "../../assets/placeholder-parrilla.png";
import { useState } from "react";

export const FallbackImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src || placeholderImg);

  const handleError = () => {
    setImgSrc(placeholderImg);
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Imagen no disponible"}
      onError={handleError}
    />
  );
};
