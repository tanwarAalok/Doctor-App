import React, { useContext, useState, useEffect } from "react";
import { UpdateAd, DeleteAd } from "../Axios/apis";
import { UserContext } from "../../App";
import { AiFillDelete } from "react-icons/ai";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import CommonHeader from "../Header/Header";
const UserAds = () => {
  const { state } = useLocation();
  const { show } = useContext(UserContext);
  const [input, setInput] = useState({
    title: "",
    adsId: "",
    area: "",
    availability: "",
    capacity: "",
    description: "",
    facing: "",
    floorNo: "",
    floors: "",
    images: "",
    listingType: "",
    maintenance: "",
    numOfReviews: "",
    price: "",
    ratings: "",
    type: "",
    views: "",
    addressArea: "",
    city: "",
    country: "",
    pincode: "",
    state: "",
    street: "",
  });
  const navigate = useNavigate();
  console.log(input);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UpdateAd(input);
      alert("Ads Updated successfully");
      navigate(-1);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const DeleteAds = async (e) => {
    try {
      await DeleteAd({ adsId: e });
      alert("Ads Deleted");
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const handleChange = (e) => {
    const { name } = e.target;
    setInput({ ...input, [name]: e.target.value });
  };
  useEffect(() => {
    if (state) {
      setInput({
        title: state.title,
        adsId: state._id,
        area: state.area,
        availability: state.availability,
        capacity: state.capacity,
        description: state.description,
        facing: state.facing,
        floorNo: state.floorNo,
        floors: state.floors,
        images: state.images[0],
        listingType: state.listingType,
        maintenance: state.maintenance,
        numOfReviews: state.numOfReviews,
        price: state.price,
        ratings: state.ratings,
        type: state.type,
        views: state.views,
        addressArea: state.address.area,
        city: state.address.city,
        country: state.address.country,
        pincode: state.address.pincode,
        state: state.address.state,
        street: state.address.street,
      });
    } else {
      navigate(-1);
    }
  }, [state]);

  return (
    <>
      <div className="main-div">
        <div
          className="clientsales-main"
          style={{ marginLeft: show ? "1px" : "2.3em" }}
        >
          <Row>
            <CommonHeader />
            <Form onSubmit={handleSubmit}>
              <Row>
                <img src={input?.images} alt="default" width="100%" />
              </Row>
              <div
                className="mt-2 d-flex justify-content-end"
                onClick={() => DeleteAds(state._id)}
              >
                <AiFillDelete
                  size="22"
                  color="red"
                  cursor="pointer"
                  title="delete Ad"
                />{" "}
                Delete Ad
              </div>
              <Row className="my-4">
                <Form.Group as={Col}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="title"
                    value={input.title}
                    className="landing-input-form"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="type"
                    value={input.type}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Listing Type</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="listingType"
                    value={input.listingType}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="number"
                    name="price"
                    value={input.price}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Maintenance</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="number"
                    name="maintenance"
                    value={input.maintenance}
                    className="landing-input-form"
                  />
                </Form.Group>
              </Row>
              <Row className="my-4">
                <Form.Group as={Col}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="description"
                    value={input.description}
                    className="landing-input-form"
                  />
                </Form.Group>
              </Row>
              <Row className="my-4">
                <Form.Group as={Col}>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="country"
                    value={input?.country}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="state"
                    value={input?.state}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="city"
                    value={input?.city}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="addressArea"
                    value={input?.addressArea}
                    className="landing-input-form"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="pincode"
                    value={input?.pincode}
                    className="landing-input-form"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="street"
                    value={input?.street}
                    className="landing-input-form"
                  />
                </Form.Group>
              </Row>
              <Row className="my-4">
                <Form.Group as={Col}>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="area"
                    value={input?.area}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Bathrooms</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="bathrooms"
                    value={input?.bathrooms}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Bedrooms</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="bedrooms"
                    value={input?.bedrooms}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="capacity"
                    value={input?.capacity}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Floor No</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="floorNo"
                    value={input?.floorNo}
                    className="landing-input-form"
                  />
                </Form.Group>
              </Row>
              <Row className="my-4">
                <Form.Group as={Col}>
                  <Form.Label>Floors</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="floors"
                    value={input?.floors}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Facing</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="facing"
                    value={input?.facing}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Total Reviews</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="numOfReviews"
                    value={input?.numOfReviews}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Ratings</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="ratings"
                    value={input?.ratings}
                    className="landing-input-form"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Views</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="views"
                    value={input?.views}
                    className="landing-input-form"
                  />
                </Form.Group>
              </Row>
              <div className="  my-5 d-flex justify-content-center">
                <Button
                  className="button-submit btn-ripple"
                  style={{ width: "12em" }}
                  type="submit"
                >
                  Update Changes
                </Button>
              </div>
            </Form>
          </Row>
        </div>
      </div>
    </>
  );
};

export default UserAds;
