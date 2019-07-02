const initialState = {
	routes: [
		{
			name: 'Таракташская тропа - маршрут на Ай-Петри',
			img: 'http://krymea.ru/upload/000/u1/002/5fd18557.jpg',
			discription: 'Живописная тропа на плато Ай-Петри из Ялты мимо водопада Учан-Су.' 
		},
		{
			name: 'Маршрут на Ильяс-Кая и храм Солнца ', 
			img: 'http://krymea.ru/upload/000/u1/4d/3c/38184ad8.jpg', 
			discription: 'Маршрут к храму Солнца и на Ильяс-Кая и обратно - для начинающих туристов и опытных походников.'
		},
		{
			name: 'Тропа Голицына в Новом Свете', 
			img: 'http://krymea.ru/upload/000/u1/100/cdc7c5cf.jpg', 
			discription: 'Описание жемчужины Нового Света - тропы Голицына, идущей вдоль берега под скалами.'
		},
		{
			name: 'Байдарская стена - от Оливы до Фороса', 
			img: 'http://krymea.ru/upload/000/u1/074/d882c326.jpg', 
			discription: 'Нитка маршрута Олива - перевал Шайтан-Мердвен - Байдарская стена - Форосская церковь.'
		}
	],
	option: 0
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				option: action.value
			}
		default:
			return state;
	}
}

export default Reducer;