import React from "react";
import { Table } from "react-bootstrap";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const PharmaBookingTable = ({ data }) => {

  return (
    <>
      <Table hover responsive>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Date</th>
            <th>Delivered To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, id) => (
            <tr style={{ textAlign: "center" }} key={id}>
              <td>{data?.prescription?.title}</td>
              <td>
                {new Date(data?.createdAt).getDate()}{" "}
                {months[new Date(data?.createdAt).getMonth()]},{" "}
                {new Date(data?.createdAt).getFullYear()}
              </td>
              <td>{data?.patientId?.name}</td>
              <td>{data?.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PharmaBookingTable;
