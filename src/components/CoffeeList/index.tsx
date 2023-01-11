import { ListItem } from "./styles";
import { coffees } from "../../data/coffees";

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
            R$ <p>{coffee.price}</p>
          </div>
        </div>
      ))}
    </ListItem>
  );
}
