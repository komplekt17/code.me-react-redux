const handlerInputAction = (index, name, value) => {
	return {
		type: 'HANDLER_INPUTS',
		index, name, value
	}
}

export {handlerInputAction}