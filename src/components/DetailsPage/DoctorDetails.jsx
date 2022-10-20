import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import AdminPic from "../../assets/adsimage.png";
import { Link, useParams } from "react-router-dom";
import DoctorsBookingTable from "../Tables/DoctorBookingTable";
import { useEffect } from "react";
import { getDoctorCurrentBooking, getDoctorDetail, getDoctorPastBooking } from "../Axios/apis";
import { useState } from "react";
import CurrentBookingCard from "./CurrentBookingCard";
import DoctorPatientCurrentBooking from "../Tables/DoctorPatientCurrentBooking";

const DoctorsDetail = () => {

  const { doctorId } = useParams();
  const [doctorDetail, setDoctorDetails ] = useState(null);
  const [doctorCurrentBooking, setDoctorCurrentBooking] = useState(null);
  const [doctorPastBooking, setDoctorPastBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDoctorDetail(doctorId);
      const currentBooking = await getDoctorCurrentBooking(doctorId);
      const pastBooking = await getDoctorPastBooking(doctorId);
      setDoctorDetails(data?.data?.user);
      setDoctorCurrentBooking(currentBooking?.data?.mess);
      setDoctorPastBooking(pastBooking?.data?.mess);
    };
    fetchData();
  }, []);

  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        {doctorDetail === null ? (
          <div className="main-div">
            <h2 style={{ textAlign: "center", margin: "10%" }}>Loading ..</h2>
          </div>
        ) : (
          <div className="main-div">
            <h1 className="heading profile-heading">{doctorDetail?.name}</h1>
            <div className="profile-container">
              <div>
                <div>
                  <img src={doctorDetail?.picture} alt="" />
                  <h1 style={{ fontSize: "20px" }} className="heading">
                    {doctorDetail?.name}
                  </h1>
                </div>
                <div>
                  <div>
                    <p className="key">Gender</p>
                    <p style={{ textTransform: "capitalize" }}>
                      {doctorDetail?.gender}
                    </p>
                  </div>
                  <div>
                    <p className="key">Age</p>
                    <p>{doctorDetail?.age}</p>
                  </div>
                  <div>
                    <p className="key">Phone Number</p>
                    <p>{doctorDetail?.phone}</p>
                  </div>
                  <div>
                    <p className="key">Email Id</p>
                    <p>{doctorDetail?.email}</p>
                  </div>
                  <div>
                    <p className="key">Specility</p>
                    <p>{doctorDetail?.speciality}</p>
                  </div>
                  <div>
                    <p className="key">Year of Experience</p>
                    <p>{doctorDetail?.experience}</p>
                  </div>
                  <div>
                    <p className="key">Degree of Excellence</p>
                    <p>{doctorDetail?.degrees}</p>
                  </div>
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: "24px" }} className="heading">
                  Current Booking
                </h1>
                <div className="profile-card-container">
                  {doctorCurrentBooking === null ||
                  doctorCurrentBooking.length === 0 ? (
                    <h3 style={{ marginLeft: "30%" }}>No current bookings</h3>
                  ) : (
                    doctorCurrentBooking?.map((data, id) => (
                      <DoctorPatientCurrentBooking
                        key={id}
                        doctorData={doctorDetail}
                        data={data}
                      />
                    ))
                  )}
                </div>

                <div className="div-apart">
                  <h1 style={{ fontSize: "24px" }} className="heading">
                    Previous Booking
                  </h1>
                  {/* <Link className="viewButton" to="">
                    View All
                  </Link> */}
                </div>
                <div id="tablediv" className="profile-table-container">
                  {doctorPastBooking === null ||
                  doctorPastBooking.length === 0 ? (
                    <h1 style={{ textAlign: "center", marginTop: "20%" }}>
                      No past bookings
                    </h1>
                  ) : (
                    <DoctorsBookingTable data={doctorPastBooking} />
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

export default DoctorsDetail;
