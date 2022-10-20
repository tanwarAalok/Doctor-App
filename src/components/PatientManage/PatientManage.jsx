import React, { useEffect } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./PatientManage.css";
import SideBar from "../SideBar/SideBar";
import PatientsData from "../Tables/PatientsData";
import { AllPatients } from "../Axios/apis";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

const PatientManage = () => {

  const { patients, setPatients } = useContext(AdminContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AllPatients();
      setPatients(response.data.details);
    };
    fetchData();
  }, [patients]);


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
                <h2 style={{textAlign: "center", margin: "10%"}}>Loading ..</h2>
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
