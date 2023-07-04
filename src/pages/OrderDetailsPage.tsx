import { useParams } from "react-router-dom";

export default function OrderDetails(): JSX.Element {
  const params = useParams();

  return <p> Order Details for Order Id = {params.id}</p>;
}
