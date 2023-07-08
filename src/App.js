import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  getBasketProduct,
  getFavProduct,
} from "./redux/actions/products";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout";

export function App() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(
    (state) => state.product.favoriteProducts
  );

  const basketProducts = useSelector((state) => state.product.basketProducts);

  const isOpen = useSelector((state) => state.modal.modalOpen);

  const { modalAction, modalHeader, modalOk, modalText, closeButton } =
    useSelector((state) => state.modal.modalContent);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getBasketProduct());
    dispatch(getFavProduct());
  }, [dispatch]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <Header favorite={favoriteProducts} basket={basketProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Modal
        isOpen={isOpen}
        modalAction={modalAction}
        modalHeader={modalHeader}
        modalOk={modalOk}
        modalText={modalText}
        closeButton={closeButton}
      />
    </>
  );
}
