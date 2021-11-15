import React from 'react'

function Button({ name, radius, AddToCart }) {
	return (
		<div>
			<button
				className={`px-4 py-1 bg-blue-800 ${radius} text-white font-light hover:bg-blue-700`}>
				{name}
			</button>
		</div>
	);
}

export default Button
