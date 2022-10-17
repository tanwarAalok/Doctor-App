import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { AllPharmas } from "../Axios/apis";
import SideBar from "../SideBar/SideBar";
import PharmaData from "../Tables/PharmaDataTable";

const PharmaManage = () => {
  const { pharma, setPharma } = useContext(AdminContext);
  
  if (pharma === null) {
    const fetchData = async () => {
      const res = await AllPharmas();
      setPharma(res.data.details);
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
          <h1 className="heading">Pharma Management</h1>
          <div className="table-container">
            {pharma === null ? <h1>Waiting for data</h1> : <PharmaData data={pharma} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaManage;
