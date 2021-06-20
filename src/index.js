import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoService = new RestoService();


ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<RestoServiceContext.Provider value={restoService}>
				<Router>
					<App />
				</Router>
			</RestoServiceContext.Provider>
		</ErrorBoundry>
	</Provider>
	, document.getElementById('root'));

/*
1. обертка Provider перед нижним оберткам store;
2. обертка ErrorBoudry ловит ошибки;
3. RestoServiceContext.Provider передает servce для работы с запросами;
4. Router осуществляет маршрутизацию в приложении; 

*/