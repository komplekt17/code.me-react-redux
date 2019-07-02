import React from 'react';
/*
	7-13. Даны 3 селекта. В первом можно выбрать день, во втором месяц, а в третьем год. Дан абзац. Сделайте так, чтобы в этот абзац вывелся день недели за выбранную дату. Пусть по умолчанию в селекте отображается текущая дата.
*/
const Task = (props) => {

	const {
		storeFromApp, 
		addSelectValueDate, 
		addSelectValueMonth, 
		addSelectValueYear} = props;

	const getCurrentDate = (y, m, d) => {
		var z, options;
		if(y !== 0){ // получаем длинную дату
			z = new Date(y, m, d);
			options = {
			  year: 'numeric',
			  month: 'long',
			  day: 'numeric',
			  weekday: 'long'
			};
			return z.toLocaleString("en", options);
		}else{ //получаем только название месяца
			z = new Date(y, m, d);
			options = {
			  month: 'long'
			};
			return z.toLocaleString("en", options);
		}
	}

	const {
		dates, 
		months, 
		years, 
		valueSelectDate, 
		valueSelectMonth, 
		valueSelectYear} = storeFromApp;

	const datesList = dates.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});
	const monthsList = months.map((item, index)=>{
		return <option key={index} value={index}>{getCurrentDate(0, item, 0)}</option>
	});
	const yearsList = years.map((item, index)=>{
		return <option key={index} value={index}>{item}</option>
	});

    return (
    	<form className="form">
  			<div className="form-row">
    			<div className="form-group">
      				<label forhtml="selectDate">Date</label>
					<select
						className="form-control"  
						name="selectDate" id="selectDate"
						value={dates.indexOf(valueSelectDate)}
						onChange={(ev)=>addSelectValueDate(dates[ev.target.value])}>
						{datesList}
					</select>
  				</div>
    			<div className="form-group">
      				<label forhtml="selectMonth">Month</label>
					<select
						className="form-control"  
						name="selectMonth" id="selectMonth"
						value={valueSelectMonth+1}
						onChange={(ev)=>addSelectValueMonth(ev.target.value-1)}>
						{monthsList}
					</select>
  				</div>
    			<div className="form-group">
      				<label forhtml="selectYear">Year</label>
					<select
						className="form-control"  
						name="selectYear" id="selectYear"
						value={years.indexOf(valueSelectYear)}
						onChange={(ev)=>addSelectValueYear(years[ev.target.value])}>
						{yearsList}
					</select>
  				</div>
  			</div>
  			<div className="form-row">
  			{getCurrentDate(valueSelectYear, valueSelectMonth, valueSelectDate)}
  			</div>
		</form>
    );
}

export default Task;