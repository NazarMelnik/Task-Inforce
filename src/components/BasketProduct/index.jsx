import ProductList from "../ProductList";
import { removeItemBask } from "../../redux/actions/modal";
import { useSelector } from "react-redux";

export function BasketProduct() {
  const basketProducts = useSelector((state) => state.product.basketProducts);
  const setModalForRemove = (id, dispatch) => {
    dispatch(removeItemBask(id, dispatch));
  };
  return (
    <ProductList
      products={basketProducts}
      removeBtn={true}
      setRemoveBtnModal={setModalForRemove}
      buttonForFav={true}
    />
  );
}
