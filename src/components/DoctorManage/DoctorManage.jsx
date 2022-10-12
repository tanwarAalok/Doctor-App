import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import TableComponent from "../Tables/TableComponent";

const DoctorManage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Doctor Management</h1>
        <div className="table-container">
          <TableComponent />
        </div>
      </div>
    </>
  );
};

export default DoctorManage;
