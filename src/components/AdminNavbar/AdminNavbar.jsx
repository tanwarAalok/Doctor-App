import React from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './AdminNavbar.css'
import AdminPic from "../../assets/adsimage.png";
import SEARCH_DATA from "../../assets/MOCK_DATA.json";
import { Link } from "react-router-dom"
import {GrFormClose} from "react-icons/gr"

const AdminNavbar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event?.target?.value;
    setWordEntered(searchWord);

    const newFilter = SEARCH_DATA.filter((value) => {
      return value.name?.toLowerCase().includes(searchWord?.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


  return (
    <div id="navbar" className="admin-navbar-container">
      <div className="search">
        <div className="search-main">
          <div className="rsearch-button-icon">
            {filteredData.length === 0 ? (
              <BsSearch size={20} />
            ) : (
                <GrFormClose size={20} onClick={clearInput} style={{cursor: "pointer"}} />
            )}
          </div>

          <input
            type="text"
            placeholder="Search for anything..."
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.slice(0, 5).length !== 0 && (
          <div className="suggestion">
            {filteredData.map((value, key) => {
              return (
                <Link to={`/${value.type}/${value.id}`} key={key} className="dataItem">
                  <p>{value.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="profile-notification-container">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707C3.105 15.48 3 15.734 3 16v2c0 .553.447 1 1 1h16c.553 0 1-.447 1-1v-2c0-.266-.105-.52-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707C6.895 14.52 7 14.266 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zM12 22c1.311 0 2.407-.834 2.818-2H9.182C9.593 21.166 10.689 22 12 22z"></path>
        </svg>
        <img src={AdminPic} alt="" />
      </div>
    </div>
  );
}

export default AdminNavbar