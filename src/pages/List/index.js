import React from "react";

const List = () => {
  const Data = [
    {
      id: 1,
      name: "Nama Lengkap 1",
    },
    {
      id: 2,
      name: "Nama Lengkap 2",
    },
    {
      id: 3,
      name: "Nama Lengkap 3",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold p-4">List of Data</h1>
      <table className="w-1/6 text-sm text-center text-gray-200 dark:text-gray-100">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data) => {
            return (
              <tr
                className="bg-black border-t border-zinc-800 dark:bg-gray-900 dark:border-gray-700"
                key={data.id}
              >
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
