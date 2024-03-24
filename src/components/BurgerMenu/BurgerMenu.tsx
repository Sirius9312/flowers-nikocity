import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FlowersContext } from "../../stores/FlowersContext";
import './BurgerMenu.scss';

type Props = {
  transformMobileMenu: number,
  setTransformMobileMenu: (transform: number) => void,
};

export const BurgerMenu: React.FC<Props> = ({
  transformMobileMenu,
  setTransformMobileMenu,
}) => {
  const {
    favourites,
    cart,
  } = useContext(FlowersContext);

  const getActiveBurgerMenuLink = ({ isActive }: { isActive: boolean }) => {
    return (isActive)
      ? "burger-menu__menu-link header__menu-link--is-active"
      : "burger-menu__menu-link";
  };

  const handleCloseMenu = () => {
    setTransformMobileMenu(-100);
    document.body.style.overflow = "unset";
  };

  return (
    <nav
      className="burger-menu App__menu"
      style={
        {
          transform: `translateX(${transformMobileMenu}%)`,
        }
      }
    >
      <div className="burger-menu__top">
        <div className="burger-menu__logo-container">
          <Link to="/home" className="logo">
            <img
              src="img/logo.jpg"
              className="logo__logo-image"
              alt="xrizantem-opt"
            />
          </Link>
        </div>

        <div className="burger-menu__mobile-menu-container">
          <div className="burger-menu__icon-container">
            <button
              type="button"
              className="burger-menu__close-menu-button"
              onClick={handleCloseMenu}
            >
              <div className="icon icon--close-menu-cross" />
            </button>
          </div>
        </div>
      </div>

      <ul className="burger-menu__list">
        <li className="burger-menu__item">
          <NavLink
            to="/"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Домашня
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/chrysantema_golova"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Хризантема голова
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/chrysantema_melkotsvetka"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Хризантема дрібноквітка
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/chrysantema_multiflora"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Хризантема мультифлора
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/alstromeria"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Альстромерія
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/allinfo"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Додаткова інформація
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/contacts"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Контакти
          </NavLink>
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/favourites"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Товари, які сподобались
          </NavLink>

          {
            !!favourites.length && (
              <div className="burger-menu__count">
                {favourites.length}
              </div>
            )
          }
        </li>

        <li className="burger-menu__item">
          <NavLink
            to="/cart"
            className={getActiveBurgerMenuLink}
            onClick={handleCloseMenu}
          >
            Кошик
          </NavLink>

          {
            !!cart.length && (
              <div className="burger-menu__count">
                {cart.map(item => item.count).reduce((a, b) => a + b, 0)}
              </div>
            )
          }

        </li>
      </ul>
    </nav>
  );
};
