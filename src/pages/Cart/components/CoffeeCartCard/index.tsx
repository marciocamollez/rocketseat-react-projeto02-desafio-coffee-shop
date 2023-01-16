import { ItemReview, RemoveButton } from "./styles";

import RemoveItemFromCart from "../RemoveItemFromCart";
import { QuantityInput } from "../../../../components/QuantityInput";

import { CartItem } from "../../../../Context/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { Trash } from "phosphor-react";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <ItemReview>
      <div>
        <img src={`${coffee.photo}`} />
      </div>
      <div>
        <p>{coffee.name}</p>
        <p>R$ {coffeeTotal}</p>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={coffee.quantity}
        />
        <RemoveButton onClick={handleRemove}>
          <Trash size={20} /> Remover
        </RemoveButton>
      </div>
    </ItemReview>
  );
}
