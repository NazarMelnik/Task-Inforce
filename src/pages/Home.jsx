import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
export default function Home() {
  const allProducts = useSelector((state) => state.product.allProducts);
  if (!allProducts) {
    return <div>No products found.</div>;
  }
  return (
    <ProductList
      products={allProducts}
      buttonsForAdd={true}
      checkoutButton={true}
      buttonForFav={true}
      buttonForBask={true}
    />
  );
}
