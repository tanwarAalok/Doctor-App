import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { AdminContext } from '../../context/adminContext';
import PharmaPatientPopup from '../PopupPage/PharmaPatientPopup';


const PharmaCurrentBooking = ({pharmaData, data}) => {
  const sidebar = document.querySelector("#sidebar");
  const navbar = document.querySelector("#navbar");
  const tablediv = document.querySelector("#tablediv");
  const { popupData, patientPopupData } = useContext(AdminContext);
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          popupData.current = pharmaData;
          patientPopupData.current = data;
          sidebar.classList?.add("bg-dull");
          navbar.classList?.add("bg-dull");
          tablediv.classList?.add("bg-dull");
          setTrigger(true);
        }}
        className="profile-card"
      >
        <img src={data?.patientId?.picture} alt="" />
        <div>
          <h5 className="card-name">{data?.patientId?.name}</h5>
          <div className="timediv">
            <svg
              style={{
                color: "rgba(0, 0, 0, 0.4)",
                width: "12px",
                height: "12px",
              }}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
            </svg>
            <p>
              {new Date(data?.createdAt).getHours()}:
              {new Date(data?.createdAt).getMinutes() > 9
                ? new Date(data?.createdAt).getMinutes()
                : `0${new Date(data?.createdAt).getMinutes()}`}{" "}
              IST
            </p>
          </div>
        </div>
      </div>

      {trigger ? <PharmaPatientPopup setTrigger={setTrigger} /> : ""}
    </>
  );
}

export default PharmaCurrentBooking