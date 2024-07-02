import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = {
    id,
    name: "Smartphone",
    price: "$699",
    description: "A high-quality smartphone with a sleek design and powerful features.",
    image: "/images/smartphone.jpg",
  };

  const relatedProducts = [
    { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
    { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">{product.name}</h1>
      </header>
      <section className="space-y-4">
        <Card className="flex flex-col md:flex-row">
          <CardHeader className="flex-1">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle>{product.name}</CardTitle>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </CardContent>
          <CardFooter>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="flex-1">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle>{product.name}</CardTitle>
                <p>{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => navigate(`/products/${product.id}`)}>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;