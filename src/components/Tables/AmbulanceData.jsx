import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ambulanceManage } from "../Axios/apis";


const AmbulanceData = ({ data }) => {

  const manageAmbulance = async (id, value) => {
    const jsonData = {
      id,
      isBlock: value,
    };
    await ambulanceManage(jsonData);
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
          <th>Type of Ambulance</th>
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
            <td onClick={() => navigate(`/ambulance/${data.id}`)}>
              {data.driverName}
            </td>
            <td>{data.phoneNumber}</td>
            <td>{data.Ambulancetype}</td>
            <td
              onClick={() => manageAmbulance(data?.id, !data?.isBlock)}
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

export default AmbulanceData;
