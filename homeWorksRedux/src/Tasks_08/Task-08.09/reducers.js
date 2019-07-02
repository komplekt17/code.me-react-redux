const initialState = {
	workers: [
		{name: 'Bob', surname: 'Meljanski', salary: 5140},
		{name: 'Michel', surname: 'Hensson', salary: 5420},
		{name: 'Jane', surname: 'Mitchel', salary: 2054},
		{name: 'Rebeka', surname: 'Wotson', salary: 4470},
		{name: 'Max', surname: 'Payton', salary: 3920}
	],
	typeSort: [
		'Choose sort',
		'sort by ascending name',
		'sort by descending name',
		'sort by ascending surname',
		'sort by descending surname',
		'sort by ascending salary',
		'sort by descending salary'
	],
	option: '0',
	classNames: {
		cls_Name: 'fa fa-long-arrow-alt-down fa-spin',
		cls_Surname: 'fa fa-long-arrow-alt-down fa-spin',
		cls_Salary: 'fa fa-long-arrow-alt-down fa-spin'	
	}
}

const startSort = (state, option) => {
		//console.log(option)
		const arr = state.workers.slice();
		var kk;
		if(state.option === '0'){
			alert('Select type sorting')
			kk = arr;
		}else if(option === '1'){
			kk = [...arr].sort((a,b) => (a.name<b.name)*2-1);
		}else if(option === '2'){
			kk = [...arr].sort((a,b) => (a.name>b.name)*2-1);
		}else if(option === '3'){
			kk = [...arr].sort((a,b) => (a.surname<b.surname)*2-1);
		}else if(option === '4'){
			kk = [...arr].sort((a,b) => (a.surname>b.surname)*2-1);
		}else if(option === '5'){
			kk = [...arr].sort((a,b) => (a.salary<b.salary)*2-1);
		}else if(option === '6'){
			kk = [...arr].sort((a,b) => (a.salary>b.salary)*2-1);
		}
		return kk;
	}


const setClassName = (option) => {
	switch(option){
		case '1':
			return {
				cls_Name: 'fa fa-long-arrow-alt-up',
				cls_Surname: '',
				cls_Salary: ''
			}
		case '2':
			return {
				cls_Name: 'fa fa-long-arrow-alt-down',
				cls_Surname: '',
				cls_Salary: ''
			}
		case '3':
			return {
				cls_Name: '',
				cls_Surname: 'fa fa-sort-alpha-up',
				cls_Salary: ''
			}
		case '4':
			return {
				cls_Name: '',
				cls_Surname: 'fa fa-sort-alpha-down',
				cls_Salary: ''
			}
		case '5':
			return {
				cls_Name: '',
				cls_Surname: '',
				cls_Salary: 'fa fa-long-arrow-alt-up'
			}
		case '6':
			return {
				cls_Name: '',
				cls_Surname: '',
				cls_Salary: 'fa fa-long-arrow-alt-down'
			}
		default:
			return {
				cls_Name: 'fa fa-long-arrow-alt-down fa-spin',
				cls_Surname: 'fa fa-long-arrow-alt-down fa-spin',
				cls_Salary: 'fa fa-long-arrow-alt-down fa-spin'	
			}
	}
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case 'VALUE_CLICKED_ITEM':
			return {
				...state,
				option: action.value
			}
		case 'SELECT_SORTING_ITEM':
			return {
				...state,
				workers: startSort(state, action.option),
				classNames: setClassName(action.option)
			}
		default:
			return state;
	}
}

export default Reducer;