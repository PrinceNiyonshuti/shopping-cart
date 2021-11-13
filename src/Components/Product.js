/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Product = ({productData}) => {
	return (
		<div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
			{productData.map((product) => (
				<div key={product.id} className="shadow-lg bg-white">
					<img
						className="w-full block h-48 rounded-t-lg "
						src={product.image}
						alt="Product"
					/>
					<div className="flex items-center justify-between mt-3 mx-2">
						<div>
							<Link to="/" className="font-medium">
								{product.title}
							</Link>
						</div>
						<span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
							${product.price}
						</span>
					</div>
					<div className="flex items-center justify-between mt-3 m-2">
						<button className="px-4 py-1 bg-blue-800 rounded-full text-white font-light hover:bg-blue-700">
							Add to cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Product;
