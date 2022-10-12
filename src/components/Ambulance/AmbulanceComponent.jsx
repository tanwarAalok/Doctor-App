import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import TableComponent from '../Tables/TableComponent';

const AmbulanceComponent = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Ambulance Management</h1>
        <div className="table-container">
          <TableComponent />
        </div>
      </div>
    </>
  );
}

export default AmbulanceComponent