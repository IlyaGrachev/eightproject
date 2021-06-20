import React from 'react';


//Создаем контекст, для того, чтобы распространить сервис (запросы на сервер)
//для всех компонент
const RestoServiceContext = React.createContext();

export default RestoServiceContext;