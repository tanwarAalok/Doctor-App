import React, { useEffect } from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { AllAmbulance } from "../Axios/apis";
import SideBar from "../SideBar/SideBar";
import AmbulanceData from "../Tables/AmbulanceData";

const AmbulanceComponent = () => {
  const { ambulance, setAmbulance } = useContext(AdminContext);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await AllAmbulance();
      setAmbulance(res.data.details);
    };
    fetchdata();
  }, [ambulance])

  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        <div className="main-div">
          <h1 className="heading">Ambulance Management</h1>
          <div className="table-container">
            {ambulance === null ? (
              <h2 style={{ textAlign: "center", margin: "10%" }}>Loading ..</h2>
            ) : (
              <AmbulanceData data={ambulance} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceComponent;
