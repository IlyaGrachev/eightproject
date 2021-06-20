const menuLoadedActionCreator = (newMenu) => {
	return{
		type: 'MENU_LOADED',
		payload: newMenu
	};
}

export {
	menuLoadedActionCreator
};
