/** @format */

import React from "react";

function TextInput({ type, id, refData, placeholder }) {
	return (
		<div className="p-3 w-full">
			<input
				type={type}
				required
				id={id}
				ref={refData}
				className="border p-2 rounded w-full"
				placeholder={placeholder}
			/>
		</div>
	);
}

export default TextInput;
