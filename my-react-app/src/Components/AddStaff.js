import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddStaff = () =>{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [position, setPosition] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [performanceRating, setPerformaceRating] = useState("");

    
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
        .get(`https://localhost:7200/api/Staff`)
        .then((result) => {
          setData(result.data);
        })
        .catch((error) => {
          toast.error("Failed to get data: " + error.message);
        });
  };

  const handleSave = () => {
    const url = `https://localhost:7200/api/Book`;
    const data = {
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
        .post(url, data)
        .then((result) => {
          getData();
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
        setPerformaceRating("");
        setSalary("");
    };
    const handleClear = () => {
        clear();
    };

    return(
        
        <Form className="staffForm">
            <ToastContainer></ToastContainer>
            <Row>
                <Col>
                    <Form.Group controlId="fromName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="fromSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Surname"
                            name="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="Birthdate">
                        <Form.Label>Birthdate</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter Birthdate"
                            name="Birthdate"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="fromContactNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Contact Number"
                            name="ContactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <Form.Group controlId="fromPosition">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Position"
                            name="Position"
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
                            name="EmploymentStatus"
                            value={employmentStatus}
                            onChange={(e) => setEmploymentStatus(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="fromJoiningDate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter Joining Date"
                            name="joiningDate"
                            value={joiningDate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="double"
                            placeholder="Enter Salary"
                            name="salary"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="PerformanceRating">
                        <Form.Label>Performance Rating</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Performance Rating"
                            name="performanceRating"
                            value={performanceRating}
                            onChange={(e) => performanceRating(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col>
                <Button variant="primary" onClick={handleSave}>Add Staff</Button>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClear}>Clear</Button>
            </Col>
        </Row>
        </Form>
    );
};

export default AddStaff;