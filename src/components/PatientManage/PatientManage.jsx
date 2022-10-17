import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./PatientManage.css";
import SideBar from "../SideBar/SideBar";
import PatientsData from "../Tables/PatientsData";
import { AllPatients } from "../Axios/apis";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

const PatientManage = () => {

  const { patients, setPatients } = useContext(AdminContext);

  if (patients === null) {
    const fetchData = async () => {
      const response = await AllPatients();
      setPatients(response.data.details);
    };
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
          <h1 className="heading">Patient Management</h1>
          <div className="table-container">
            {
              patients === null ? (
                <h1>Waiting for data</h1>
              ) : (
                  <PatientsData data={patients} /> 
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientManage;
