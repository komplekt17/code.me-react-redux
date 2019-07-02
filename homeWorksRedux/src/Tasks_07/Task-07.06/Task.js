import React from 'react';
/*
	7-6. Даны 3 радиокнопочки со значениями 1, 2 и 3. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.
*/
const Task = ({ storeFromApp, addSelectValue }) => {

    const radios = storeFromApp.cities.map((item, index) => {
        return (
            <div key={index} className="form-check">
				<input 
					checked={storeFromApp.valueSelect === index}
					onChange={(ev)=>addSelectValue(Number(ev.target.value))}
					className="form-check-input" 
					type="radio" 
					id={index} value={index}/>
				<label className="form-check-label" forhtml={index}>
				{item}
				</label>
			</div>
        )
    });
    return (
        <form className="form">
			<p>Your choice: {storeFromApp.cities[storeFromApp.valueSelect]}</p>
			{radios}
    	</form>
    );
}

export default Task;