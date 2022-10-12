import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import TableComponent from "../Tables/TableComponent";

const PharmaManage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Pharma Management</h1>
        <div className="table-container">
          <TableComponent />
        </div>
      </div>
    </>
  );
};

export default PharmaManage;
