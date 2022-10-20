import React from "react";
import { Table } from "react-bootstrap";
import "reactjs-popup/dist/index.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const PatientBookingTable = ({ patientData, data }) => {
  
  return (
    <>
      <Table hover responsive>
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
            <tr style={{ textAlign: "center" }} key={id}>
              <td>
                {patientData?.name === null ? "Name" : `${patientData?.name}`}
              </td>
              <td>
                {new Date(data.date).getDate()}{" "}
                {months[new Date(data.date).getMonth()]},{" "}
                {new Date(data.date).getFullYear()} ({data.slot})
              </td>
              <td>{data?.doctorId?.name}</td>
              <td>{data?.doctorId?.clinic?.fee}</td>
              <td>Completed</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PatientBookingTable;
