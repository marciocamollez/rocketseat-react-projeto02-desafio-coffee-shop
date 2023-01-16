import {
  FormContainer,
  FormWrapper,
  FormAddress,
  AddressWrapper,
} from "./styles";
import { MapPin, CreditCard, Money, Bank } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function Form() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <h1>Complete seu pedido</h1>

      <FormWrapper>
        <div>
          <div className="title--address">
            <MapPin size={20} />
            <h2>Endereço de entrega</h2>
          </div>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <FormAddress>
            <AddressWrapper>
              <input type="number" placeholder="CEP" {...register("cep")} />
              {}
            </AddressWrapper>
            <AddressWrapper>
              <input type="text" placeholder="Rua" {...register("rua")} />
            </AddressWrapper>
            <AddressWrapper>
              <input type="number" {...register("numero")} placeholder="N" />
              <input
                type="text"
                {...register("complemento")}
                placeholder="Complemento"
              />
            </AddressWrapper>
            <AddressWrapper>
              <input type="text" {...register("bairro")} placeholder="Bairro" />
              <input type="text" {...register("cidade")} placeholder="Cidade" />
              <input type="text" {...register("estado")} placeholder="Estado" />
            </AddressWrapper>
            <AddressWrapper>
              <h2>Modo de pagamento:</h2>
            </AddressWrapper>
            <AddressWrapper>
              <input
                type="radio"
                id="credito"
                value="credito"
                {...register("fav_payment")}
              />
              <label htmlFor="credito">
                <CreditCard size={20} />
                Cartão de Crédito
              </label>

              <input
                type="radio"
                id="debito"
                {...register("fav_payment")}
                value="debito"
              />
              <label htmlFor="debito">
                <Bank size={20} />
                Cartão de Débito
              </label>

              <input
                type="radio"
                id="dinheiro"
                {...register("fav_payment")}
                value="dinheiro"
              />
              <label htmlFor="dinheiro">
                <Money size={20} />
                Dinheiro
              </label>
            </AddressWrapper>
          </FormAddress>
        </div>
      </FormWrapper>
    </FormContainer>
  );
}
