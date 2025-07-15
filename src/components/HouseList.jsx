import React from "react";
import data from "../../db.json"; // Adjust the path as necessary
import HouseRow from "./HouseRow";
const HouseList = () => {
  const [houses, setHouses] = React.useState([data]);
  const addRow = () => {
    setHouses([
      ...houses,
      { id: houses.id, address: "", country: "", price: "" },
    ]);
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Asking Price
            </th>
          </tr>
        </thead>
        <tbody>
          {houses[0].map((house) => (
            <HouseRow key={house.id} houseRow={house} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-start mt-4">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 px-6 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default React.memo(HouseList);
