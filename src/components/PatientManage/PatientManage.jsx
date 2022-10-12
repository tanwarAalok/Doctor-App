import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./PatientManage.css";
import SideBar from "../SideBar/SideBar";
import PatientsData from "../Tables/PatientsData";

const PatientManage = () => {
  return (
    <>
      <SideBar />
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Patient Management</h1>
        <div className="table-container">
          <PatientsData />
        </div>
      </div>
    </>
  );
};

export default PatientManage;

{
  /* <div className="d-flex justify-content-center mt-5">
                <div className="loading-main ">
                  <div className="loader" />
                </div>
              </div> */
}
