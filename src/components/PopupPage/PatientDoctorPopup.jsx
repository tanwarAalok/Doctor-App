import React from "react";
import "./Popup.css";
import AdminPic from "../../assets/adsimage.png";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

const PatientDoctorPopup = ({ setTrigger }) => {
  const { popupData, patientPopupData } = useContext(AdminContext);
  const doctorData = popupData.current;
  const patientData = patientPopupData.current;

  console.log("patientData: ", patientData);
  console.log("doctorData: ", popupData);
  return (
    <div className="popup-container">
      {/* left div */}
      <div>
        <div style={{ textAlign: "center" }}>
          <h2 className="popup-h2">Patients Detail</h2>
          <img
            style={{ borderRadius: "50%", width: "125px", height: "125px" }}
            src={patientData?.picture}
            alt=""
          />
        </div>
        <div style={{ padding: "10px 30px" }}>
          <div className="div-apart">
            <p
              style={{ opacity: "0.5", textTransform: "capitalize" }}
              className="popup-p"
            >
              Full Name
            </p>
            <p style={{ textTransform: "capitalize" }} className="popup-p">
              {patientData?.name}
            </p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Age
            </p>
            <p className="popup-p">{patientData?.age}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Phone No
            </p>
            <p className="popup-p">{patientData?.phone}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Email
            </p>
            <p className="popup-p">{patientData?.email}</p>
          </div>
          <div className="div-apart">
            <p
              style={{ opacity: "0.5", textTransform: "capitalize" }}
              className="popup-p"
            >
              Gender
            </p>
            <p style={{ textTransform: "capitalize" }} className="popup-p">
              {patientData?.gender}
            </p>
          </div>
        </div>
      </div>

      {/* Middle div */}
      <div className="middle-div-popup">
        <svg
          style={{ width: "35px", height: "35px" }}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
        </svg>
        <h2 style={{ margin: "0" }} className="popup-h2">
          Appointment Date & Time
        </h2>
        <p style={{ opacity: "0.5", margin: "0" }} className="popup-p">
          10 October 2022
        </p>
        <p style={{ opacity: "0.5", margin: "0" }} className="popup-p">
          10:00 AM IST
        </p>
      </div>

      {/* Rightmost div */}
      <div>
        <div style={{ textAlign: "center" }}>
          <h2 className="popup-h2">Doctors Detail</h2>
          <img
            style={{ borderRadius: "50%", width: "125px", height: "125px" }}
            src={doctorData?.doctorId?.picture}
            alt=""
          />
        </div>
        <div style={{ padding: "10px 30px" }}>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Full Name
            </p>
            <p className="popup-p">{doctorData?.doctorId?.name}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Age
            </p>
            <p className="popup-p">{doctorData?.doctorId?.age}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Phone No
            </p>
            <p className="popup-p">{doctorData?.doctorId?.phone}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Speciality
            </p>
            <p className="popup-p">Surgeon</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Years of Experience
            </p>
            <p className="popup-p">{doctorData?.doctorId?.experience}</p>
          </div>
        </div>
        <h2 style={{ paddingLeft: "28px" }} className="popup-h2">
          Clinic Details
        </h2>
        <div style={{ padding: "10px 30px 0 30px" }}>
          <div className="div-apart">
            <p
              style={{ opacity: "0.5", textTransform: "capitalize" }}
              className="popup-p"
            >
              Clinic Name
            </p>
            <p style={{ textTransform: "capitalize" }} className="popup-p">
              {doctorData?.doctorId?.clinic?.clinicName}
            </p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Address
            </p>
            <p className="popup-p">
              {doctorData?.doctorId?.clinic?.address?.line_1},{" "}
              {doctorData?.doctorId?.clinic?.address?.line_2},{" "}
              {doctorData?.doctorId?.clinic?.address?.city} (
              {doctorData?.doctorId?.clinic?.address?.pincode})
            </p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Fee
            </p>
            <p className="popup-p">{doctorData?.doctorId?.clinic?.fee}</p>
          </div>
          <div className="div-apart">
            <p style={{ opacity: "0.5" }} className="popup-p">
              Email ID
            </p>
            <p className="popup-p">{doctorData?.doctorId?.clinic?.email}</p>
          </div>
        </div>
      </div>

      <svg
        onClick={() => setTrigger(false)}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
        <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      </svg>
    </div>
  );
};

export default PatientDoctorPopup;
