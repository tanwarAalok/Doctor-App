import React from 'react';
import { Table } from 'react-bootstrap';

const DummyData = [
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    },
    {
        name: "Aalok",
        phone: 9625090685,
        email: "aaloktanwar88@gmail.com",
        action: "Block"
    }
]

const TableComponent = () => {
  return (
    <Table borderless responsive hover>
      <tr style={{ fontWeight: "500", fontSize: "1.1rem", lineHeight: "100%", background: "#e6f4f4", textAlign: "center", height: "3rem", borderBottom: "none" }}>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email ID</th>
        <th>Action</th>
      </tr>
      <tbody>
        {DummyData.map((data, id) => (
          <tr style={{ fontWeight: "400", fontSize: "1rem", lineHeight: "200%", textAlign: "center", cursor: "pointer" }}>
            <th>{data.name} Tanwar</th>
            <th>{data.phone}</th>
            <th>{data.email}</th>
            <th>{data.action}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent