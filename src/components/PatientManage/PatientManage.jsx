import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./PatientManage.css";
import SideBar from "../SideBar/SideBar";
import PatientsData from "../Tables/PatientsData";

const PatientManage = () => {
  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        <div className="main-div">
          <h1 className="heading">Patient Management</h1>
          <div className="table-container">
            <PatientsData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientManage;
