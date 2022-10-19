import React, {useState, useEffect} from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import AdminPic from "../../assets/adsimage.png";
import { Link, useParams } from "react-router-dom";
import AmbulanceBookingTable from "../Tables/AmbulanceBookingTable";
import { getAmbulanceCurrentBooking, getAmbulanceDetail, getAmbulancePastBooking } from "../Axios/apis";
import AmbulanceCurrentBooking from "./AmbulanceCurrentBooking";

const AmbulanceDetails = () => {
  const { ambulanceId } = useParams();
  const [ambulanceDetails, setAmbulanceDetails] = useState(null);

  const [ambulanceCurrentBooking, setAmbulanceCurrentBooking] = useState(null);
  const [ambulancePastBooking, setAmbulancePastBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAmbulanceDetail(ambulanceId);
      const currentBooking = await getAmbulanceCurrentBooking(ambulanceId);
      const pastBooking = await getAmbulancePastBooking(ambulanceId);
      setAmbulanceDetails(data.data.user);
      setAmbulanceCurrentBooking(currentBooking.data.mess);
      setAmbulancePastBooking(pastBooking.data.mess);
    };
    fetchData();
  }, []);

  console.log(ambulanceCurrentBooking);

  return (
    <div className="parent">
      <div>
        <SideBar />
      </div>
      <div>
        <AdminNavbar />
        {ambulanceDetails === null ? (
          <div className="main-div">
            <h1>Loading</h1>
          </div>
        ) : (
          <div className="main-div">
            <h1 className="heading profile-heading">
              {ambulanceDetails?.driverName}
            </h1>
            <div className="profile-container">
              <div>
                <div>
                  <img src={ambulanceDetails?.imgUrl} alt="" />
                  <h1 style={{ fontSize: "20px" }} className="heading">
                    {ambulanceDetails?.driverName}
                  </h1>
                </div>
                <div>
                  <div>
                    <p className="key">Phone Number</p>
                    <p>{ambulanceDetails?.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="key">Ambulance No</p>
                    <p>{ambulanceDetails?.plateNumber}</p>
                  </div>
                  <div>
                    <p className="key">Ambulance Type</p>
                    <p>{ambulanceDetails?.Ambulancetype}</p>
                  </div>
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: "24px" }} className="heading">
                  Current Booking
                </h1>
                <div className="profile-card-container">
                  {ambulanceCurrentBooking === null ||
                  ambulanceCurrentBooking.length === 0 ? (
                    <h1>No current Bookings</h1>
                  ) : (
                    ambulanceCurrentBooking.map((data, id) => (
                      <AmbulanceCurrentBooking key={id} data={data} />
                    ))
                  )}
                </div>

                <div className="div-apart">
                  <h1 style={{ fontSize: "24px" }} className="heading">
                    Previous Booking
                  </h1>
                  <Link className="viewButton" to="">
                    View All
                  </Link>
                </div>
                <div className="profile-table-container">
                  {ambulancePastBooking === null ||
                  ambulancePastBooking.length === 0 ? (
                    <h1 style={{ textAlign: "center", marginTop: "20%" }}>
                      No past bookings
                    </h1>
                  ) : (
                    <AmbulanceBookingTable data={ambulancePastBooking} />
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

export default AmbulanceDetails;
