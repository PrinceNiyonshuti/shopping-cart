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

	// Adding product to cart
	const AddToCart = (addCartProduct) => {
		const { title, image, price } = addCartProduct;

		const cartedProduct = { title, image, price };
		fetch("http://localhost:8000/cart", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(cartedProduct),
		}).then(() => {
			console.log(`${cartedProduct.title} added to cart`);
			window.location.reload();
		});
	};

	// Retrieve all products in cart
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
	const value = { productData, AddToCart };
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
