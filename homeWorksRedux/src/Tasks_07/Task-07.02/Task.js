import React from 'react';
/*
	7-2. Дан чекбокс и абзац. Сделайте так, чтобы состояние чекбокса выводилось в этот абзац.
*/

const Task = ({ storeFromApp, actionFromApp }) => {

    //let checked = typeof storeFromApp === 'undefined' ? true : !storeFromApp.checked;
    console.log(storeFromApp.checked, typeof storeFromApp);

    return (
        <form>
        	<div className="form-group form-check">
			    <input 
			    	type="checkbox" 
			    	className="form-check-input" 
			    	id="exampleCheck1"
			    	// checked={checked}
					onChange={()=>{actionFromApp(!storeFromApp.checked)}} />
			    <label 
			    	className="form-check-label" 
			    	forhtml="exampleCheck1">
			    	{storeFromApp.checked ? 'CheckBox is not checked' : 'CheckBox is checked'}
		    	</label>
			  </div>
        </form>
    )
}

export default Task;