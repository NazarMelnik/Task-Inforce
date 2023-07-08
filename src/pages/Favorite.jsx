import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { removeItemFav } from "../redux/actions/modal";
export default function Favorite() {
  const favoriteProducts = useSelector(
    (state) => state.product.favoriteProducts
  );

  const setModalForRemove = (id, dispatch) => {
    dispatch(removeItemFav(id, dispatch));
  };
  return (
    <>
      <ProductList
        products={favoriteProducts}
        removeBtn={true}
        setRemoveBtnModal={setModalForRemove}
        buttonForBask={true}
      />
    </>
  );
}
