import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

//оборачиваем App в компонент высшего порядка,
//чтобы App обернулась в Consumer и можно было использовать контекст
export default WithRestoService() (App); 