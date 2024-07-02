import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      const response = await fetch(`/api/products?search=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!query,
  });

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
      <Input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-md"
        />
      </header>
      <section className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products?.map((product) => (
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
        )}
      </section>
    </div>
  );
};

export default Products;