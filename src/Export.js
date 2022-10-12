import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "../src/components/Landing/Landing";
import SideBar from "./components/SideBar/SideBar";
import ClientDashboard from "./components/Dashboard/Dashboard";
import UserManage from "./components/PatientManage/PatientManage";
import UserAds from "./components/PatientManage/UserAds";
import EditAds from "./components/PatientManage/EditAds";
import Revenue from "./components/DoctorManage/DoctorManage";
import PlanManage from "./components/PharmaManage/PlanManage";
import Feedback from "./components/Ambulance/Feedback";
import SubAdmin from "./components/Criteria/SubAdmin";
import Addsub from "./components/Criteria/Addsub";
import Editsub from "./components/Criteria/Editsub";
import { Col, Row } from "react-bootstrap";
import DoctorManage from "./components/DoctorManage/DoctorManage";
import PharmaManage from "./components/PharmaManage/PharmaComponent";
import AmbulanceComponent from "./components/Ambulance/AmbulanceComponent";
import CriteriaComponent from "./components/Criteria/CriteriaComponent";
import PatientManage from "./components/PatientManage/PatientManage";
function Export({ show }) {
  let u = localStorage.getItem("user");
  let user = JSON.parse(u);
  const location = useLocation();
  return (
    <Row style={{ height: "100vh", width: "100%" }}>
      <Col
        style={{
          display: location.pathname !== "/" ? "" : "none",
        }}
        lg={show ? 1 : 2}
      >
        {location.pathname !== "/" && <SideBar />}
      </Col>
      <Col lg={location.pathname === "/" ? 12 : show ? 11 : 10}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />

          <Route
            exact
            path="/dashboard"
            element={user?.dashboard && <ClientDashboard />}
          />

          <Route
            exact
            path="/patients"
            element={user?.users && <PatientManage />}
          />
          <Route
            exact
            path="/usermanage/:id"
            element={user?.users && <UserAds />}
          />
          <Route
            exact
            path="/editads/:id"
            element={user?.users && <EditAds />}
          />
          <Route
            exact
            path="/doctors"
            element={user?.revenue && <DoctorManage />}
          />
          <Route
            exact
            path="/pharma"
            element={user?.plans && <PharmaManage />}
          />
          <Route
            exact
            path="/ambulance"
            element={user?.feedback && <AmbulanceComponent />}
          />
          <Route
            exact
            path="/criteria"
            element={user?.isSubadmin && <CriteriaComponent />}
          />
          <Route
            exact
            path="/subadmin/add"
            element={user?.isSubadmin && <Addsub />}
          />
          <Route
            exact
            path="/subadmin/edit/:id"
            element={user?.isSubadmin && <Editsub />}
          />
          {/* Clientside */}
        </Routes>
      </Col>
    </Row>
  );
}

export default Export;
