import logo from "./logo.svg";
import fav from "./fav.svg";
import basket from "./basket.svg";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export default function Header(props) {
  return (
    <header className="header">
      <Container>
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <NavLink to="/favorite" className="nav-logo__link">
              <img src={fav} alt="favorite" width={30} height={30} />
              {props.favorite === null ? (
                <p className="nav-logo__counter left--counter">0</p>
              ) : (
                <p className="nav-logo__counter left--counter">
                  {props.favorite.length}
                </p>
              )}
            </NavLink>
          </li>
          <li className="header-nav__item">
            <NavLink to="/" className="nav-logo__link">
              <img src={logo} alt="LOGO" width={200} height={100} />
            </NavLink>
          </li>
          <li className="header-nav__item">
            <NavLink
              to="/checkout"
              className="nav-logo__link"
              onClick={props.clickBasket}>
              <img src={basket} alt="basket" width={30} height={30} />
              {props.basket === null ? (
                <p className="nav-logo__counter rigth--counter">0</p>
              ) : (
                <p className="nav-logo__counter rigth--counter">
                  {props.basket.length}
                </p>
              )}
            </NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
}
Header.propTypes = {
  favorite: PropTypes.array,
  basket: PropTypes.array,
};
