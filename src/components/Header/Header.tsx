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
                <NavLink  className="nav-link" to='/'> Главная </NavLink>
                <NavLink  className="nav-link" to='/information'> Информация </NavLink>
                <NavLink  className="nav-link" to='/team'> Команда </NavLink>
                <NavLink  className="nav-link" to='/news'> Новости </NavLink>
                <NavLink  className="nav-link" to='/contact'> Контакты </NavLink>
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