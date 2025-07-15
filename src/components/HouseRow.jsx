import React from "react";

const HouseRow = ({ houseRow }) => {
  return (
    <tr
      key={houseRow.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
    >
      <td className="px-6 py-4">{houseRow.id}</td>
      <td className="px-6 py-4">{houseRow.address}</td>
      <td className="px-6 py-4">{houseRow.country}</td>
      <td className="px-6 py-4">{houseRow.price}</td>
    </tr>
  );
};

export default HouseRow;
