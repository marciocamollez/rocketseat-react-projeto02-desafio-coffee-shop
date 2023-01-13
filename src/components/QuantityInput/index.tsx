import { ChangeQuantity, ButtonQuantity } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <ChangeQuantity>
      <ButtonQuantity onClick={onDecrease}>
        <Minus size={20} />
      </ButtonQuantity>
      <input type="text" value={quantity} readOnly />
      <ButtonQuantity onClick={onIncrease}>
        <Plus size={20} />
      </ButtonQuantity>
    </ChangeQuantity>
  );
}
