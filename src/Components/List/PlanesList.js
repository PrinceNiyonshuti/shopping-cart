import React, { useState } from "react";
import Plane from "./Plane";

function PlanesList(props) {
  const PlanesData = [
    {
      id: 1,
      model: "F-22 fighter jet",
      name: "Lockheed Martin F-22 Raptor",
      country: "USA",
      year: 2005
    },
    {
      id: 2,
      model: "F-35 stealth fighter",
      name: "Lockheed Martin F-35 Lightning II",
      country: "USA",
      year: 2007
    },
    {
      id: 3,
      model: "Sukhoi Su-57",
      name: "Sukhoi Su-57",
      country: "Russia",
      year: 2004
    },
    {
      id: 4,
      model: "Chengdu J-20",
      name: "Chengdu J-20",
      country: "China",
      year: 2017
    }
  ];
  const [planes, setPlanes] = useState(PlanesData);

  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl mb-2">Jets List</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {planes.map((plane) => (
          <Plane key={plane.id} plane={plane} />
        ))}
      </div>
    </div>
  );
}
export default PlanesList;
