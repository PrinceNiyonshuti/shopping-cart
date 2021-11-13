import React, { useRef } from "react";

function AddProduct() {
    const commentName = useRef();
		const commentDetails = useRef();
		const commentForm = useRef();
    return (
			<div>
				<h3 className="font-bold text-xl mb-2">New Product Details</h3>
				<form ref={commentForm}>
					<div className="flex">
						<div className="w-full bg-white p-2 rounded">
							<div className=" p-3 w-full">
								<input
									type="text"
									required
									id="name"
									ref={commentName}
									className="border p-2 rounded w-full"
									placeholder="Product Name"
								/>
							</div>
							<div className=" p-3 w-full">
								<input
									type="number"
									required
									id="name"
									ref={commentName}
									className="border p-2 rounded w-full"
									placeholder="Product Price"
								/>
							</div>
							<div className=" p-3 w-full">
								<textarea
									rows="3"
									id="name"
									ref={commentDetails}
									className="border p-2 rounded w-full"
									placeholder="Write something..."
								/>
							</div>

							<div className="flex justify-between mx-3">
								<div>
									<button className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700">
										Post Comment
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
}

export default AddProduct
