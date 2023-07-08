import { useSelector } from "react-redux";
export default function Home() {
  const allProducts = useSelector((state) => state.product.allProducts);
  if (!allProducts) {
    return <div>No products found.</div>;
  }
  return;
}
