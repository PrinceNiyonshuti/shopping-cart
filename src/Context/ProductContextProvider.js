/** @format */

import React, { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

const ProductContextProvider = (props) => {
	const [productData, setProductData] = useState(null);
	// provider data
	const value = {};
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
