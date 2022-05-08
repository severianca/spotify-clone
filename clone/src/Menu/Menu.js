import {React} from 'react';
import {ItemMenu} from './ItemMenu';

import './Menu.css';

function Menu() {
    /**
     * Данные для отображения меню
     */
    const menuData = [
        {
            id: 1,
            icon: './icon/home.svg',
            title: 'Главная',
            to: '/home'
        },
        {
            id: 2,
            icon: './icon/search.svg',
            title: 'Поиск',
            to: '/search'
        },
        {
            id: 3,
            icon: './icon/myMediaLibrary.svg',
            title: 'Моя медиатека',
            to: 'myMediaLibrary'
        }
    ];
    
    const itemMenu = menuData.map((item) =>
        <ItemMenu
            key={item.id}
            icon={item.icon}
            title={item.title}
            to={item.to}
        />
    );

    return (
        <div className="Menu__width Menu__background flex-column">
            <ul className="Menu__notMarker">
                {itemMenu}
            </ul>
        </div>
    )
}

export {Menu};