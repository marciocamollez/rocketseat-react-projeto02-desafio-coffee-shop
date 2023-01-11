import { CartHeaderButton } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function CartIcon() {
  return (
    <CartHeaderButton>
      <ShoppingCart size={30} />
      <span>1</span>
    </CartHeaderButton>
  );
}
