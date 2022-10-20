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
import CurrentBookingCard from "./CurrentBookingCard";

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
  }, [table]);

  
  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        {patientDetail === null ? (
          <div className="main-div">
            <h2 style={{ textAlign: "center", margin: "10%" }}>Loading ..</h2>
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
                      <h3 style={{ marginLeft: "30%" }}>No current bookings</h3>
                    ) : (
                      patientDoctorCurrentBooking?.map((data, id) => (
                        <CurrentBookingCard
                          key={id}
                          patientData={patientDetail}
                          data={data}
                        />
                      ))
                    )
                  ) : table === "pharma" ? (
                    patientPharmaCurrentBooking === null ||
                    patientPharmaCurrentBooking.length === 0 ? (
                      <h3 style={{ marginLeft: "30%" }}>No current bookings</h3>
                    ) : (
                      patientDoctorCurrentBooking?.map((data, id) => (
                        <CurrentBookingCard
                          key={id}
                          patientData={patientDetail}
                          data={data}
                        />
                      ))
                    )
                  ) : patientAmbulanceCurrentBooking === null ||
                    patientAmbulanceCurrentBooking.length === 0 ? (
                    <h3 style={{ marginLeft: "30%" }}>No current bookings</h3>
                  ) : (
                    patientDoctorCurrentBooking?.map((data, id) => (
                      <CurrentBookingCard
                        key={id}
                        patientData={patientDetail}
                        data={data}
                      />
                    ))
                  )}
                </div>

                <div className="div-apart">
                  <h1 style={{ fontSize: "24px" }} className="heading">
                    Previous Booking
                  </h1>
                </div>
                <div id="tablediv" className="profile-table-container">
                  {table === "doctor" ? (
                    patientDoctorPastBooking === null ||
                    patientDoctorPastBooking.length === 0 ? (
                      <h2 style={{ textAlign: "center", margin: "20%" }}>
                        No past bookings
                      </h2>
                    ) : (
                      <PatientBookingTable
                        patientData={patientDetail}
                        data={patientDoctorPastBooking}
                      />
                    )
                  ) : table === "pharma" ? (
                    patientPharmaPastBooking === null ||
                    patientPharmaPastBooking.length === 0 ? (
                      <h2 style={{ textAlign: "center", margin: "20%" }}>
                        No past bookings
                      </h2>
                    ) : (
                      <PatientPharmaBookings data={patientPharmaPastBooking} />
                    )
                  ) : patientAmbulancePastBooking === null ||
                    patientAmbulancePastBooking.length === 0 ? (
                    <h2 style={{ textAlign: "center", margin: "20%" }}>
                      No past bookings
                    </h2>
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
