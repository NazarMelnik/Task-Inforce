import Product from "../Product";
import Container from "../Container";
import { setBaskModal, setFavModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
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
                  variant="contained"
                  background="linear-gradient(to bottom, #005bbb, #ffd500)"
                  onClick={() => {
                    openBasketModal(elem, dispatch);
                  }}>
                  Додати в кошик
                </Button>
              ) : null}
              {buttonForFav ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    openFavModal(elem, dispatch);
                  }}>
                  Додати в улюблене
                </Button>
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
