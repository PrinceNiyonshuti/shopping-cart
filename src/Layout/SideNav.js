/** @format */

import React from "react";

const SideNav = () => {
	return (
		<div className="bg-blue-300 my-1 px-2 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/4 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
			<ul className="px-5 py-4">
				<li className=" px-2">
					<a className="text-xl py-4" href="#home">
						Home
					</a>
				</li>
				<li className=" px-2">
					<a className="text-xl py-4" href="#home">
						Cart
					</a>
				</li>
			</ul>
		</div>
	);
};
export default SideNav;
