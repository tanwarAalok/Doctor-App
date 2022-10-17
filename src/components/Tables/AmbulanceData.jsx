import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DummyData = [
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Basic Ambulance",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Advanced Ambulance",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Basic Ambulance",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Advanced Ambulance",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Basic Ambulance",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    toa: "Advanced Ambulance",
    action: "Block",
  },
];

const AmbulanceData = ({ data }) => {
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
          <th>Type of Ambulance</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, id) => (
          <tr
            key={id}
            onClick={() => navigate(`/ambulance/${data.id}`)}
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "200%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <td>{data.driverName}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.Ambulancetype}</td>
            <td>{data.action ? "Block" : "Not Block"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AmbulanceData;
