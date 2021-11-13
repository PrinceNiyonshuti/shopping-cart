/** @format */

import React from "react";
import Comment from "../Components/Comment";
import PlanesList from "../Components/List/PlanesList";

const Home = () => {
	return (
		<div>
			<div className="flex items-baseline justify-between">
				<div>
					<h2 className="text-lg">Welcome To Zatec Shooping Cart</h2>
				</div>
			</div>
			<PlanesList />
			<Comment />
		</div>
	);
};

export default Home;
