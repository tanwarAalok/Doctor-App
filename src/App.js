import React from "react";
import "./App.css";
import {  Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import ClientDashboard from "./components/Dashboard/Dashboard";
import PatientManage from "./components/PatientManage/PatientManage";
import DoctorManage from "./components/DoctorManage/DoctorManage";
import PharmaManage from "./components/PharmaManage/PharmaComponent";
import AmbulanceComponent from "./components/Ambulance/AmbulanceComponent";
import CriteriaComponent from "./components/Criteria/CriteriaComponent";
import ProfileComponent from "./components/ProfilePage/ProfileComponent";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<ClientDashboard />} />
      <Route path="/patients" element={<PatientManage />} />
      <Route path="/doctors" element={<DoctorManage />} />
      <Route path="/pharma" element={<PharmaManage />} />
      <Route path="/ambulance" element={<AmbulanceComponent />} />
      <Route path="/criteria" element={<CriteriaComponent />} />
      <Route path="/profile" element={<ProfileComponent />} />
    </Routes>
  );
}

export default App;
// export { UserContext };

