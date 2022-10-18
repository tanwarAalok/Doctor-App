import React from 'react';
import { Table } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

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

const PatientsData = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Table borderless responsive hover>
      <thead>
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
      </thead>
      <tbody>
        {data.map((data, id) => (
          <tr
            key={id}
            onClick={() => navigate(`/patient/${data.id}`)}
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "200%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <td style={{textTransform: "capitalize"}}>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>{data.isBlock ? "Block" : "Not Block"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PatientsData;