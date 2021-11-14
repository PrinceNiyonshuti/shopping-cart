/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartProducts from "../Components/CartProducts";
import { ProductContext } from "../Context/ProductContext";

const Cart = () => {
	const { cartData, RemoveItem, TotalAmount } = useContext(ProductContext);

	const Counter = (cartItem) => {
		const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
		const counts = {};

		for (const num of arr) {
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}
		return counts[cartItem];
	};

	return (
		<div>
			<div className="h-full ">
				<div>
					<div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
						<div className="md:flex ">
							<div className="w-full p-4 px-5 py-5">
								<div className="md:grid  gap-2 ">
									<div className="col-span-2 p-5">
										<h1 className="text-xl font-medium ">Shopping Cart</h1>
										{cartData && (
											<CartProducts
												cartData={cartData}
												RemoveItem={RemoveItem}
											/>
										)}
										<div className="items-center mt-6 pt-6 border-t">
											<p className="text-xl font-bold text-black">Summary</p>
											{cartData &&
												cartData.map((cartSummary) => (
													<p
														key={cartSummary.id}
														className="text-md font-medium text-black">
														{cartSummary.title} : x {Counter(9)}
													</p>
												))}
										</div>
										<div className="flex justify-between items-center mt-6 pt-6 border-t">
											<div className="flex items-center">
												<Link to="/">
													<span className="text-md font-medium text-blue-500">
														Continue Shopping
													</span>
												</Link>
											</div>
											<div className="flex justify-center items-end">
												<span className="text-xl font-bold text-black mr-1">
													Total:
												</span>
												<span className="text-lg font-bold text-gray-800 ">
													${cartData && TotalAmount()}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
