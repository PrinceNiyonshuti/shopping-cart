import React from "react";

const Comments = (props) => {
  const { name, details, posted_time } = props.comment;
  return (
    <div>
      <li className="flex justify-between items-center bg-white mt-2 p-2 shadow-lg rounded cursor-pointer">
        <div className="flex ml-2">
          <div className="flex flex-col ml-2">
            <span className="font-medium">{name}</span>
            <span className="text-md ">{details}</span>
            <span className="text-sm ">{posted_time}</span>
          </div>
        </div>
      </li>
    </div>
  );
};
export default Comments;
