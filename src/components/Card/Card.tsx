import classNames from "classnames";
import { IPerson } from "../CardMini/CardMini";
import "./Card.scss";

export interface ICard {
  person: IPerson;
}

export const Card = (props: ICard) => {
  const { person } = props;

  return (
    <div className="Card">
      <img className="photo" src={person.img.src} alt={person.img.alt} />
      <div className="info">
        <h2 className="name">{person.lastName} {person.firstName} {person.patronymic}</h2>
        <ul className="roles">
          {person.roles.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <div className="quote">
          <div>
            <p>
              <span className="top">"</span>
              {person.quote}
              <span className="bottom">"</span>
            </p>
          </div>
        </div>
        <div className="email"><p>Почта: <span>{person.email}</span></p></div>
      </div>
    </div>
  );
};
