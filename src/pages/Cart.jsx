import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Smartphone", price: "$699", quantity: 1, image: "/images/smartphone.jpg" },
    { id: 2, name: "Laptop", price: "$999", quantity: 1, image: "/images/laptop.jpg" },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Cart</h1>
      </header>
      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="flex-1">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle>{item.name}</CardTitle>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </CardContent>
              <CardFooter>
                <Button>Remove</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold">Total Price: ${totalPrice}</h2>
        <Button>Proceed to Checkout</Button>
      </footer>
    </div>
  );
};

export default Cart;