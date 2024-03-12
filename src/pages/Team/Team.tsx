import "./Team.scss";
import image4 from "../../assets/images/image4.png";
import Artem from "../../assets/images/artem.jpg";
import Danil from "../../assets/images/danil.jpg";
import Roman from "../../assets/images/roman.jpg";
import Sofia from "../../assets/images/sofia.jpg";
import Bogdan from "../../assets/images/bogdan.jpg";

import { Card, IPerson } from "../../components/Card/Card";

export const Team = () => {
  return (
    <div className="Team">
      <div className="team-photo">
        <div>
          Наша команда состоит из молодых и талантливых людей, которые стремятся
          к развитию своего проекта. Наша команда состоит из разработчиков,
          тестировщиков, дизайнеров и менеджеров проектов. Каждый из нас имеет
          свои уникальные навыки и опыт, которые мы используем для достижения
          общей цели - создания инновационного продукта.
        </div>
        <div className="comand-photo">
          <img className="a" src={image4} alt={image4} />
        </div>
      </div>

      <div className="quote-persons">
        <div className="card">
          <div className="image">
            <img className="a" src={Artem} alt={"Артём"} />
          </div>
          <div className="text">
            <h2>Шипуля Артём Дмитриевич</h2>
            <ul>
              <li>Основатель проекта, схемотехник.</li>
            </ul>
            <div className="quote">
              <div>
                <p>
                  <span className="top">"</span>Резон, это довольно большой
                  проект, который делается силами небольшого коллектива, и не
                  смотря на высокую нагрузку на каждого, мы продолжаем работу.
                  Суть в том, что участники команды живут техническим
                  творчеством, нам нравится создавать сложные вещи, мы не можем
                  жить по другому. <span className="bottom">"</span>
                </p>
              </div>
            </div>
            <div className="mail">Почта: radio.hackig@gmail.com</div>
          </div>
        </div>

        <div className="divide-text">
          Мы постоянно работаем над улучшением нашего продукта, проводим
          исследования рынка и анализируем потребности наших клиентов. Мы также
          стараемся следить за новыми технологиями и трендами, чтобы наше
          устройство было всегда актуально
        </div>

        <div className="card">
          <div className="image">
            <img className="a" src={Danil} alt={"Дмитрий"} />
          </div>
          <div className="text">
            <h2>Елхимов Данила Алексеевич</h2>
            <ul>
              <li>Менеджмент, тестирование</li>
            </ul>
            <div className="quote">
              <div>
                <p>
                  <span className="top">"</span>Для меня грантовый проект должен
                  стать делом жизни. Зная, как он принесёт пользу учёным и
                  инженерам, чьи специализации связаны с благими исследованиями
                  и производством техники для общества, я могу быть уверенным в
                  нашем будущем и спать спокойно
                  <span className="bottom">"</span>
                </p>
              </div>
            </div>
            <div className="mail">Почта: b248553@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="">

      </div>

    </div>
  );
};

const PERSONS: IPerson[] = [
  {
    img: Artem,
    name: "Шипуля Артём Дмитриевич",
    role: "Основатель проекта, схемотехник",
    task: 'Осуществляет техническое руководство проектом "Резон", параллельно занимается разработкой модуля "Высокоскоростной программно конфигурируемый приёмопередатчик"',
    contact: "radio.hackig@gmail.com",
  },
  {
    img: Danil,
    name: "Елхимов Данила Алексеевич",
    role: "Менеджмент/тестировщик",
    task: "Управление персоналом, менеджмент планирования, тестирование продукта",
    contact: "b248553@gmail.com",
  },
  {
    img: Roman,
    name: "Филиппов Роман Русланович",
    role: "Программист, специалист по ИБ",
    task: "Программирование, тестирование и отладка, обеспечение информационной безопасности",
    contact: "filippov1604@gmail.com",
  },
  {
    img: Sofia,
    name: "Турченик Софья Алексеевна",
    role: "Дизайнер проекта",
    task: "Создание макетов сайтов, презентаций",
    contact: "salatikkk81@gmail.com",
  },
  {
    img: Bogdan,
    name: "Марилов Богдан Сергеевич",
    role: "Разработчик. Веб-разработка, мобильная разработка",
    task: "Создание сайтов, участие в разработке мобильных приложений",
    contact: "nadgob007@mail.ru",
  },
];
