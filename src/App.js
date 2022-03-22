import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [pt, setpt] = useState([
		{ nm: "ABC", st: null, et: null },
		{ nm: "DEF", st: null, et: null },
		{ nm: "GHI", st: null, et: null },
		{ nm: "JKL", st: null, et: null },
	]);

	const [Il, setIl] = useState([]);
	const updateSetIl = (obj) => {
		let temp = Il;
		temp = [...temp, obj];
		setIl(temp);
	};
	//works on reload
	useEffect(() => {}, [Il]);
	const [lbl, setlbl] = useState("Validate");
	const func = (e) => {
		e.preventDefault();
		if (
			document.getElementById("start-hours").value +
				document.getElementById("start-minutes").value -
				(document.getElementById("end-hours").value +
					document.getElementById("end-minutes").value) >
			0
		) {
			func({
				nm: document.getElementById("pt").value,
				st:
					document.getElementById("start-hours").value +
					document.getElementById("start-minutes").value,
				et:
					document.getElementById("end-hours").value +
					document.getElementById("end-minutes").value,
				id: Date.now(),
			});
		}
	};
	return (
		<div className="App">
			<div className="Scheduler">
				<div className="components">
					<p className="title">Schedule an interview:</p>
					<br />
					<select name="pt" id="pt">
						<optgroup>
		//iterate over each element in arrya
							{pt.map((pt) => {
								return (
									<option key={Date.now() + Math.random()} value={pt.nm}>
										{pt.nm}
									</option>
								);
							})}
						</optgroup>
					</select>

					<form>
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
					<button onClick={func} className="button">
						{lbl}
					</button>
				</div>
			</div>
			<div className="List">
				<p className="title">Scheduled interviews:</p>
//iterate over each element in array
				{Il.map((iv) => (
					<div className="list-item" key={iv.id}>
						<p>{iv.nm}</p>
						<div className="timing">
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
