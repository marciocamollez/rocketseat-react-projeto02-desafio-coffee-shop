import {
  FormContainer,
  FormWrapper,
  FormAddress,
  AddressWrapper,
} from "./styles";
import { MapPin, CreditCard, Money } from "phosphor-react";

export function Form() {
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
              <input type="number" name="cep" placeholder="CEP" />
            </AddressWrapper>
            <AddressWrapper>
              <input type="text" name="rua" placeholder="Rua" />
            </AddressWrapper>
            <AddressWrapper>
              <input type="number" name="numero" placeholder="N" />
              <input type="text" name="complemento" placeholder="Complemento" />
            </AddressWrapper>
            <AddressWrapper>
              <input type="text" name="bairro" placeholder="Bairro" />
              <input type="text" name="cidade" placeholder="Cidade" />
              <input type="text" name="estado" placeholder="Estado" />
            </AddressWrapper>
            <AddressWrapper>
              <h2>Modo de pagamento:</h2>
            </AddressWrapper>
            <AddressWrapper>
              <button>
                <CreditCard size={20} /> Cartão de Crédito
              </button>
              <button>
                <CreditCard size={20} /> Cartão de Débito
              </button>
              <button>
                <Money size={20} /> Dinheiro
              </button>
            </AddressWrapper>
          </FormAddress>
        </div>
      </FormWrapper>
    </FormContainer>
  );
}
