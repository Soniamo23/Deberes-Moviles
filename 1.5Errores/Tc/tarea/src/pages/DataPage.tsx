import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import DataTable from '../components/DataTable';

const DataPage: React.FC = () => {
  return (
    <BasicLayout>
      <DataTable />
    </BasicLayout>
  );
}

export default DataPage;
