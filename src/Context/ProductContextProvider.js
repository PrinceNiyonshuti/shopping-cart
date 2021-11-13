/** @format */

import React from "react";
import { ProductContext } from "./ProductContext";

const ProductContextProvider = (props) => {
	// provider data
	const value = {};
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
