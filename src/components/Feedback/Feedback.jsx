import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import { FetchFeedback  } from "../Axios/apis";
import { Row, Button } from "react-bootstrap";
import CommonHeader from "../Header/Header";
const Feedback = () => {
  const { show } = useContext(UserContext);
  const [feed, setFeed] = useState([]);

  const GetFeedback = async () => {
    try {
      const { data } = await FetchFeedback ();
      setFeed(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetFeedback();
  }, []);
console.log(feed)
  return (
    <>
      <div className="main-div">
        <div
          className="clientsales-main"
          style={{ marginLeft: show ? "1px" : "2.3em" }}
        >
          <Row>
            <CommonHeader />
            {feed?.length !== 0 ? (
              <>
                <div>
                  <h2 className="title"> FeedBack Management</h2>
                </div>

                <div className="d-flex justify-content-between flex-wrap mb-5">
                  {feed?.map((data,id) => (
                    <div className="card-plan mt-3" key={id}>
                      <h6>{data?.user?.name}</h6>
                      <h6>{data?.user?.plan}</h6>
                      <h2><b>E-mail:<br/></b> {data?.user?.email}</h2>
                      {/* <div className="d-flex justify-content-center">
                        <div className="user-img d-flex justify-content-center" />
                      </div> */}
                      <p className="mt-3">
                      <b>FeedBack:<br/></b> {data.message}
                      </p>

                     
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-center mt-5">
                <div className="loading-main ">
                  <div className="loader" />
                </div>
              </div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Feedback;
