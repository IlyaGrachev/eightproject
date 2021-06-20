import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {
	
	state = {
		error: false
	}
	
	//Если вылетит ошибка:
	componentDidCatch(){
	// то ЭТОМУ стейту изменяем значение ошибки на true
		this.setState({error: true})
	}
	
	render() {
		//Если в ЭТОМ стейте значение ошибки true (произошла ошибка)
		if (this.state.error){
			//Отрисовываем компоненту ошибки
			return<Error />
		}

		//Если ошибки не случилось, то мы отрендерим все, что было внутри компоненты ErrorBoundry
		return this.props.children;
	}
}