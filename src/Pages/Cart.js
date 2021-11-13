/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
	return (
		<div>
			<div className="h-screen ">
				<div>
					<div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
						<div className="md:flex ">
							<div className="w-full p-4 px-5 py-5">
								<div className="md:grid  gap-2 ">
									<div className="col-span-2 p-5">
										<h1 className="text-xl font-medium ">Shopping Cart</h1>
										<div className="flex justify-between items-center mt-6 pt-6">
											<div className="flex items-center">
												<img
													src="https://i.imgur.com/EEguU02.jpg"
													width="80"
													className="rounded-full "
													alt="product"
												/>
												<div className="flex flex-col ml-3">
													<span className="md:text-md font-medium">
														Chicken momo
													</span>
													<span className="text-xs font-light text-gray-400">
														#41551
													</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8 ">
													<span className="text-xs font-medium">$10.50</span>
												</div>
												<div>
													<i className="fa fa-close text-xs font-medium"></i>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center pt-6 mt-6 border-t">
											<div className="flex items-center">
												<img
													src="https://i.imgur.com/Uv2Yqzo.jpg"
													width="80"
													className="rounded-full "
													alt="product"
												/>
												<div className="flex flex-col ml-3 ">
													<span className="text-md font-medium w-auto">
														Spicy Mexican potatoes
													</span>
													<span className="text-xs font-light text-gray-400">
														#66999
													</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8">
													<span className="text-xs font-medium">$10.50</span>
												</div>
												<div>
													<i className="fa fa-close text-xs font-medium"></i>
												</div>
											</div>
										</div>
										<div className="flex justify-between items-center mt-6 pt-6 border-t">
											<div className="flex items-center">
												<img
													src="https://i.imgur.com/xbTAITF.jpg"
													width="80"
													className="rounded-full "
													alt="product"
												/>
												<div className="flex flex-col ml-3 ">
													<span className="text-md font-medium">Breakfast</span>
													<span className="text-xs font-light text-gray-400">
														#86577
													</span>
												</div>
											</div>
											<div className="flex justify-center items-center">
												<div className="pr-8">
													<span className="text-xs font-medium">$10.50</span>
												</div>
												<div>
													<i className="fa fa-close text-xs font-medium"></i>
												</div>
											</div>
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
												<span className="text-sm font-medium text-gray-400 mr-1">
													Subtotal:
												</span>
												<span className="text-lg font-bold text-gray-800 ">
													$24.90
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
