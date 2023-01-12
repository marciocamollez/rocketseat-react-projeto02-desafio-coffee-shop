import { ListItem, ButtonAddToCart } from "./styles";
import { coffees } from "../../data/coffees";
import { QuantityInput } from "../QuantityInput";
import { ShoppingCart } from "phosphor-react";

export function CoffeeList() {
  return (
    <ListItem>
      {coffees.map((coffee) => (
        <div key={coffee.id} className="coffee--item">
          <div className="coffee--item_img">
            <img src={coffee.photo} />
          </div>
          <div className="coffee--item_tag">
            {coffee.tags.map((tag) => (
              <span key={`${coffee.id}${tag}`}>{tag}</span>
            ))}
          </div>
          <div className="coffee--item_name">
            <h3>{coffee.name}</h3>
          </div>
          <div className="coffee--item_desc">
            <p>{coffee.description}</p>
          </div>

          <div className="coffee--item_price">
            <div>
              R$ <p>{coffee.price}</p>
            </div>

            <QuantityInput />
            <ButtonAddToCart>
              <ShoppingCart size={20} />
            </ButtonAddToCart>
          </div>
        </div>
      ))}
    </ListItem>
  );
}
