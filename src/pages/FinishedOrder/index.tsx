import { FinishedContainer, BoxInfos, BoxInfosTxt } from "./styles";
import imgFinished from "../../assets/finalizado.png";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Cart";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export default function FinishedOrder() {
  const { state } = useLocation() as unknown as LocationType;
  // console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <FinishedContainer>
      <h1>Uhu! Pedido confirmado!</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <BoxInfos>
        <BoxInfosTxt>
          <div>
            Entrega em:{" "}
            <strong>
              {state.rua}, {state.numero}, {state.bairro} - {state.cidade}/
              {state.estado} - Cep: {state.cep}
            </strong>
          </div>
          <div>
            Previsão de entrega: <strong>30 minutos</strong>
          </div>
          <div>
            Pagamento na entrega: <strong>{state.fav_payment}</strong>
          </div>
        </BoxInfosTxt>
        <div>
          <img src={imgFinished} />
        </div>
      </BoxInfos>
    </FinishedContainer>
  );
}
