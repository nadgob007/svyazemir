import './Team.scss'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import Artem from '../../assets/images/Artem.png'
import Danil from '../../assets/images/Danil.png'
import Roman from '../../assets/images/Roman.png'
import Sofia from '../../assets/images/Sofia.png'
import Bogdan from '../../assets/images/Bogdan.png'

import { Card, IPerson } from '../../components/Card/Card'

export const Team = ( ) => {
    return <div className="Team">
        <hr className='top-hr'/>
        <div className='title'>
            <h2>Наша команда - большая и дружная!</h2>
            <div className='comand-photo'>
                <img className='a' src={image4} alt={image4}/>
                <img className='a' src={image5} alt={image5}/>
            </div>
        </div>
        <div className='persons'>
            {
                PERSONS.map((item, index)=><Card person={item} key={index}/>)
            }
        </div>
    </div>
}

const PERSONS: IPerson [] = [
    {
        img: Artem,
        name: 'Шипуля Артём Дмитриевич',
        role: 'Основатель проекта, схемотехник',
        task: 'Осуществляет техническое руководство проектом "Резон", параллельно занимается разработкой модуля "Высокоскоростной программно конфигурируемый приёмопередатчик"',
        contact: 'radio.hackig@gmail.com'
    },
    {
        img: Danil,
        name: 'Елхимов Данила Алексеевич',
        role: 'Менеджмент/тестировщик',
        task: 'Управление персоналом, менеджмент планирования, тестирование продукта',
        contact: 'b248553@gmail.com'
    },
    {
        img: Roman,
        name: 'Филиппов Роман Русланович',
        role: 'Программист, специалист по ИБ',
        task: 'Программирование, тестирование и отладка, обеспечение информационной безопасности',
        contact: 'filippov1604@gmail.com'
    },
    {
        img: Sofia,
        name: 'Турченик Софья Алексеевна',
        role: 'Дизайнер проекта',
        task: 'Создание макетов сайтов, презентаций',
        contact: 'salatikkk81@gmail.com'
    },
    {
        img: Bogdan,
        name: 'Марилов Богдан Сергеевич',
        role: 'Разработчик. Веб-разработка, мобильная разработка',
        task: 'Создание сайтов, участие в разработке мобильных приложений',
        contact: 'nadgob007@mail.ru'
    }
]