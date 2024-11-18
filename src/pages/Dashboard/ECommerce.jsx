import React from 'react';
import Card from '../../components/Card.jsx';
import ChartOne from '../../components/ChartOne.jsx';
import ChartThree from '../../components/ChartThree.jsx';
import ChartTwo from '../../components/ChartTwo.jsx';
import MapOne from '../../components/MapOne.jsx';
import TableOne from '../../components/TableOne.jsx';

const ECommerce = () => {
  return (
    <>
      <div className="">
      <Card/>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
