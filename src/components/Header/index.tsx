import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.png";
import { MapPin } from "phosphor-react";
import { CartIcon } from "../CartIcon";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <div>
          <img src={Logo} alt="" />
        </div>
        <section>
          <div className="location">
            <MapPin size={20} />
            Rio Grande do Sul
          </div>
          <NavLink to="/cart" title="Meu Carrinho">
            <CartIcon />
          </NavLink>
        </section>
      </HeaderContainer>
    </div>
  );
}
