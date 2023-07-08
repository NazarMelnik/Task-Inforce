import { Button } from "@mui/material";
import { BasketProduct } from "../components/BasketProduct";
import { CheckoutForm } from "../components/CheckoutForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  const basketProducts = useSelector((state) => state.product.basketProducts);
  const price = basketProducts.reduce((total, el) => {
    const numericPrice = parseFloat(el.price);
    if (!isNaN(numericPrice)) {
      return total + numericPrice;
    }
    return total;
  }, 0);
  return basketProducts.length > 0 ? (
    <div className="container">
      <div className="checkout-content">
        <p className="checkout-price">Загальна сума замовлення : {price}грн.</p>
        <p className="checkout-text">
          Будь ласка, заповніть форму і невдовзі ми Вам зателефонуємо{" "}
          <span className="down--arrow">☟</span>
        </p>
        <CheckoutForm />
        <p className="checkout-text">
          Товари додані в кошик<span className="down--arrow">⬇</span>
        </p>
        <BasketProduct />
      </div>
    </div>
  ) : (
    <div className="checkout-nothing-wrapper">
      <p className="product--nothing">Ще нічого не додано :(</p>
      <Button
        component={Link}
        to="/"
        variant="contained"
        className="checkout-btn">
        Повернутись на головну
      </Button>
    </div>
  );
}
