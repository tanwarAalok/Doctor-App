import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { UserAd } from "../Axios/apis";
import { Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import CommonHeader from "../Header/Header";
const UserAds = () => {
  const id = useParams();
  const navigate = useNavigate();
  const { show } = useContext(UserContext);
  const [plans, setPlans] = useState([]);

  const GetAd = async () => {
    let NewData = { userId: id.id, pageno: 0 };
    try {
      const { data } = await UserAd(NewData);
      setPlans(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAd();
  }, []);

  return (
    <>
      <div className="main-div">
        <div
          className="clientsales-main"
          style={{ marginLeft: show ? "1px" : "2.3em" }}
        >
          <Row>
            <CommonHeader />
            {plans?.length !== 0 ? (
              <>
                <div>
                  <h2 className="title"> {plans[0]?.listedBy}</h2>
                </div>

                <h2 className="mt-3">All Property</h2>
                <div className="d-flex justify-content-between flex-wrap">
                  {plans?.map((data, id) => (
                    <div className="card-plan position-relative mt-3" key={id}>
                      <div>
                        <img src={data.images[0]} alt="default" width="100%" />
                      </div>
                      <h6>{data?.title}</h6>
                      <p>{data?.description}</p>
                      <h6 style={{ fontSize: "15px" }}>
                        {data?.address?.state},{data?.address?.country}
                      </h6>
                      <h2 style={{ cursor: "pointer" }}>{data?.price}/Month</h2>
                      <h2
                        style={{ cursor: "pointer", marginTop: 0 }}
                        onClick={() =>
                          navigate(`/editads/${data._id}`, { state: data })
                        }
                      >
                        Edit AD <AiFillEdit size="18" />
                      </h2>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h2 className="text-center">No Ads To Display....</h2>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

export default UserAds;
