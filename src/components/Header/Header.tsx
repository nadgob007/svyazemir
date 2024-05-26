import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as LogoNew } from "../../assets/icons/LogoNew.svg";

function goToForm(navigte: NavigateFunction) {
  navigte("/");
  setTimeout(() => {
    // document.querySelector(".contactUs")?.scrollIntoView({behavior: "smooth"})
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, 0);
}

export const Header = () => {
  let navigte = useNavigate();
  return (
    <header>
      <div className="Header">
        <div className="logo">
          <NavLink to="/">
            <LogoNew />
          </NavLink>
        </div>
        <div className="navigation">
          <NavLink className="nav-link" to="/" data-title="Главная">
            Главная
          </NavLink>
          <NavLink
            className="nav-link"
            to="/information"
            data-title="Информация"
          >
            Информация
          </NavLink>
          <NavLink className="nav-link" to="/team" data-title="Команда">
            Команда
          </NavLink>
        </div>
        <div className="contact-number">
          <p>+7(902)159-56-50</p>
        </div>

        <div
          className="button"
          onClick={() => {
            goToForm(navigte);
          }}
        >
          Заказать!
        </div>

        <nav role="navigation">
          <div className="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className="menu">
              <a href="/">
                <li>Главная</li>
              </a>
              <a href="/information">
                <li>Информация</li>
              </a>
              <a href="/team">
                <li>Команда</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
