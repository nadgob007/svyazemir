import "./Home.scss";
import pavuk_naklon from "../../assets/images/pavuk_naklon_belaya_obvodka1.png";
import pavuk_pryamoy from "../../assets/images/pavuk_pryamoy_belaya_obvodka1.png";
import { ReactComponent as Divider } from "../../assets/icons/divider-line.svg";

export const Home = () => {
  return (
    <div className="Home">
      <div className="home-background">
        <div className="home-title">
          <h1>Резон</h1>
          <h3>Резон - ваш незаменимый помощник в беспроводном мире!</h3>
          <h3>Это маленький девайс с большими возможностями!</h3>
          <div className="learn-more">Узнать больше</div>
        </div>
      </div>
      <div className="discription">
        <h4>
          Наша команда разрабатывает самостоятельное устройство, с помощью
          которого можно осуществлять взаимодействие с системами беспроводной
          связи в целях настройки, тестирования, отладки, разработки и аудита
          безопасности.
        </h4>
        <Divider className="divider" />
      </div>

      <div className="advantages">
        <div className="b">
          <div className="advantages-text">
            <h4>Что может Резон, и чем он хорош?</h4>
            <div>
              <p>
                Благодаря беспроводным чипам и микроконтроллеру наш продукт
                имеет возможность:
              </p>
              <ul>
                <li>Поддерживать GSM, LORA, ZigBee, WI-FI, Bluetooth;</li>
                <li>Настраивать параметры связи;</li>
                <li>Анализировать данные;</li>
                <li>
                  Выявлять ошибки и исправлять их в режиме реального времени.
                </li>
              </ul>
            </div>
            <div>
              <p>Программное обеспечение позволяет осуществлять:</p>
              <ul>
                <li>Приемопередачу;</li>
                <li>Запись сигналов;</li>
                <li>Цифровую обработку сигналов;</li>
                <li>Настройку параметров связи.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="advantages-img">
          <img className="pavuk_pryamoy" src={pavuk_pryamoy} alt="Резон" />
        </div>
      </div>

      <div className="whom">
        <Divider className="divider-top" />
        <div className="c">
          <div className="whom-img">
            <img className="pavuk_naklon" src={pavuk_naklon} alt="Резон" />
          </div>
          <div className="a">
            <div className="whom-text">
              <h4>Кому пригодится Резон?</h4>
              <ul>
                <li>
                  Юридическим лицам, индивидуальным предпринимателям, физическим
                  лицам, занимающимся разработкой беспилотных аппаратов;
                </li>
                <li>Предприятиям, осуществляющим разработку систем связи;</li>
                <li>
                  Компаниям, проводящим разработку устройств для интернета вещей
                  и "Умных домов";
                </li>
                <li>
                  Компаниям, предлагающим услуги по технической защите
                  информации;
                </li>
                <li>
                  Юридическим лицам или индивидуальным предпринимателям,
                  занимающимся ремонтом смартфонов, маршрутизаторов и т.п.;
                </li>
                <li>
                  Физическим лицам, желающим оптимизировать домашний
                  интернет-трафик;
                </li>
                <li>Физическим лицам-техноэнтузиастам.</li>
              </ul>
            </div>
          </div>
        </div>
        <Divider className="divider-bottom" />
      </div>

      <div className="more">
        <h4>Заинтересовались? Читайте больше:</h4>
        <div className="learn-more">Больше информации</div>
      </div>
    </div>
  );
};
