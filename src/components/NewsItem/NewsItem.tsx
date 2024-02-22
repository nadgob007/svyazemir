import { Link } from 'react-router-dom'
import './NewsItem.scss'

export interface INewItemProps {
    newItem: INewItem
}

export interface INewItem {
    img: string []
    text: string
    link: string
}

export const NewsItem = (props: INewItemProps) => {
    const {img, text, link} = props.newItem
    return <div className="NewsItem">
        {img.map((item, index)=><img src={item} alt={item} key={index}/>)}
        <div className='text'>
            <p>{text}</p>
            <Link to={link}>{link}</Link>
        </div>
    </div>
   
}