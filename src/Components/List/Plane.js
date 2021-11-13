import React from "react";

function Plane(props) {
  const { model, name, country, year } = props.plane;
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://source.unsplash.com/featured/1600x900/?jet"
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <b> Manufactured From :</b> {country}
        </p>
        <p className="text-gray-700 text-base">
          <b> Jet Model :</b> {model}
        </p>
        <p className="text-gray-700 text-base">
          <b> Released In :</b> {year}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{model}
        </span>
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{country}
        </span>
      </div>
    </div>
  );
}

export default Plane;
