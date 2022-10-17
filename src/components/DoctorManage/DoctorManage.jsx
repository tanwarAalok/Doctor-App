import React, { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { AllDoctors } from "../Axios/apis";
import SideBar from "../SideBar/SideBar";
import DoctorsData from "../Tables/DoctorDataTable";

const DoctorManage = () => {
  const { doctors, setDoctors } = useContext(AdminContext);
  
  if (doctors === null) {
      const fetchData = async () => {
        const response = await AllDoctors();
        setDoctors(response.data.details);
      }
    fetchData();
  }

  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        <div className="main-div">
          <h1 className="heading">Doctor Management</h1>
          <div className="table-container">
            {doctors === null ? <h1>Waiting for data</h1> : <DoctorsData data={doctors} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorManage;
