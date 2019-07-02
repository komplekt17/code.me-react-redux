const dateValueAction = (number) => {
	return {
		type: 'ADD_VALUE_SELECT_DATE',
		value: number
	}
}

const monthValueAction = (number) => {
	return {
		type: 'ADD_VALUE_SELECT_MONTH',
		value: number
	}
}

const yearValueAction = (number) => {
	return {
		type: 'ADD_VALUE_SELECT_YEAR',
		value: number
	}
}
export {dateValueAction, monthValueAction, yearValueAction};