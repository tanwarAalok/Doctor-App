import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import AdminPic from "../../assets/adsimage.png";
import { Link, useParams } from "react-router-dom";
import PatientBookingTable from "../Tables/PatientBookingTable";
import { useState } from "react";
import PatientAmbulanceBookings from "../Tables/PatientAmbulanceBookings";
import PatientPharmaBookings from "../Tables/PatientPharmaBookings";
import { getPatientAmbulanceCurrentBooking, getPatientAmbulancePastBooking, getPatientDetail, getPatientDoctorCurrentBooking, getPatientDoctorPastBooking, getPatientPharmaCurrentBooking, getPatientPharmaPastBooking } from "../Axios/apis";
import { useEffect } from "react";

const PatientDetail = () => {

  const { patientId } = useParams();
  const [patientDetail, setPatientDetails] = useState(null);
  const [table, setTable] = useState("doctor");

  const [patientDoctorPastBooking, setPatientDoctorPastBooking] = useState(null);
  const [patientDoctorCurrentBooking, setPatientDoctorCurrentBooking] = useState(null);

  const [patientPharmaPastBooking, setPatientPharmaPastBooking] = useState(null);
  const [patientPharmaCurrentBooking, setPatientPharmaCurrentBooking] = useState(null);

  const [patientAmbulancePastBooking, setPatientAmbulancePastBooking] = useState(null);
  const [patientAmbulanceCurrentBooking, setPatientAmbulanceCurrentBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPatientDetail(patientId);
      setPatientDetails(data.data.user);
    };
    fetchData();
  }, []);

  useEffect(() => {

    const fetchDoctorBookings = async () => {
      const pastbooking = await getPatientDoctorPastBooking(patientId);
      const currentbooking = await getPatientDoctorCurrentBooking(patientId);
      setPatientDoctorPastBooking(pastbooking.data.mess);
      setPatientDoctorCurrentBooking(currentbooking.data.mess);
    };

    const fetchPharmaBookings = async () => {
      const pastbooking = await getPatientPharmaPastBooking(patientId);
      const currentbooking = await getPatientPharmaCurrentBooking(patientId);
      setPatientPharmaPastBooking(pastbooking.data.mess);
      setPatientPharmaCurrentBooking(currentbooking.data.mess);
    };

    const fetchAmbulanceBookings = async () => {
      const pastbooking = await getPatientAmbulancePastBooking(patientId);
      const currentbooking = await getPatientAmbulanceCurrentBooking(patientId);
      setPatientAmbulancePastBooking(pastbooking.data.mess);
      setPatientAmbulanceCurrentBooking(currentbooking.data.mess);
    };

    if (table === "doctor") fetchDoctorBookings();
    else if (table === "pharma") fetchPharmaBookings();
    else fetchAmbulanceBookings();
  }, [table])

  
  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        {patientDetail === null ? (
          <div className="main-div">
            <h1>Loading</h1>
          </div>
        ) : (
          <div className="main-div">
            <h1 className="heading profile-heading">{patientDetail?.name}</h1>
            <div className="profile-container">
              <div>
                <div>
                  <img src={patientDetail?.picture} alt="" />
                  <h1 style={{ fontSize: "20px" }} className="heading">
                    {patientDetail?.name}
                  </h1>
                </div>
                <div>
                  <div>
                    <p className="key">Gender</p>
                    <p style={{ textTransform: "capitalize" }}>
                      {patientDetail?.gender}
                    </p>
                  </div>
                  <div>
                    <p className="key">Age</p>
                    <p>{patientDetail?.age}</p>
                  </div>
                  <div>
                    <p className="key">Phone Number</p>
                    <p>{patientDetail?.phone}</p>
                  </div>
                  <div>
                    <p className="key">Email Id</p>
                    <p>{patientDetail?.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", marginRight: "10px" }}>
                  <h1 style={{ fontSize: "24px" }} className="heading">
                    Current Booking
                  </h1>
                  <div style={{ display: "flex" }}>
                    <button
                      onClick={() => setTable("doctor")}
                      className={table === "doctor" ? "btn-active" : "mybtn"}
                    >
                      Doctor
                    </button>
                    <button
                      onClick={() => setTable("pharma")}
                      className={table === "pharma" ? "btn-active" : "mybtn"}
                    >
                      Pharma
                    </button>
                    <button
                      onClick={() => setTable("ambulance")}
                      className={table === "ambulance" ? "btn-active" : "mybtn"}
                    >
                      Ambulance
                    </button>
                  </div>
                </div>
                <div className="profile-card-container">
                  {table === "doctor" ? (
                    patientDoctorCurrentBooking === null ||
                    patientDoctorCurrentBooking.length === 0 ? (
                      <h3>No current bookings</h3>
                    ) : (
                      patientDoctorCurrentBooking?.map((data, id) => (
                        <div key={id} className="profile-card">
                          <img src={data?.doctorId?.picture} alt="" />
                          <div>
                            <h5 className="card-name">
                              {data?.doctorId?.name}
                            </h5>
                            <div className="timediv">
                              <svg
                                style={{
                                  color: "rgba(0, 0, 0, 0.4)",
                                  width: "12px",
                                  height: "12px",
                                }}
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                              </svg>
                              <p>{data?.slot} AM IST</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : table === "pharma" ? (
                    patientPharmaCurrentBooking === null ||
                    patientPharmaCurrentBooking.length === 0 ? (
                      <h3>No current bookings</h3>
                    ) : (
                      patientDoctorCurrentBooking?.map((data, id) => (
                        <div key={id} className="profile-card">
                          <img src={data?.doctorId?.picture} alt="" />
                          <div>
                            <h5 className="card-name">
                              {data?.doctorId?.name}
                            </h5>
                            <div className="timediv">
                              <svg
                                style={{
                                  color: "rgba(0, 0, 0, 0.4)",
                                  width: "12px",
                                  height: "12px",
                                }}
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                              </svg>
                              <p>{data?.slot} AM IST</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : patientAmbulanceCurrentBooking === null ||
                    patientAmbulanceCurrentBooking.length === 0 ? (
                    <h3>No current bookings</h3>
                  ) : (
                    patientDoctorCurrentBooking?.map((data, id) => (
                      <div key={id} className="profile-card">
                        <img src={data?.doctorId?.picture} alt="" />
                        <div>
                          <h5 className="card-name">{data?.doctorId?.name}</h5>
                          <div className="timediv">
                            <svg
                              style={{
                                color: "rgba(0, 0, 0, 0.4)",
                                width: "12px",
                                height: "12px",
                              }}
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                              <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                            </svg>
                            <p>{data?.slot} AM IST</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                  {}

                  {/* <div className="profile-card">
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
                          strokeWidth="0"
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
                          strokeWidth="0"
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
                  </div> */}
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
                  {table === "doctor" ? (
                    patientDoctorPastBooking === null ||
                    patientDoctorPastBooking.length === 0 ? (
                      <h2>No past bookings</h2>
                    ) : (
                      <PatientBookingTable
                        name={patientDetail?.name}
                        data={patientDoctorPastBooking}
                      />
                    )
                  ) : table === "pharma" ? (
                    patientPharmaPastBooking === null ||
                    patientPharmaPastBooking.length === 0 ? (
                      <h2>No past bookings</h2>
                    ) : (
                      <PatientPharmaBookings data={patientPharmaPastBooking} />
                    )
                  ) : patientAmbulancePastBooking === null ||
                    patientAmbulancePastBooking.length === 0 ? (
                    <h2>No past bookings</h2>
                  ) : (
                    <PatientAmbulanceBookings
                      data={patientAmbulancePastBooking}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetail;