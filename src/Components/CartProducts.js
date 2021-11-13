/** @format */

import React from "react";

const CartProducts = ({ cartData, RemoveItem }) => {
	return (
		<div>
            {cartData.map((cartList) => (
                
				<div
					key={cartList.id}
					className="flex justify-between items-center pt-6 mt-6 border-t">
					<div className="flex items-center">
						<img
							src={cartList.image}
							width="80"
							height="80"
							className="rounded-lg"
							alt="product"
						/>
						<div className="flex flex-col ml-3 ">
							<span className="text-xl capitalize font-medium w-auto">
								{cartList.title}
							</span>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="pr-8">
							<span className="text-md font-medium">$ {cartList.price}</span>
						</div>
						<div onClick={() => RemoveItem(cartList.id)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
						</div>
					</div>
				</div>
            ))}
            
		</div>
	);
};

export default CartProducts;
