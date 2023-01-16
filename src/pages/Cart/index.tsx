import { CartReview } from "./components/CartReview";
import { Form } from "./components/Form";
import { CartContainer, CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  rua: zod.string().min(1, "Informe a Rua"),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o Bairro"),
  cidade: zod.string().min(1, "Informe a Cidade"),
  estado: zod.string().min(1, "Informe o Estado"),
  fav_payment: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData;

export function Cart() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    // console.log(data);
    navigate("/success", {
      state: data,
    });
    cleanCart();
  }

  return (
    <CartContainer>
      <FormProvider {...confirmOrderForm}>
        <CompleteOrderContainer onSubmit={handleSubmit(handleConfirmOrder)}>
          <Form />
          <CartReview />
        </CompleteOrderContainer>
      </FormProvider>
    </CartContainer>
  );
}
