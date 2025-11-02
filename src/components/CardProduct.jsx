import "../App.css";
import "./Products.css";

function CardProduct({ image, alt, title, description }) {
  return (
    <article className="card-products">
      <div className="d-flex fd-column">
        <img src={image} alt={alt} />

        <div className="paddingH3-p gap">
          <h3 className="fw-bold size-16px terceira-cor padding-texts">
            {title}
          </h3>
          <p className="size-12px quinta-cor container-p">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CardProduct;