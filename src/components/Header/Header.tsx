import { NavLink, useParams } from 'react-router-dom';
import './Header.scss'
import {ReactComponent as LogoNew} from '../../assets/icons/LogoNew.svg';

export const Header = () => {
    return <header>
        <div className="Header">
            <div className='logo'>
                <NavLink to='/'>  
                    <LogoNew/>
                </NavLink>
            </div>
            <div className='navigation'>
                <NavLink  className="nav-link" to='/' data-title='Главная'>Главная</NavLink>
                <NavLink  className="nav-link" to='/information' data-title='Информация'>Информация</NavLink>
                <NavLink  className="nav-link" to='/team' data-title='Команда'>Команда</NavLink>
            </div>
            <div className='contact-number'>
                <p>+7(927)207-22-41</p>
            </div>
            <div>
                <div className='button'>Заказать!</div>
            </div>
        </div>
    </header>
}