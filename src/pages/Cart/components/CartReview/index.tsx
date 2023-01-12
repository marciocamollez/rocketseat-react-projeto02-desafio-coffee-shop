import { QuantityInput } from "../../../../components/QuantityInput";
import {
  CartReviewContainer,
  CartReviewWrapper,
  ItemReview,
  ValueInfos,
  ConfirmButton,
} from "./styles";
import imageSample from "../../../../../public/coffees/leite.png";
import RemoveItemFromCart from "../RemoveItemFromCart";

export function CartReview() {
  return (
    <CartReviewContainer>
      <h2>Cafés selecionados</h2>

      <CartReviewWrapper>
        <ItemReview>
          <div>
            <img src={imageSample} />
          </div>
          <div>
            <p>Expresso Tradicional</p>
            <p>R$ 9,90</p>
            <QuantityInput />
            <RemoveItemFromCart />
          </div>
        </ItemReview>

        <ValueInfos>
          <div>
            <p>Total de Itens: </p>
            <p>R$ 32,90</p>
          </div>
          <div>
            <p>Entrega: </p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p>
              <strong>Total: </strong>
            </p>
            <p>R$ 45,00</p>
          </div>
        </ValueInfos>

        <ConfirmButton>Confirmar Pedido</ConfirmButton>
      </CartReviewWrapper>
    </CartReviewContainer>
  );
}
