import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import PharmaData from "../Tables/PharmaDataTable";

const PharmaManage = () => {
  return (
    <>
      <SideBar />
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Pharma Management</h1>
        <div className="table-container">
          <PharmaData />
        </div>
      </div>
    </>
  );
};

export default PharmaManage;
