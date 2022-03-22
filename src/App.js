import "./App.css";
import { useState, useEffect } from "react";
// making function app
function App() {
	
	// declaring the state(var)
	
	// use sate is used for default value
	
	// setpt is used to assign values to pt
	const [pt, setpt] = useState([
		// array used to store names for the drop down list
		// st start time ,nm name
		// et end time
		{ nm: "ABC", st: null, et: null },
		{ nm: "DEF", st: null, et: null },
		{ nm: "GHI", st: null, et: null },
		{ nm: "JKL", st: null, et: null },
	]);
 // interview list, empty array(no interview is scheduled till now)
	const [Il, setIl] = useState([]);
	// to add new value to interview list
	const updateSetIl = (obj) => {
		let temp = Il;
		temp = [...temp, obj];
		setIl(temp);
	};
	//works on reload
// 	useEffect(() => {}, [Il]);
	// text on button (validate)
	const [lbl, setlbl] = useState("Validate");
	
	// functionn to add the interview
	const func = (e) => {
		
		// we are preventing page reload occuring automatically
		e.preventDefault();
		
		// start time is less then end time then move ahead
		if (
			document.getElementById("start-hours").value +
				document.getElementById("start-minutes").value -
				(document.getElementById("end-hours").value +
					document.getElementById("end-minutes").value) >
			0
		) {
			// satrt time by format hours minute
			func({
				nm: document.getElementById("pt").value,
				st:
					document.getElementById("start-hours").value +
					document.getElementById("start-minutes").value,
				et:
					document.getElementById("end-hours").value +
					document.getElementById("end-minutes").value,
				// each time diffrent value generate (making key of id)
				id: Date.now(),
			});
		}
	};
	
	// returning app components
	return (
		<div className="App">
			<div className="Scheduler">
				<div className="components">
					<p className="title">Schedule an interview:</p>
					<br />
		
		// for drop down
					<select name="pt" id="pt">
		// making option at one time
						<optgroup>
		//iterate over each element in arrya
							{pt.map((pt) => {
								return (
									
									// for writing up items in drop down
									
									// generating diffrent unique key each time
									<option key={Date.now() + Math.random()} value={pt.nm}>
									// function calling of above declared array
										{pt.nm}
									</option>
								);
							})}
						</optgroup>
					</select>

					<form>
							
							// class name is for styling
						<div className="start-time">
							<label>Start time:</label>
							<div className="time-box">
								<input id="start-hours" type="number" />
								<input id="start-minutes" type="number" />
							</div>
						</div>
						<div className="end-time">
							<label>End time:</label>
							<div className="time-box">
								<input id="end-hours" type="number" />
								<input id="end-minutes" type="number" />
							</div>
						</div>
					</form>
					// clicking of button then func is called and interviews will be added
					<button onClick={func} className="button">
						{lbl}
					</button>
				</div>
			</div>
			// printing the scheduled interview in the listt 
			<div className="List">
				<p className="title">Scheduled interviews:</p>
//iterate over each element in array (name start time and end time)
				{Il.map((iv) => (
					<div className="list-item" key={iv.id}>
						<p>{iv.nm}</p>
						<div className="timing">
							
							// for bold text format (strong is used for printing start tiem and end time)
							<strong>{iv.st}</strong>
							<strong>{iv.et}</strong>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
