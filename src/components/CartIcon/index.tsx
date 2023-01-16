import { CartHeaderButton } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function CartIcon() {
  const { cartQuantity } = useCart();

  return (
    <CartHeaderButton>
      <ShoppingCart size={30} />
      {cartQuantity >= 1 && <span>{cartQuantity}</span>}
    </CartHeaderButton>
  );
}
