import React, { useContext } from "react";
import "react-bootstrap-drawer/lib/style.css";
import { NavLink } from "react-router-dom";
import { Drawer } from "react-bootstrap-drawer";
import Logo from "../../assets/cardiogram.png";
import LogoutIcon from "../../assets/logout icon.png";
import "./sidebar.css";

const SideBar = () => {
  return (
    <Drawer id="sidebar" className="sidebar-main">
      <Drawer.Overflow>
        <Drawer.ToC style={{ overflow: "hidden" }}>
          <Drawer.Header
            href="/dashboard"
            className="menu-item-header"
            title="DoctorApp"
          >
            <img src={Logo} alt="Logo" className="sidebarLogo" />
            <div>
              Doctor<span style={{ color: "#088F8F" }}>App</span>
            </div>
          </Drawer.Header>
          <hr style={{ color: "#CACACA", margin: "1.25rem 0" }} />
          <Drawer.Nav>
              <Drawer.Item className="hover">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  style={{ color: "white" }}
                  title="Dashboard"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                      </svg>
                    </div>
                    <div>Dashboard</div>
                  </div>
                </NavLink>
              </Drawer.Item>
              <Drawer.Item>
                <NavLink
                  to="/patients"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  title="Patient"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19l90.69-68.02zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80h102.52zM224 256c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zM80 299.7V512h128.26l-98.45-221.52A132.835 132.835 0 0 0 80 299.7zM0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4V464zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"></path>
                      </svg>
                    </div>
                    <div>Patient Management</div>
                  </div>
                </NavLink>
              </Drawer.Item>
              <Drawer.Item>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  title="Doctor"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
                      </svg>
                    </div>
                    <div>Doctor Management</div>
                  </div>
                </NavLink>
              </Drawer.Item>
              <Drawer.Item>
                <NavLink
                  to="/pharma"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  title="Pharma Management"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z"></path>
                      </svg>
                    </div>
                    <div>Pharma Management</div>
                  </div>
                </NavLink>
              </Drawer.Item>
              <Drawer.Item>
                <NavLink
                  to="/ambulance"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  title="Ambulance Management"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                      </svg>
                    </div>
                    <div>Ambulance Management</div>
                  </div>
                </NavLink>
              </Drawer.Item>
              <Drawer.Item>
                <NavLink
                  to="/criteria"
                  className={({ isActive }) =>
                    isActive ? "NavLink-active" : "NavLink"
                  }
                  title="Criteria"
                >
                  <div className="menu-item-sidebar">
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </div>
                    <div>Criteria</div>
                  </div>
                </NavLink>
              </Drawer.Item>
            <hr style={{ marginTop: "60px" }} />
            <Drawer.Item>
              <NavLink
                to="/"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('userId');
                  localStorage.removeItem('userName');
                  localStorage.removeItem('userEmail');
                }}
                className={({ isActive }) =>
                  isActive ? "NavLink-active" : "NavLink"
                }
                title="Logout"
              >
                <div className="menu-item-sidebar">
                  <div>
                    <img src={LogoutIcon} alt="" />
                  </div>
                  <div>Logout</div>
                </div>
              </NavLink>
            </Drawer.Item>
          </Drawer.Nav>
        </Drawer.ToC>
      </Drawer.Overflow>
    </Drawer>
  );
};

export default SideBar;
