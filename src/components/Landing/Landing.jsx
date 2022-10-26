import React, { useState } from "react";
import "./landing.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Login } from "../Axios/apis";

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginRequest = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Login({ email, password });
      localStorage.setItem('token', data?.token);
      localStorage.setItem('userId', data?.user._id);
      localStorage.setItem('userName', data?.user?.name);
      localStorage.setItem('userEmail', data?.user?.email);
      navigate("/dashboard");
    } catch (err) {
      console.log("ERROR: ", err);
    }

  }

  return (
    <div className="landing-main">
      <div>
        <h2 className="mb-5 text-center">Admin Login</h2>
        <Form className="card p-3" onSubmit={loginRequest}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}


export default Landing;
