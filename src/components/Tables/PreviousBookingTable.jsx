import React from 'react';
import { Table } from 'react-bootstrap';

const dummy = [
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    },
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    },
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    },
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    },
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    },
    {
        "Name": "Sophia Thomas",
        "Date": "20 Oct 22",
        "From": "Mayur Vihar Phase-1",
        "To": "AIIMS Hospital",
        "Status": "Done"
    }
]

const PreviousBookingTable = () => {
  return (
    <Table style={{cursor: "pointer"}} hover responsive>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>Name</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummy.map((data, id) => (
          <tr style={{ textAlign: "center" }} key={id}>
            <td>{data.Name}</td>
            <td>{data.Date}</td>
            <td>{data.From}</td>
            <td>{data.To}</td>
            <td>{data.Status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PreviousBookingTable