import React from "react";
import "./dashboard.css";
import "react-datepicker/dist/react-datepicker.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Bar } from "react-chartjs-2";
import PatientIcon from "../../assets/patientLogo.png";


const ClientDashboard = () => {

  const data = {
    labels: [...Array(31).keys()].slice(1),
    datasets: [
      {
        data: [...Array(31).keys()].slice(1),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Dashboard</h1>
        <div className="card-container">
          <div className="dashboardCards">
            <div>
              <img src={PatientIcon} alt="" />
            </div>
            <h4>18900</h4>
            <p>Total Patients</p>
          </div>
          <div className="dashboardCards">
            <div>
              <img src={PatientIcon} alt="" />
            </div>
            <h4>18900</h4>
            <p>Total Patients</p>
          </div>
          <div className="dashboardCards">
            <div>
              <img src={PatientIcon} alt="" />
            </div>
            <h4>18900</h4>
            <p>Total Patients</p>
          </div>
          <div className="dashboardCards">
            <div>
              <img src={PatientIcon} alt="" />
            </div>
            <h4>18900</h4>
            <p>Total Patients</p>
          </div>
          <div className="dashboardCards">
            <div>
              <img src={PatientIcon} alt="" />
            </div>
            <h4>18900</h4>
            <p>Total Patients</p>
          </div>
        </div>

        <div className="revenue-container">
          <h1 className="heading">Revenue</h1>
          <select>
            <option value="">Select</option>
            <option value="January">January</option>
            <option value="January">Feb</option>
          </select>
        </div>

        {/* <Bar data={data} /> */}

      </div>
    </>
  );
};

export default ClientDashboard;
