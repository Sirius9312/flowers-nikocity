import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FlowersContext } from "../../stores/FlowersContext";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import './Navbar.scss';

export const Navbar = () => {
  const {
    favourites,
    cart,
    query,
    setSearchWith,
  } = useContext(FlowersContext);
  const location = useLocation();

  const getActiveLink = ({ isActive }: { isActive: boolean }) => {
    return (isActive)
      ? "header__menu-link header__menu-link--is-active"
      : "header__menu-link";
  };

  const getActiveDropdownLinks = ({ isActive }: { isActive: boolean }) => {
    return (isActive)
      ? "header__dropdown-link header__dropdown-link--is-active"
      : "header__dropdown-link";
  };

  const activesRightButtons = ({isActive}: {isActive: boolean}) => {
    return (isActive)
      ? "header__right-button header__right-button--is-active"
      : "header__right-button"
  }

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWith({
      query: e.target.value || null,
      perPage: null,
      currPage: null,
      sortProducts: null,
    })
  };

  const [focusFlowersCeilMenu, setFocusFlowersCeilMenu] = useState(false);
  const dropdownFlowersCeilMenu = useRef<HTMLLIElement>(null);
  const [transformMobileMenu, setTransformMobileMenu] = useState(-100);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (dropdownFlowersCeilMenu.current
        && focusFlowersCeilMenu
        && !dropdownFlowersCeilMenu.current.contains(e.target as Node)) {
        setFocusFlowersCeilMenu(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [focusFlowersCeilMenu]);

  const handleDropdownFlowers = () => {
    if (focusFlowersCeilMenu) {
      setFocusFlowersCeilMenu(false);
    } else {
      setFocusFlowersCeilMenu(true);
    }
  };

  const handleOpenMenu = () => {
    setTransformMobileMenu(0);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <header className="header App__header">
        <div className="header__top">
          <div className="header__logo-menu-container">
            <Link to="/home" className="logo">
              <img
                src="img/logo.jpg"
                className="logo__logo-image"
                alt="xrizantem-opt"
              />
            </Link>

            <nav className={
              location.pathname === '/cart'
                ? "header__menu header__menu--hidden"
                : "header__menu"
            }>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <NavLink to="/" className={getActiveLink}>
                    Домашня
                  </NavLink>
                </li>

                <li
                  className="header__menu-item header__menu-item--flower-dropdown-item"
                  ref={dropdownFlowersCeilMenu}
                >
                  <button
                    className="header__dropdown-flowers-button"
                    onClick={handleDropdownFlowers}
                  >
                    Квіти
                  </button>

                  <div
                    className={
                      focusFlowersCeilMenu
                        ? "header__flowers-dropdown-content--active"
                        : "header__flowers-dropdown-content"
                    }
                  >
                    <NavLink
                      to="/chrysantema_golova"
                      className={getActiveDropdownLinks}
                      onClick={() => setFocusFlowersCeilMenu(false)}
                    >
                      Хризантема голова
                    </NavLink>

                    <NavLink
                      to="/chrysantema_melkotsvetka"
                      className={getActiveDropdownLinks}
                      onClick={() => setFocusFlowersCeilMenu(false)}
                    >
                      Хризантема дрібноквітка
                    </NavLink>

                    <NavLink
                      to="/chrysantema_multiflora"
                      className={getActiveDropdownLinks}
                      onClick={() => setFocusFlowersCeilMenu(false)}
                    >
                      Хризантема мультифлора
                    </NavLink>

                    <NavLink
                      to="/alstromeria"
                      className={getActiveDropdownLinks}
                      onClick={() => setFocusFlowersCeilMenu(false)}
                    >
                      Альстромерія
                    </NavLink>
                  </div>
                </li>

                <li className="header__menu-item">
                  <NavLink to="/allinfo" className={getActiveLink}>
                    Додаткова інформація
                  </NavLink>
                </li>

                <li className="header__menu-item">
                  <NavLink to="/contacts" className={getActiveLink}>
                    Контакти
                  </NavLink>
                </li>

                <li className="header__menu-item">
                  <NavLink to="/favourites" className={getActiveLink}>
                    Товари, які сподобались
                  </NavLink>

                  {
                    !!favourites.length && (
                      <div className="header__count">
                        {favourites.length}
                      </div>
                    )
                  }
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__searchbar">
            <div className={
              location.pathname === '/chrysantema_golova'
                || location.pathname === '/chrysantema_melkotsvetka'
                || location.pathname === '/chrysantema_multiflora'
                || location.pathname === '/alstromeria'
                  ? "header__search-container header__search-container--active"
                  : "header__search-container"
            }>
              <input
                type="text"
                className="header__search-input"
                value={query}
                onChange={(e) => handleQuery(e)}
                placeholder="Пошук..."
                
              />

              {
                query ? (
                  <button
                    className="header__sign-delete"
                    onClick={() => setSearchWith({ query: null, })}
                  >
                    <div className="icon icon--cross" />
                  </button>
                ) : (
                  <button className="header__sign-search">
                    <div className="icon icon--glass" />
                  </button>
                )
              }

              
            </div>
          </div>

          <div className="header__mobile-menu-container">
            <div className="header__icon-container">
              <button
                type="button"
                className="header__burger-menu-button"
                onClick={handleOpenMenu}
              >
                <div className="icon icon--burger-menu" />
              </button>
            </div>
          </div>

          <div className="header__rightButtonsContainer">
            <div className="header__icon-container">
              <NavLink
                to="/cart"
                className={activesRightButtons}
              >
                <div className="icon icon--cart" />
              </NavLink>
            </div>
            {
              !!cart.length && (
                <div className="header__count header__count--cart">
                  {cart.map(it => it.count).reduce((a, b) => a + b, 0)}
                </div>
              )
            }
          </div>
        </div>
      </header>

      <BurgerMenu
        transformMobileMenu={transformMobileMenu}
        setTransformMobileMenu={setTransformMobileMenu}
      />
    </>
  );
};