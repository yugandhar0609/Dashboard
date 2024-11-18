import React, { useState, useEffect } from 'react';
import data from '../Data/cardsData';  

const TableOne = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data.tableData1); 

  useEffect(() => {
    const filtered = data.tableData1.filter((data) =>
      data.brand.toLowerCase().includes(searchQuery.toLowerCase())||
      data.sales.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]); 

  

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Channels
        </h4>
        <input
          type="text"
          placeholder="Search by brand or sales..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/3 p-2 border border-gray-300 rounded-md dark:border-strokedark dark:bg-meta-4 dark:text-white"
        />
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Source</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Sales</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
          </div>
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <div
              key={data.id}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={data.image} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">{data.brand}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{data.visitors}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{data.revenue}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{data.sales}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{data.conversion}</p>
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
