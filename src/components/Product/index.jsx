import PropTypes from "prop-types";
export default function Product(props) {
  const defaultProps = {
    closeBtn: false,
  };
  const { removeBtn, name, price, src, article, color, setRemoveBtnModal } =
    props;
  return (
    <div className="product-item">
      {removeBtn ? (
        <button className="close-button" onClick={() => setRemoveBtnModal()}>
          <span aria-hidden="true">&times;</span>
        </button>
      ) : (
        defaultProps.closeBtn
      )}
      <img src={src} alt={name} width="300" height="300" />
      <p className="product-item__title">{name}</p>
      <p className="product-item__article">АРТИКУЛ : {article}</p>
      <p className="product-item__price">{price}</p>
      <p className="product-item__colors">
        Доступні кольори :{" "}
        {color.length === 1
          ? color[0]
          : color.map((c, i) => `${c}${i === color.length - 1 ? "" : ", "}`)}
      </p>
      <div className="product-btn-wrapper">{props.children}</div>
    </div>
  );
}
Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.array,
};
