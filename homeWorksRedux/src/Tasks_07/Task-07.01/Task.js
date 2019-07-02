import React from 'react';

/*
	7-1. Дан текстареа и абзац. Сделайте так, чтобы при наборе текста в текстареа он автоматически появлялся в этом абзаце.
*/

const Task = ({ addTextFromApp, addTextProps }) => {
    //console.log(addTextFromApp);

    return (
        <form>
			<div className="form-group">
				<label forhtml="exampleFormControlTextarea1">
					{typeof addTextFromApp === 'undefined' ? 'empty': addTextFromApp.text}
				</label>
				<textarea 
					className="form-control" id="exampleFormControlTextarea1" 
					onChange={(ev)=>{addTextProps(ev.target.value)}}
					name="" cols="30" rows="10"></textarea>
			</div>
		</form>

    );
}

export default Task;