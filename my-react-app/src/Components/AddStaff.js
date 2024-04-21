import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"

const AddStaff = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [position, setPosition] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [performanceRating, setPerformanceRating] = useState("");

  const handleSave = () => {
    const formData = {
      Name: name,
      Surname: surname,
      Birthdate: birthdate,
      ContactNumber: contactNumber,
      Position: position,
      EmploymentStatus: employmentStatus,
      JoiningDate: joiningDate,
      Salary: salary,
      PerformanceRating: performanceRating,
    };

    axios
      .post(`https://localhost:7200/api/Staff`, formData)
      .then((result) => {
        clear();
        toast.success("Staff has been added successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add Staff: " + error.message);
      });
  };

  const clear = () => {
    setName("");
    setSurname("");
    setBirthdate("");
    setContactNumber("");
    setPosition("");
    setEmploymentStatus("");
    setJoiningDate("");
    setSalary("");
    setPerformanceRating("");
  };
  const handleClear = () => {
    clear();
  };

  return (
    <Form className="StaffForm ">
     <ToastContainer></ToastContainer>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBirthdate">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                type="text"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmploymentStatus">
              <Form.Label>Employment Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employment Status"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formJoiningDate">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="text"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formPerformanceRating">
              <Form.Label>Performance Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Performance Rating"
                value={performanceRating}
                onChange={(e) => setPerformanceRating(e.target.value)}
              />
            </Form.Group>
            </Col>
        </Row>
        <Row>
          {" "}
          <Col>
            <Link to="/Staff">
              <Button
                variant="dark"
                className="btn-addStaff"
                onClick={handleSave}
              >
                Add
              </Button>
            </Link>
          </Col>
          <Col>
            <Button variant="dark" className="btn-addStaff" onClick={handleClear}>
              Clear
            </Button>
          </Col>
        </Row>
    </Form>
);
};

export default AddStaff;

