import React from 'react';
/*
	7-7. Дан текстареа и кнопка. Дан также стейт texts с массивом текстов. Изначально этот массив пустой, но каждый раз по нажатию на кнопку в конец этого массива должно записаться текущее содержимое текстареа. Выведите содержимое массива this.state.texts так, чтобы каждый элемент массива выводился в новом абзаце.
*/
const Task = ({ storeFromApp, addSelectValue }) => {

    let trigger = '';
    const texts = storeFromApp.texts.map((item, index) => {
        return <div key={index}>{index+1}. {item}</div>
    });

    return (
        <form className="form" onSubmit={(ev)=>ev.preventDefault()}>
			<div className="form-group">
				<label forhtml="ControlTextarea">
					Enter your text 
				</label>
				<textarea 
					className="form-control" id="ControlTextarea" 
					onChange={(ev)=>{trigger = ev.target.value}}
					name="" cols="30" rows="5"></textarea>
			</div>
			<button type="button" className="btn btn-info btn-block" onClick={()=>{
						if(trigger !== ''){
							//console.log(storeFromApp);
							document.getElementById('ControlTextarea').value = '';
							addSelectValue(trigger);
						}
				}}>
				AddText
			</button>
			<br/>
			{texts}
    	</form>
    );
}

export default Task;