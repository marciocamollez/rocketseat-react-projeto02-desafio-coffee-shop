import { ListItem, ButtonAddToCart } from "./styles";
import { coffees } from "../../data/coffees";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <ListItem>
      <div key={coffee.id} className="coffee--item">
        <div className="coffee--item_img">
          <img src={coffee.photo} />
        </div>
        <div className="coffee--item_tag">
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </div>
        <div className="coffee--item_name">
          <h3>{coffee.name}</h3>
        </div>
        <div className="coffee--item_desc">
          <p>{coffee.description}</p>
        </div>

        <div className="coffee--item_price">
          <div>
            R$ <p>{coffee.price}</p>
          </div>

          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <ButtonAddToCart onClick={handleAddToCart}>
            <ShoppingCart size={20} />
          </ButtonAddToCart>
        </div>
      </div>
    </ListItem>
  );
}
