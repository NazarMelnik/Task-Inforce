import Product from "../Product";
import Button from "../Button";
import Container from "../Container";
import { setBaskModal, setFavModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";

export default function ProductList(props) {
  const {
    products,
    removeBtn,
    buttonForFav,
    setRemoveBtnModal,
    buttonForBask,
  } = props;
  const dispatch = useDispatch();
  const openBasketModal = (elem) => {
    dispatch(setBaskModal(elem, dispatch));
  };
  const openFavModal = (elem) => {
    dispatch(setFavModal(elem, dispatch));
  };
  return (
    <Container>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((elem, index) => (
            <Product
              key={elem.id}
              src={elem.src}
              price={elem.price}
              color={[...elem.color]}
              article={elem.article}
              name={elem.name}
              removeBtn={removeBtn}
              setRemoveBtnModal={() => setRemoveBtnModal(elem.id, dispatch)}
              buttonsForAdd={buttonForFav}
              buttonForBask={buttonForBask}>
              {buttonForBask ? (
                <Button
                  color="#333333"
                  text="Додати в кошик"
                  background="linear-gradient(to bottom, #005bbb, #ffd500)"
                  setModal={() => {
                    openBasketModal(elem, dispatch);
                  }}
                />
              ) : null}
              {buttonForFav ? (
                <Button
                  color="#333333"
                  text="Додати в улюблене"
                  background="linear-gradient(to bottom, #005bbb, #ffd500)"
                  setModal={() => {
                    openFavModal(elem, dispatch);
                  }}
                />
              ) : null}
            </Product>
          ))
        ) : (
          <>
            <p className="product--nothing">Ще нічого не додано :(</p>
          </>
        )}
      </div>
    </Container>
  );
}
