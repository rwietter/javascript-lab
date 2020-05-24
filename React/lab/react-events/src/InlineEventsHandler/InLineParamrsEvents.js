import React from 'react';

export default function InlineParams() {

	const [count, setCount] = React.useState(0);

	function handleCount(delta) {
		setCount(count + delta);
	}

	return (
		<div>
			Count: {count}
			<button type="button" onClick={() => handleCount(1)}>
				Increase Count
      </button>
			<button type="button" onClick={() => handleCount(-1)}>
				Decrease Count
      </button>
		</div>
	);
}