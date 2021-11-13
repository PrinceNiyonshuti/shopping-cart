/** @format */

import React from "react";

const CartProducts = ({ cartData }) => {
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
							<span className="text-md font-medium w-auto">
								{cartList.title}
							</span>
							<span className="text-xs font-light text-gray-400">#66999</span>
						</div>
					</div>
					<div className="flex justify-center items-center">
						<div className="pr-8">
							<span className="text-xs font-medium">$ {cartList.price}</span>
						</div>
						<div>
							<i className="fa fa-close text-xs font-medium"></i>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartProducts;
