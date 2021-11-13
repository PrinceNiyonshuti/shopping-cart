/** @format */

import React, { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

const ProductContextProvider = (props) => {
	const [productData, setProductData] = useState(null);

	// Retrieve all products
	useEffect(() => {
		fetch(`http://localhost:8000/products`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setProductData(data);
			});
	}, []);

	// provider data
	const value = { productData };
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
