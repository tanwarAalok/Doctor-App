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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


const DoctorsBookingTable = ({data}) => {
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
          {data?.map((data, id) => (
            <tr
              onClick={() => setTrigger(true)}
              style={{ textAlign: "center" }}
              key={id}
            >
              <td style={{textTransform: "capitalize"}}>{data.patientId?.name}</td>
              <td>
                {new Date(data.date).getDate()}{" "}
                {months[new Date(data.date).getMonth()]},{" "}
                {new Date(data.date).getFullYear()} ({data.slot})
              </td>
              <td>{data.patientId?.age}</td>
              <td>{data.isComplete ? "Completed" : "Not completed"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {trigger ? <DoctorPatientPopup setTrigger={setTrigger} /> : ""}
    </>
  );
};

export default DoctorsBookingTable;
