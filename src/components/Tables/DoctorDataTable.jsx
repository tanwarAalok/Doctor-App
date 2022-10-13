import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DummyData = [
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    clinic: "The Healing Clinic",
    speciality: "Surgeon",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    clinic: "The Healing Clinic",
    speciality: "Surgeon",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    clinic: "The Healing Clinic",
    speciality: "Surgeon",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    clinic: "The Healing Clinic",
    speciality: "Surgeon",
    action: "Block",
  },
  {
    name: "Sophia Thomas",
    phone: 8356748976,
    clinic: "The Healing Clinic",
    speciality: "Surgeon",
    action: "Block",
  },
];

const DoctorsData = () => {
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
          <th>Clinic Name</th>
          <th>Speciality</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {DummyData.map((data, id) => (
          <tr
            key={id}
            onClick={() => navigate("/doctorDetails")}
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "200%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.clinic}</td>
            <td>{data.speciality}</td>
            <td>{data.action}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DoctorsData;
