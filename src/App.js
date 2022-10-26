import React, { useState } from "react";
import "./App.css";
import {  Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import ClientDashboard from "./components/Dashboard/Dashboard";
import PatientManage from "./components/PatientManage/PatientManage";
import DoctorManage from "./components/DoctorManage/DoctorManage";
import PharmaManage from "./components/PharmaManage/PharmaComponent";
import AmbulanceComponent from "./components/Ambulance/AmbulanceComponent";
import CriteriaComponent from "./components/Criteria/CriteriaComponent";
import PatientDetail from "./components/DetailsPage/PatientDetailComponent";
import DoctorsDetail from "./components/DetailsPage/DoctorDetails";
import PharmaDetail from "./components/DetailsPage/PharmaDetails";
import AmbulanceDetails from "./components/DetailsPage/AmbulanceDetails";
import ProtectedRoute from "./components/utils/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/patients" element={<PatientManage />} />
        <Route path="/doctors" element={<DoctorManage />} />
        <Route path="/pharma" element={<PharmaManage />} />
        <Route path="/ambulance" element={<AmbulanceComponent />} />
        <Route path="/criteria" element={<CriteriaComponent />} />
        <Route path="/patient/:patientId" element={<PatientDetail />} />
        <Route path="/doctor/:doctorId" element={<DoctorsDetail />} />
        <Route path="/pharma/:pharmaId" element={<PharmaDetail />} />
        <Route path="/ambulance/:ambulanceId" element={<AmbulanceDetails />} />
      </Route>
      <Route path="*" element={<h1>Page Not Found...</h1>} />
    </Routes>
  );
}

export default App;

