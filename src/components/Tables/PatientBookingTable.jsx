import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import DoctorPatientPopup from "../PopupPage/DoctorPatientPopup";

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

const PatientBookingTable = () => {
  const [trigger, setTrigger] = useState(false);
  
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
          {dummy.map((data, id) => (
            <tr
              onClick={() => setTrigger(true)}
              style={{ textAlign: "center" }}
              key={id}
            >
              <td>{data.name}</td>
              <td>{data.dt}</td>
              <td>{data.doc}</td>
              <td>{data.fee}</td>
              <td>{data.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* for testing only not real solution */}
      {trigger ? <DoctorPatientPopup setTrigger={setTrigger} /> : ""}
    </>
  );
};

export default PatientBookingTable;
