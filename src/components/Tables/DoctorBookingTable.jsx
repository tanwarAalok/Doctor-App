import React from "react";
import { Table } from "react-bootstrap";

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
  return (
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
          <tr style={{ textAlign: "center" }} key={id}>
            <td>{data.name}</td>
            <td>{data.dt}</td>
            <td>{data.age}</td>
            <td>{data.Status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DoctorsBookingTable;
