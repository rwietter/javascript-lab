import React from 'react';
import './App.css';
import Input from './Input'
import CallbackEvents from './CallbackEvents/CallbackEvents'

function App() {
	const [count, setCount] = React.useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div>
			<div>
				<Input />
			</div>

			Count: {count}
			<button type="button" onClick={handleClick}>
				Increase Count
            </button>
			<div>
				<CallbackEvents />
			</div>
		</div>
	);
}

export default App;
