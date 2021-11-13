/** @format */

import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function AddProduct() {
	const { productForm, productName, productPrice, NewProduct } =
		useContext(ProductContext);
	return (
		<div>
			<h3 className="font-bold text-xl mb-2">New Product Details</h3>
			<form onSubmit={NewProduct} ref={productForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<div className=" p-3 w-full">
							<input
								type="text"
								required
								id="name"
								ref={productName}
								className="border p-2 rounded w-full"
								placeholder="Product Name"
							/>
						</div>
						<div className=" p-3 w-full">
							<input
								type="number"
								required
								id="price"
								ref={productPrice}
								className="border p-2 rounded w-full"
								placeholder="Product Price"
							/>
						</div>

						<div className="flex justify-between mx-3">
							<div>
								<button className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700">
									Add Product
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
