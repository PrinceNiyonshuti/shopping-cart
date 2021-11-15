/** @format */

import React, { useRef, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

const ProductContextProvider = (props) => {
	const [productData, setProductData] = useState(null);
	const [cartData, setCartData] = useState(null);
	const [cartSize, setCartSize] = useState(null);

	// Creating New Product
	const productForm = useRef();
	const productName = useRef();
	const productPrice = useRef();

	const NewProduct = (event) => {
		event.preventDefault();

		const title = productName.current.value;
		const price = productPrice.current.valueAsNumber;
		const image = `https://source.unsplash.com/1600x900/?food,` + title;

		const newProductDetails = { title, price, image };
		fetch("http://localhost:8000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newProductDetails),
		}).then(() => {
			console.log(`New ${title} Product added`);
			LoadAllData();
		});
		productForm.current.reset();
	};

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
			LoadAllData();
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

	// Cart List Total Amount to pay
	const TotalAmount = () => {
		return cartData.reduce((a, v) => (a = a + v.price), 0);
	};

	// Cart Summary Details

	const FrequencyCounter = (cartItem) => {
		const counts = {};
		let result = cartData.map((cartProduct) => cartProduct.title);
		for (const num of result) {
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
		return counts[cartItem];
	};

	// Remove product from cart
	const RemoveItem = (cartID) => {
		fetch(`http://localhost:8000/cart/` + cartID, {
			method: "DELETE",
		}).then(() => {
			console.log("Product Removed From cart");
			LoadAllData();
		});
	};

	// Used this function insted of window.location.reload()
	const LoadAllData = () => {
		//Load all products
		fetch(`http://localhost:8000/products`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setProductData(data);
			});
		// Load Cart product
		fetch(`http://localhost:8000/cart`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCartData(data);
				setCartSize(data.length);
			});
	};

	// provider data
	const value = {
		productData,
		AddToCart,
		cartData,
		cartSize,
		RemoveItem,
		TotalAmount,
		FrequencyCounter,
		productForm,
		productName,
		productPrice,
		NewProduct,
	};
	return (
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
