import React, { Component } from 'react';
/*
	7-3. Дан чекбокс и какой-то абзац с текстом. Сделайте так, чтобы если чекбокс отмечен - абзац был виден на экране, а если не отмечен - не видим.
*/

class Tasks extends Component {

    state = {
        checked: false
    }

    handleCheckbox = (ev) => {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        var text = '';
        if (this.state.checked) text = <span>Text</span>;
        else text = '';
        return (
            <div>
				<input 
					checked={this.state.checked} 
					onChange={this.handleCheckbox} 
					type="checkbox"/>
				{text}
			</div>
        )
    }

}

export default Tasks;