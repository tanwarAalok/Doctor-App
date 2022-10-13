import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import AdminPic from "../../assets/adsimage.png";
import { Link } from "react-router-dom";
import DoctorsBookingTable from "../Tables/DoctorBookingTable";

const DoctorsDetail = () => {
  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        <div className="main-div">
          <h1 className="heading profile-heading">Henry Smith</h1>
          <div className="profile-container">
            <div>
              <div>
                <img src={AdminPic} alt="" />
                <h1 style={{ fontSize: "20px" }} className="heading">
                  Henry Smith
                </h1>
              </div>
              <div>
                <div>
                  <p className="key">Phone Number</p>
                  <p>9625090685</p>
                </div>
                <div>
                  <p className="key">Ambulance No</p>
                  <p>DL1A7470</p>
                </div>
                <div>
                  <p className="key">DL No.</p>
                  <p>JGB8754VDB00</p>
                </div>
              </div>
            </div>

            <div>
              <h1 style={{ fontSize: "24px" }} className="heading">
                Current Booking
              </h1>
              <div className="profile-card-container">
                <div className="profile-card">
                  <img src={AdminPic} alt="" />
                  <div>
                    <h5 className="card-name">Jack Denial</h5>
                    <div className="timediv">
                      <svg
                        style={{
                          color: "rgba(0, 0, 0, 0.4)",
                          width: "12px",
                          height: "12px",
                        }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <p>10:00 AM IST</p>
                    </div>
                  </div>
                </div>
                <div className="profile-card">
                  <img src={AdminPic} alt="" />
                  <div>
                    <h5 className="card-name">Jack Denial</h5>
                    <div className="timediv">
                      <svg
                        style={{
                          color: "rgba(0, 0, 0, 0.4)",
                          width: "12px",
                          height: "12px",
                        }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <p>10:00 AM IST</p>
                    </div>
                  </div>
                </div>
                <div className="profile-card">
                  <img src={AdminPic} alt="" />
                  <div>
                    <h5 className="card-name">Jack Denial</h5>
                    <div className="timediv">
                      <svg
                        style={{
                          color: "rgba(0, 0, 0, 0.4)",
                          width: "12px",
                          height: "12px",
                        }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <p>10:00 AM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="div-apart">
                <h1 style={{ fontSize: "24px" }} className="heading">
                  Previous Booking
                </h1>
                <Link className="viewButton" to="">
                  View All
                </Link>
              </div>
              <div className="profile-table-container">
                <DoctorsBookingTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetail;
