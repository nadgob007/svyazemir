import classNames from "classnames";
import "./CardMini.scss";

export interface ICardMini {
  person: IPerson;
}

export interface IPerson {
  img: { src: string; alt: string };
  firstName: string;
  lastName: string;
  patronymic?: string;
  roles: string[];
  quote?: string;
  email: string;
}

export const CardMini = (props: ICardMini) => {
  const { person } = props;

  return (
    <div className="CardMini">
      <img className="photo" src={person.img.src} alt={person.img.alt} />
      <div className={classNames("info", {sofia: person.firstName=== 'Софья'})}>
        <h3>{person.lastName} {person.firstName} {person.patronymic}</h3>
        <ul className={classNames("roles", {sofia: person.firstName=== 'Софья'})}>
            {
                person.roles.map((i,index)=><li key={index}>{i}</li>)
            }
        </ul>
        {person.quote && (
          <div className="quote">
            <div>
              <p>
                <span className="top">"</span>
                {person.quote}
                <span className="bottom">"</span>
              </p>
            </div>
          </div>
        )}
        <div className="email">Почта: <p>{person.email}</p></div>
      </div>
    </div>
  );
};
