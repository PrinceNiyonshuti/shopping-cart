/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContextProvider";

ReactDOM.render(
	<BrowserRouter>
		<ProductContextProvider>
			<App />
		</ProductContextProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
