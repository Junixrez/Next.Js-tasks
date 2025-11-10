import DetailsCard from "@/Components/DetailsCard";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return <DetailsCard product={product} />;
}
