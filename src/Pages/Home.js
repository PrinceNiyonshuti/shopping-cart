/** @format */

import React, { useContext } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Context/ProductContext";

const Home = () => {
	const { productData, AddToCart } = useContext(ProductContext);
	return (
		<div>
			<div className="flex items-baseline justify-between">
				<div>
					<h2 className="text-lg">Shooping Cart</h2>
				</div>
			</div>
			{productData && (
				<Product productData={productData} AddToCart={AddToCart} />
			)}
		</div>
	);
};

export default Home;
