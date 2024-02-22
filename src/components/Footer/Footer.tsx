import "./Footer.scss";
import qr from "../../assets/images/qr-code.jpg";
import { ReactComponent as LogoSimple } from "../../assets/icons/logo-simple.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="a">
        <div className="contacts">
          <LogoSimple />
          <div className="text">
            <h2>Контакты</h2>
            <p>
              <span>Телефон:</span> +7(927)207-22-41, Илья Владиславович
            </p>
            <p>
              Почта: <span className="email">ilgor2242@ya.ru</span>
            </p>
            <p>Вконтакте: https://vk.com/ilgor18</p>
          </div>
        </div>
        <div className="about">
          <img className="qr-code" src={qr} alt="qr-code" />
          <div className="">
            <h2>Навигация по сайту:</h2>
            <div className="navigation">
              <NavLink className="nav-link" to="/information">
                Информация
              </NavLink>
              <NavLink className="nav-link" to="/team">
                Команда
              </NavLink>
              <NavLink className="nav-link" to="/news">
                Новости
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </footer>
  );
};
