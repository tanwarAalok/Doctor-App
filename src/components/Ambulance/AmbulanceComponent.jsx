import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import AmbulanceData from "../Tables/AmbulanceData";

const AmbulanceComponent = () => {
  return (
    <>
      <SideBar />
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Ambulance Management</h1>
        <div className="table-container">
          <AmbulanceData />
        </div>
      </div>
    </>
  );
};

export default AmbulanceComponent;
