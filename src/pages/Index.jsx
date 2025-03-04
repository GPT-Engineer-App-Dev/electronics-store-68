import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
    { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
    { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to ElectroMart</h1>
        <p className="text-lg">Your one-stop shop for all electronic needs</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {featuredProducts.map((product) => (
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

export default Index;