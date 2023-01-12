import { CartReview } from "./components/CartReview";
import { Form } from "./components/Form";
import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <Form />
      <CartReview />
    </CartContainer>
  );
}
