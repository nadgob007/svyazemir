import "./Team.scss";
import image4 from "../../assets/images/image4.png";
import Artem from "../../assets/images/artem.jpg";
import Danil from "../../assets/images/danil.jpg";

import Bogdan from "../../assets/images/Bogdan.png";
import Ilya from "../../assets/images/ilya.png";
import TeamInTrain from "../../assets/images/teamInTrain.jpg";

import Sofia from "../../assets/images/Sofia.png";
import Roman from "../../assets/images/Roman.png";

import { CardMini, IPerson } from "../../components/CardMini/CardMini";
import { Card } from "../../components/Card/Card";

export const Team = () => {
  return (
    <div className="Team">
      <div className="team-photo">
        <div className="title">
          Наша команда состоит из молодых и талантливых людей, которые стремятся
          к развитию своего проекта. Наша команда состоит из разработчиков,
          тестировщиков, дизайнеров и менеджеров проектов. Каждый из нас имеет
          свои уникальные навыки и опыт, которые мы используем для достижения
          общей цели - создания инновационного продукта.
        </div>
        <div className="comand-photo">
          <img src={image4} alt={image4} />
        </div>
      </div>

      <div className="quote-persons">
        <Card person={PERSONS[0]} />

        <div className="divide-text">
          Мы постоянно работаем над улучшением нашего продукта, проводим
          исследования рынка и анализируем потребности наших клиентов. Мы также
          стараемся следить за новыми технологиями и трендами, чтобы наше
          устройство было всегда актуально
        </div>

        <Card person={PERSONS[1]} />
      </div>

      <div className="programmers">
        <div className="cards-column">
          <CardMini person={PERSONS[2]} />
          <CardMini person={PERSONS[3]} />
        </div>
        <div className="programmers-image">
          <img src={TeamInTrain} alt="team in train"></img>
        </div>
      </div>

      <div className="designSecurity">
        <div className="divide-text">
          Наша команда очень дружная и сплоченная. Мы поддерживаем друг друга и
          помогаем в решении любых проблем. Мы уверены, что благодоря сильной
          команде мы сможем достичь успеха в нашем бизнесе. Мы верим в наш
          продукт и уверены, что он сможет изменить мир к лучшему. Мы готовы
          работать усердно и не останавливаться на достигнутом, чтобы достичь
          наших целей и мечтаний!
        </div>
        <div className="cards-row">
          <CardMini person={PERSONS[4]} />
          <CardMini person={PERSONS[5]} />
        </div>
      </div>
    </div>
  );
};

const PERSONS: IPerson[] = [
  {
    img: { src: Artem, alt: "Артем" },
    firstName: "Артём",
    lastName: "Шипуля",
    patronymic: "Дмитриевич",
    roles: ["Основатель проекта, схемотехник"],
    quote:
      "Резон, это довольно большой проект, который делается силами небольшого коллектива, и не смотря на высокую нагрузку на каждого, мы продолжаем работу. Суть в том, что участники команды живут техническим творчеством, нам нравится создавать сложные вещи, мы не можем жить по другому.",
    email: "radio.hackig@gmail.com",
  },
  {
    img: { src: Danil, alt: "Данил" },
    firstName: "Данила",
    lastName: "Елхимов",
    patronymic: "Алексеевич",
    roles: ["Менеджмент, тестирование"],
    quote:
      `Для меня грантовый проект должен
      стать делом жизни. Зная, как он принесёт пользу учёным и
      инженерам, чьи специализации связаны с благими исследованиями
      и производством техники для общества, я могу быть уверенным в
      нашем будущем и спать спокойно`,
    email: "b248553@gmail.com",
  },
  {
    img: { src: Bogdan, alt: "Богдан" },
    firstName: "Богдан",
    lastName: "Марилов",
    roles: [
      "Разработчик. Мобильная, Web-разработка",
      "Создание сайтов, участие в разработке мобильных приложений",
    ],
    email: "nadgob007@mail.ru",
  },
  {
    img: { src: Ilya, alt: "Илья" },
    firstName: "Илья",
    lastName: "Торжков",
    roles: [
      "Программист, проектный управляющий",
      "Оказание помощи в разработке и внедрении решений создаваемых командой",
    ],
    email: "ilya-t.2000@yandex.ru",
  },
  {
    img: { src: Sofia, alt: "Софья" },
    firstName: "Софья",
    lastName: "Турченик",
    roles: ["Дизайнер проекта", "Дизайн сайтов и презентаций"],
    email: "salatikkk81@gmail.com",
  },
  {
    img: { src: Roman, alt: "Артем" },
    firstName: "Роман",
    lastName: "Филиппов",
    roles: [
      "Программист, специалист по ИБ",
      "Программирование, тестирование и отладка, обеспечение информационной безопасности",
    ],
    email: "filippov1604@gmail.com",
  },
];
