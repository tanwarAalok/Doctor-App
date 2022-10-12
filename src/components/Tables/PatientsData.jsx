import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DummyData = [
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    email: "sophiathomas99@gmail.com",
    action: "Block",
  },
];

const PatientsData = () => {
  return (
    <Table borderless responsive hover>
      <tr
        style={{
          fontWeight: "500",
          fontSize: "1.1rem",
          lineHeight: "100%",
          background: "#e6f4f4",
          textAlign: "center",
          height: "3rem",
          borderBottom: "none",
        }}
      >
        <th>Name</th>
        <th>Phone Number</th>
        <th>Email ID</th>
        <th>Action</th>
      </tr>
      <tbody>
        {DummyData.map((data, id) => (
          <tr
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "200%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <td>
              <Link to="/patientDetails">{data.name}</Link>
            </td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.action}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PatientsData;