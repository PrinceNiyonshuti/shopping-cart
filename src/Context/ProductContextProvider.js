/** @format */

import React, { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

const ProductContextProvider = (props) => {
	const [productData, setProductData] = useState(null);
	const [cartData, setCartData] = useState(null);
	const [cartSize, setCartSize] = useState(null);

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
			fetch(`http://localhost:8000/cart`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setCartData(data);
					setCartSize(data.length);
				});
			// window.location.reload();
		});
	};

	// Retrieve all products in cart
	useEffect(() => {
		fetch(`http://localhost:8000/cart`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCartData(data);
				setCartSize(data.length);
			});
	}, []);

	// provider data
	const value = { productData, AddToCart, cartData, cartSize };
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
