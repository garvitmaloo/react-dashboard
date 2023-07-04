import { useParams } from "react-router-dom";

export default function ProductDetailsPage(): JSX.Element {
  const params = useParams();
  return <p>Product Details for product id = {params.id}</p>;
}
