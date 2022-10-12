import React from "react";
import { Table } from "react-bootstrap";

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
  return (
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
          <tr style={{ textAlign: "center" }} key={id}>
            <td>{data.name}</td>
            <td>{data.dt}</td>
            <td>{data.doc}</td>
            <td>{data.fee}</td>
            <td>{data.Status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PatientBookingTable;
