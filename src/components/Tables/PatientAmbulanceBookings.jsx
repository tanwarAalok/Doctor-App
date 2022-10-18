import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import AmbulancePatientPopup from "../PopupPage/AmbulancePatientPopup";

const dummy = [
  {
    name: "Sophia",
    bdate: "20 Oct 22",
    ambno: "DL1A2415",
    dlno: "RJ1320122012",
    from: "Mayur Vihar Phase-1",
    to: "AIIMS Hospital",
    Status: "Done",
  },
  {
    name: "Sophia",
    bdate: "20 Oct 22",
    ambno: "DL1A2415",
    dlno: "RJ1320122012",
    from: "Mayur Vihar Phase-1",
    to: "AIIMS Hospital",
    Status: "Done",
  },
  {
    name: "Sophia",
    bdate: "20 Oct 22",
    ambno: "DL1A2415",
    dlno: "RJ1320122012",
    from: "Mayur Vihar Phase-1",
    to: "AIIMS Hospital",
    Status: "Done",
  },
  {
    name: "Sophia",
    bdate: "20 Oct 22",
    ambno: "DL1A2415",
    dlno: "RJ1320122012",
    from: "Mayur Vihar Phase-1",
    to: "AIIMS Hospital",
    Status: "Done",
  },
  {
    name: "Sophia",
    bdate: "20 Oct 22",
    ambno: "DL1A2415",
    dlno: "RJ1320122012",
    from: "Mayur Vihar Phase-1",
    to: "AIIMS Hospital",
    Status: "Done",
  },

];

const PatientAmbulanceBookings = ({data}) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Table style={{ cursor: "pointer" }} hover responsive>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Amb No.</th>
            <th>DL No.</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((data, id) => (
            <tr onClick={() => setTrigger(true)} style={{ textAlign: "center" }} key={id}>
              <td>{data.name}</td>
              <td>{data.bdate}</td>
              <td>{data.ambno}</td>
              <td>{data.dlno}</td>
              <td>{data.from}</td>
              <td>{data.to}</td>
              <td>{data.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {trigger ? <AmbulancePatientPopup setTrigger={setTrigger}/> : ""}
    </>
  );
};

export default PatientAmbulanceBookings;
