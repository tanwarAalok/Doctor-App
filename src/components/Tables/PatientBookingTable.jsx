import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AdminContext } from "../../context/adminContext";
import DoctorPatientPopup from "../PopupPage/DoctorPatientPopup";
import PatientDoctorPopup from "../PopupPage/PatientDoctorPopup";

const dummy = [
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    doc: "Dr James",
    fee: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    doc: "Dr James",
    fee: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    doc: "Dr James",
    fee: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    doc: "Dr James",
    fee: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    doc: "Dr James",
    fee: "$100",
    Status: "Done",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const PatientBookingTable = ({ patientData, data }) => {
  // console.log(data);
  // const [trigger, setTrigger] = useState(false);
  // const { popupData, patientPopupData} = useContext(AdminContext);
  
  return (
    <>
      <Table style={{ cursor: "pointer" }} hover responsive>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Appointment Date & Time</th>
            <th>Doctor Name</th>
            <th>Fees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data, id) => (
            <tr
              style={{ textAlign: "center" }}
              key={id}
            >
              <td>{patientData?.name}</td>
              <td>
                {new Date(data.date).getDate()}{" "}
                {months[new Date(data.date).getMonth()]}, {new Date(data.date).getFullYear()} (
                {data.slot})
              </td>
              <td>{data.doctorId.name}</td>
              <td>{data.doctorId.clinic.fee}</td>
              <td>Completed</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* for testing only not real solution */}
      {/* {trigger ? <PatientDoctorPopup setTrigger={setTrigger} /> : ""} */}
    </>
  );
};

export default PatientBookingTable;
