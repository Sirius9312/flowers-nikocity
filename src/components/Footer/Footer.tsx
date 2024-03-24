import { NavLink } from "react-router-dom";
import './Footer.scss';

export const Footer = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }) => {
    return (isActive)
      ? "footer__menu-link footer__menu-link--is-active"
      : "footer__menu-link";
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__copy">&copy; flowers-nikocity 2024.</p>

          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <NavLink to="/" className={getActiveLink}>
                  Домашня
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/chrysantema_golova" className={getActiveLink}>
                  Хризантема голова
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/chrysantema_melkotsvetka" className={getActiveLink}>
                  Хризантема дрібноквітка
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/chrysantema_multiflora" className={getActiveLink}>
                  Хризантема мультифлора
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/alstromeria" className={getActiveLink}>
                  Альстромерія
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/allInfo" className={getActiveLink}>
                  Додаткова інформація
                </NavLink>
              </li>

              <li className="footer__menu-item">
                <NavLink to="/contacts" className={getActiveLink}>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}