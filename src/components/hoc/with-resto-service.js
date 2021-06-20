import React from 'react';
import RestoServiceContext from '../resto-service-context';

//Компонента высшего порядка возвращает функцию с аргументом в виде компоненты
const WithRestoService = () => (Wrapped) => {
	return (props) => {
		return (
			<RestoServiceContext.Consumer>
				{
					//Функция будет получать RestoService из Provider
					(RestoService) =>{
						//RestoService будет применяться к данной компоненте в него
						//в него будет передоваться все, что приходит из Provider
						return <Wrapped {...props} RestoService={RestoService}/>
					}
				}
			</RestoServiceContext.Consumer>
		)
	};
};

export default WithRestoService;