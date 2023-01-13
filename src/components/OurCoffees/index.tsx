import { coffees } from "../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList } from "./styles";

export function OurCoffees() {
  return (
    <CoffeeList>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </CoffeeList>
  );
}
