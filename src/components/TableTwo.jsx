import React, { useState, useEffect } from 'react';
import data from '../Data/cardsData.js';

const TableOne = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data.tableData2);

  useEffect(() => {
    const filtered = data.tableData2.filter(
      (data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.profit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.sold.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Channels
        </h4>
        <input
          type="text"
          placeholder="Search by name, category, profit or sold..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/3 p-2 border border-gray-300 rounded-md dark:border-strokedark dark:bg-meta-4 dark:text-white"
        />
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              sold
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              profit
            </h5>
          </div>
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <div
              key={data.id}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
            >
              <div className="items-center gap-3 p-2.5 xl:p-5 grid grid-row-3 ">
                <div className="flex-shrink-0">
                  <img
                    src={data.image}
                    alt="Brand"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-36 md:h-28 object-cover"
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {data.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{data.category}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{data.price}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{data.sold}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{data.profit}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-5 text-center text-gray-500 dark:text-gray-400">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TableOne;
