import React, {Component} from 'react';
/*
	7-10. Дан селект и 3 абзаца. В селекте можно выбрать один из трех пунктов. Сделайте так, чтобы в зависимости от выбора на экране был виден один из трех абзацев.
*/

class Tasks extends Component {

	state= {
		texts: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium odio velit laborum eveniet fugiat, praesentium. Aspernatur fugiat perspiciatis id ea officia, modi alias.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit dolores numquam tempora facere impedit, voluptatibus tempore magni, eaque mollitia officiis dolor soluta sapiente est excepturi. Dicta, eaque aperiam corporis!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis suscipit dolores numquam tempora facere impedit, voluptatibus tempore magni, eaque mollitia officiis dolor soluta sapiente est excepturi. '
		],
		checked: 0
	}

	handleSelect = (ev) => {
		this.setState({checked: ev.target.value});
	}

	render(){
		const list = this.state.texts.map((item, index)=>{
			return <option key={index} value={index}>Text-{index+1}</option>
		});
		return(
			<div>
				<select 
					name="" id=""
					value={this.state.checked}
					onChange={this.handleSelect}>
					{list}
				</select><br/>
				<p>Choiced text:<br/> {this.state.texts[this.state.checked]}</p>
			</div>
		);
	}
	
}

export default Tasks;