/** @format */

import React from "react";
import Product from "../Components/Product";

const Home = () => {
	return (
		<div>
			<div className="flex items-baseline justify-between">
				<div>
					<h2 className="text-lg">Shooping Cart</h2>
				</div>
			</div>
			<Product/>
		</div>
	);
};

export default Home;
