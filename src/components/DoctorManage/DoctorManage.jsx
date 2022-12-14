import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { AllDoctors } from "../Axios/apis";
import SideBar from "../SideBar/SideBar";
import DoctorsData from "../Tables/DoctorDataTable";

const DoctorManage = () => {
  const { doctors, setDoctors } = useContext(AdminContext);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await AllDoctors();
      setDoctors(response.data.details);
    }
    fetchData();
  }, [doctors]);

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
            {doctors === null ? (
              <h2 style={{ textAlign: "center", margin: "10%" }}>Loading ..</h2>
            ) : (
              <DoctorsData data={doctors} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorManage;
