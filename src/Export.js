import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "../src/components/Landing/Landing";
import SideBar from "./components/SideBar/SideBar";
import ClientDashboard from "./components/Dashboard/Dashboard";
import UserManage from "./components/UserManage/UserManage";
import UserAds from "./components/UserManage/UserAds";
import EditAds from "./components/UserManage/EditAds";
import Revenue from "./components/Revenue/Revenue";
import PlanManage from "./components/PlanManage/PlanManage";
import Feedback from "./components/Feedback/Feedback";
import SubAdmin from "./components/SubAdmin/SubAdmin";
import Addsub from "./components/SubAdmin/Addsub";
import Editsub from "./components/SubAdmin/Editsub";
import { Col, Row } from "react-bootstrap";
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

          {/* Clientside */}

          <Route
            exact
            path="/dashboard"
            element={user?.dashboard && <ClientDashboard />}
          />

          <Route
            exact
            path="/usermanage"
            element={user?.users && <UserManage />}
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
          <Route exact path="/revenue" element={user?.revenue && <Revenue />} />
          <Route exact path="/plans" element={user?.plans && <PlanManage />} />
          <Route
            exact
            path="/feedback"
            element={user?.feedback && <Feedback />}
          />
          <Route
            exact
            path="/subadmin"
            element={user?.isSubadmin && <SubAdmin />}
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
