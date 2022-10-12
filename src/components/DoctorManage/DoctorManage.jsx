import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import DoctorsData from "../Tables/DoctorDataTable";

const DoctorManage = () => {
  return (
    <>
      <SideBar />
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Doctor Management</h1>
        <div className="table-container">
          <DoctorsData />
        </div>
      </div>
    </>
  );
};

export default DoctorManage;
