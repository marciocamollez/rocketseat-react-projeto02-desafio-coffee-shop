import { ChangeQuantity, ButtonQuantity } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <ChangeQuantity>
      <ButtonQuantity>
        <Minus size={20} />
      </ButtonQuantity>
      <input type="text" value="0" readOnly />
      <ButtonQuantity>
        <Plus size={20} />
      </ButtonQuantity>
    </ChangeQuantity>
  );
}
