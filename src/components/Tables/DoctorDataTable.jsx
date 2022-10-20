import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { doctorManage } from "../Axios/apis";


const DoctorsData = ({ data }) => {

  const manageDoctor = async (id, value) => {
    const jsonData = {
      id,
      isBlock: value,
    };
    await doctorManage(jsonData);
  };

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
        {data.map((data, id) => (
          <tr
            key={id}
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              lineHeight: "200%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <td
              onClick={() => navigate(`/patient/${data._id}`)}
              style={{ textTransform: "capitalize" }}
            >
              {data.name}
            </td>
            <td>{data.phone}</td>
            <td>{data.clinic.clinicName}</td>
            <td>{data.speciality}</td>
            <td
              onClick={() => manageDoctor(data?._id, !data?.isBlock)}
              style={{ color: data?.isBlock ? "red" : "green" }}
            >
              {data?.isBlock ? "Block" : "Unblock"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DoctorsData;
