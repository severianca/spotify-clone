import {Link} from 'react-router-dom';

import '../Base/Base.css';
import './ItemMenu.css';

function ItemMenu(props) {
    /**
     * {number} размер иконки
     */
    const iconSize = 24;

    return (
        <li className="flex-row margin_top-s margin_bottom-s">
            <Link to={props.to} className="flex-grow-1 flex-shrink-1 ItemMenu__notUnderline margin_left-xl margin_right-xl">
                <img src={require(`${props.icon}`)} height={iconSize} width={iconSize}/>
                <span className="color-light margin_left-m">{props.title}</span>
            </Link>
        </li>
    )
}

export {ItemMenu};