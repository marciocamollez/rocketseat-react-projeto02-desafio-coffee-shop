import { RemoveButton } from "./styles";
import { Trash } from "phosphor-react";

export default function RemoveItemFromCart() {
  return (
    <RemoveButton>
      <Trash size={20} /> Remover
    </RemoveButton>
  );
}
