/** @format */

import React, { useContext } from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Context/ProductContext";

const Home = () => {
	const { productData } = useContext(ProductContext);
	return (
		<div>
			<div className="flex items-baseline justify-between">
				<div>
					<h2 className="text-lg">Shooping Cart</h2>
				</div>
			</div>
			{productData && <Product productData={productData} />}

			
		</div>
	);
};

export default Home;
