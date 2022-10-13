import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import DoctorPatientPopup from "../PopupPage/DoctorPatientPopup";

const dummy = [
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
  {
    name: "Sophia",
    dt: "20 Oct 22 (10:00 AM IST)",
    age: "25",
    Status: "Done",
  },
];

const DoctorsBookingTable = () => {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Table style={{ cursor: "pointer" }} hover responsive>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Appointment Date & Time</th>
            <th>Age</th>
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
              <td>{data.age}</td>
              <td>{data.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {trigger ? <DoctorPatientPopup setTrigger={setTrigger} /> : ""}
    </>
  );
};

export default DoctorsBookingTable;
