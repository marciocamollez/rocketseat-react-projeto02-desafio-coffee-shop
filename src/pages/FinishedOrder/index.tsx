import { FinishedContainer, BoxInfos, BoxInfosTxt } from "./styles";
import imgFinished from "../../assets/finalizado.png";

export default function FinishedOrder() {
  return (
    <FinishedContainer>
      <h1>Uhu! Pedido confirmado!</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <BoxInfos>
        <BoxInfosTxt>
          <div>
            Entrega em: <strong>Rua X</strong>
          </div>
          <div>
            Previsão de entrega: <strong>30 minutos</strong>
          </div>
          <div>
            Pagamento na entrega: <strong>Cartao</strong>
          </div>
        </BoxInfosTxt>
        <div>
          <img src={imgFinished} />
        </div>
      </BoxInfos>
    </FinishedContainer>
  );
}
