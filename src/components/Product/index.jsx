import { Button } from "@mui/material";
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
        <Button
          sx={{ alignSelf: "flex-end" }}
          onClick={() => setRemoveBtnModal()}>
          <span aria-hidden="true">&times;</span>
        </Button>
      ) : (
        defaultProps.closeBtn
      )}
      <img
        src={src}
        alt={name}
        width="300"
        height="300"
        className="product-img"
      />
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
