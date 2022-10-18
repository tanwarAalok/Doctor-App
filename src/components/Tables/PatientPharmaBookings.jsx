import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import PharmaPatientPopup from "../PopupPage/PharmaPatientPopup";

const dummy = [
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
  {
    name: "Sophia",
    pharma: "The Healing Clinic",
    date: "20 Oct 22",
    amount: "$100",
    dod: "28 Oct 22",
    Status: "Done",
  },
];

const PatientPharmaBookings = ({data}) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Table style={{ cursor: "pointer" }} hover responsive>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Pharma Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Date of Delivery</th>
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
              <td>{data.pharma}</td>
              <td>{data.date}</td>
              <td>{data.amount}</td>
              <td>{data.dod}</td>
              <td>{data.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {trigger ? <PharmaPatientPopup setTrigger={setTrigger}/> : ""}
    </>
  );
};

export default PatientPharmaBookings;
