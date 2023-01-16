import { CoffeeCartCard } from "../CoffeeCartCard";
import {
  CartReviewContainer,
  CartReviewWrapper,
  ValueInfos,
  ConfirmButton,
} from "./styles";

import { NavLink } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

const DELIVERY_PRICE = 5;

export function CartReview() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  return (
    <>
      <CartReviewContainer>
        <h2>Cafés selecionados</h2>

        <CartReviewWrapper>
          {cartItems.map((item) => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}

          <ValueInfos>
            <div>
              <p>Total de Itens: </p>
              <p>R$ {cartItemsTotal}</p>
            </div>
            <div>
              <p>Entrega: </p>
              <p>R$ {DELIVERY_PRICE}</p>
            </div>
            <div>
              <p>
                <strong>Total: </strong>
              </p>
              <p>R$ {cartTotal}</p>
            </div>
          </ValueInfos>
          <NavLink to="/success">
            <ConfirmButton disabled={cartQuantity <= 0}>
              Confirmar Pedido
            </ConfirmButton>
          </NavLink>
        </CartReviewWrapper>
      </CartReviewContainer>
    </>
  );
}
