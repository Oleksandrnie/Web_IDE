import './App.css';
import React from 'react';

function App() {
	const ls = localStorage;
	const [count, setCount] = React.useState(Number(ls.getItem('counter')) || 0);

	const toLS = () => {
		setCount((prevCount) => {
			const newCount = prevCount + 1;
			ls.setItem('counter', JSON.stringify(newCount));
			return newCount;
		});
	};

	return (
		<>
			<h1>Clicker</h1>
			<div className="card">
				<button onClick={toLS}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
