import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/AddProduct";

function Main() {
  return (
		<div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-3/4 lg:my-px lg:px-px lg:w-3/4 xl:my-px xl:px-px xl:w-3/4">
			<div>
				<div className="flex-grow flex flex-col">
					<div className="flex-grow">
						<div className=" py-8 mx-auto px-5">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/cart" element={<Cart />} />
								<Route path="/addProduct" element={<AddProduct />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Main;
