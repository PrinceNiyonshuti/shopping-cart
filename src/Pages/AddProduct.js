/** @format */

import React, { useContext } from "react";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";
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
						<TextInput
							type={"text"}
							required
							id={"name"}
							refData={productName}
							placeholder={"Product Name"}
						/>
						<TextInput
							type={"number"}
							required
							id={"price"}
							refData={productPrice}
							placeholder={"Product Price"}
						/>
						<div className="flex justify-between mx-3">
							<div>
								<Button name={"Add New Product"} radius={"rounded"}/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
