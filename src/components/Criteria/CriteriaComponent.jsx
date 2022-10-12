import React from 'react';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./Criteria.css"

const CriteriaComponent = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-div">
        <h1 className="heading">Criteria</h1>
        <div className="main-criteria-div"></div>
      </div>
    </>
  );
}

export default CriteriaComponent