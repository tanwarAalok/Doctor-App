import React from 'react';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from '../SideBar/SideBar';
import "./Criteria.css"

const CriteriaComponent = () => {
  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        <div className="main-div">
          <h1 className="heading">Criteria</h1>
          <div className="main-criteria-div">
            <div>
              <div>
                <h1 className="heading">Doctor's %</h1>
                <input type="number" />
              </div>
              <div>
                <h1 className="heading">Admin's %</h1>
                <input type="number" />
              </div>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriteriaComponent