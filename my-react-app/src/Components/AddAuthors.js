import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddAuthors = () => {
    const [AuthorID, setAuthorID] = useState("");
    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Category, setCategory] = useState("");
    const [BookTitle, setBookTitle] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Awards, setAwards] = useState("");
    const [success, setSuccess] = useState(false);

    const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7200/api/Authors`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        toast.error("Failed to get data: " + error.message);
      });
  };
  const handleSave = () => {
    const url = `https://localhost:7200/api/Authors`;
    const data = {
      AuthorID: AuthorID,
      Name: Name,
      Surname: Surname,
      Category: Category,
      BookTitle: BookTitle,
      ContactNumber: ContactNumber,
      Awards: Awards,
    };

    axios
      .post(`https://localhost:7200/api/Authors`, formData)
      .then((result) => {
        clear();
        toast.success("Author has been added successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add Author: " + error.message);
      });
  };

  const clear = () => {
    setAuthorID("");
    setName("");
    setSurname("");
    setCategory("");
    setBookTitle("");
    setContactNumber("");
    setAwards("");
    
  };
  const handleClear = () => {
    clear();
  };
  return (
    <Form className="authorForm ">
      <ToastContainer></ToastContainer>
      <Row>
        <Col>
          <Form.Group controlId="formAuthorID">
            <Form.Label>AuthorID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter AuthorID"
              name="AuthorID"
              value={authorID}
              onChange={(e) => setAuthorID(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter surname"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="bookTtitle"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact number"
              name="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formAwards">
            <Form.Label>Awards</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter awards"
              name="awards"
              value={awards}
              onChange={(e) => setAwards(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Row>
        {" "}
        <Col>
          <Link to="/Authors">
            <Button variant="dark" className="btn-add" onClick={handleSave}>
              Add
            </Button>
          </Link>
        </Col>
        <Col>
          <Button variant="dark" className="btn-add" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddAuthors;



