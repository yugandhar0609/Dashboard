import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <React.Fragment>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
      </div>
    </React.Fragment>
  );
};

export default Tables;
