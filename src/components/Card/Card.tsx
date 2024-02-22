import './Card.scss'

export interface ICard {
    person: IPerson
}

export interface IPerson {
    img: string
    name: string
    role: string
    task: string
    contact: string
}

export const Card = (props: ICard) => {
    const {person} = props

    return <div className="Card">
        <img className='photo' src={person.img} alt={person.img}/>
        <div className='info'>
            <div className='name'>
                <h3>{person.name}</h3>
            </div>
            <hr className='top-hr'/>
            <div className='details'>
                <p>{person.role}</p>
                <p>{person.task}</p>
                <p className='contact'>{person.contact}</p>
            </div>
        </div>
    </div>
}