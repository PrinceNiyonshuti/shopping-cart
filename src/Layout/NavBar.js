/** @format */

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<nav className="bg-white shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7">
							<h2 className="flex items-center py-4 font-bold text-2xl">
								Shopping Cart
							</h2>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<Link
								to="/"
								className="py-2 px-2 font-medium text-white rounded bg-blue-500 hover:bg-blue-700 hover:text-white ">
								Home
							</Link>
							<Link
								to="/cart"
								className="py-1.5 px-2 font-medium border-2 border-blue-500 rounded bg-white hover:bg-blue-700 hover:text-white ">
								Cart
								<span className="mx-2 items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
									5
								</span>
							</Link>
						</div>
						<div className="md:hidden flex items-center">
							<button className="outline-none menu-button">
								|||
							</button>
						</div>
						<div className="hidden mobile-menu">
							<ul className="">
								<li className="active">
									<a
										href="nav.html"
										className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold">
										Home
									</a>
								</li>
								<li>
									<a
										href="#About"
										className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
										About Us
									</a>
								</li>
								<li>
									<a
										href="#Contact Us"
										className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300">
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
export default NavBar;
