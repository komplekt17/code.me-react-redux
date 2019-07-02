import React from 'react';
/*
	7-3. Дан чекбокс и какой-то абзац с текстом. Сделайте так, чтобы если чекбокс отмечен - абзац был виден на экране, а если не отмечен - не видим.
*/

const Task = ({ storeFromApp, actionFromApp }) => {

    //let checked = typeof storeFromApp === 'undefined' ? true : !storeFromApp.checked;
    //console.log(storeFromApp.checked, typeof storeFromApp);

    return (
        <form className="form">
        	<div className="form-group form-check">
			    <input 
			    	type="checkbox" 
			    	className="form-check-input" 
			    	id="exampleCheck1"
			    	// checked={checked}
					onChange={()=>actionFromApp(!storeFromApp.checked)} />
			    <label 
			    	className="form-check-label" 
			    	forhtml="exampleCheck1">
			    	{storeFromApp.checked ? 'CheckBox is checked' : 'CheckBox is not checked'}
		    	</label>
		  	</div>
		  	<p>
	    		{!storeFromApp.checked ? '' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quisquam asperiores inventore laudantium ea! Deserunt repudiandae quas ex. Velit accusantium ratione voluptas saepe repellat. Ducimus blanditiis dolorem, inventore similique aspernatur.'}
    		</p>
        </form>
    )
}

export default Task;