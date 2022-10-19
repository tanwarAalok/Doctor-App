import React, { useEffect, useState } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import AdminPic from "../../assets/adsimage.png";
import { Link, useParams } from "react-router-dom";
import PharmaBookingTable from "../Tables/PharmaBookingTable";
import { getPharmaCurrentBooking, getPharmaDetail, getPharmaPastBooking } from "../Axios/apis";
import PharmaCurrentBooking from "./PharmaCurrentBooking";

const PharmaDetail = () => {
  const { pharmaId } = useParams();
  const [pharmaDetail, setPharmaDetail] = useState(null);
  const [pharmaCurrentBooking, setPharmaCurrentBooking] = useState(null);
  const [pharmaPastBooking, setPharmaPastBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPharmaDetail(pharmaId);
      const currentBooking = await getPharmaCurrentBooking(pharmaId);
      const pastBooking = await getPharmaPastBooking(pharmaId);
      setPharmaDetail(data?.data?.user);
      setPharmaCurrentBooking(currentBooking?.data?.mess);
      setPharmaPastBooking(pastBooking?.data?.mess);
    };
    fetchData();
  }, []);

  // console.log(pharmaCurrentBooking);

  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        {pharmaDetail === null ? (
          <div className="main-div">
            <h1>Loading</h1>
          </div>
        ) : (
          <div className="main-div">
            <h1 className="heading profile-heading">
              {pharmaDetail?.Pharmacyname}
            </h1>
            <div className="profile-container">
              <div>
                <div>
                  <img src={AdminPic} alt="" />
                  <h1
                    style={{
                      fontSize: "20px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                    className="heading"
                  >
                    {pharmaDetail?.Pharmacyname}
                  </h1>
                </div>
                <div>
                  <div>
                    <p className="key">Owner Name</p>
                    <p>{pharmaDetail?.ownername}</p>
                  </div>
                  <div>
                    <p className="key">GST No.</p>
                    <p>{pharmaDetail?.gstno}</p>
                  </div>
                  <div>
                    <p className="key">Phone Number</p>
                    <p>{pharmaDetail?.phone}</p>
                  </div>
                  <div>
                    <p className="key">Address</p>
                    <p>{pharmaDetail?.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: "24px" }} className="heading">
                  Current Booking
                </h1>
                <div className="profile-card-container">
                  {pharmaCurrentBooking === null ||
                  pharmaCurrentBooking.length === 0 ? (
                    <h3>No current bookings</h3>
                  ) : (
                    pharmaCurrentBooking?.map((data, id) => (
                      <PharmaCurrentBooking
                        key={id}
                        pharmaData={pharmaDetail}
                        data={data}
                      />
                    ))
                  )}
                </div>

                <div className="div-apart">
                  <h1 style={{ fontSize: "24px" }} className="heading">
                    Previous Booking
                  </h1>
                  {/* <Link className="viewButton" to="">
                    View All
                  </Link> */}
                </div>
                <div id="tablediv" className="profile-table-container">
                  {pharmaPastBooking === null ||
                  pharmaPastBooking.length === 0 ? (
                    <h1 style={{ textAlign: "center", marginTop: "20%" }}>
                      No past bookings
                    </h1>
                  ) : (
                    <PharmaBookingTable data={pharmaPastBooking} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PharmaDetail;
