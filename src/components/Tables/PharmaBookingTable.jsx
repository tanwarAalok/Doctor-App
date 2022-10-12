import React from "react";
import { Table } from "react-bootstrap";

const dummy = [
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
  {
    name: "Sophia",
    date: "20 Oct 22",
    deliver: "64, Janpath, NewDelhi",
    amount: "$100",
    Status: "Done",
  },
];

const PharmaBookingTable = () => {
  return (
    <Table style={{ cursor: "pointer" }} hover responsive>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>Name</th>
          <th>Date</th>
          <th>Delivered To</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummy.map((data, id) => (
          <tr style={{ textAlign: "center" }} key={id}>
            <td>{data.name}</td>
            <td>{data.date}</td>
            <td>{data.deliver}</td>
            <td>{data.amount}</td>
            <td>{data.Status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PharmaBookingTable;
