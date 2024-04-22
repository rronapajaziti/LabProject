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

  useEffect(() => {
    // Fetch data here if needed
  }, []);

  const handleSave = () => {
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
      .post(`https://localhost:7200/api/Authors`, data)
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

  return (
    <Fragment>
      <Form className="authorForm">
        <ToastContainer />
        <Row>
          <Col>
            <Form.Group controlId="formAuthorID">
              <Form.Label>AuthorID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter AuthorID"
                name="AuthorID"
                value={AuthorID}
                onChange={(e) => setAuthorID(e.target.value)}
              />
            </Form.Group>
          </Col>
          {/* Other form controls */}
        </Row>
        {/* Other rows */}
        <Row>
          <Col>
            <Link to="/Authors">
              <Button variant="dark" className="btn-add" onClick={handleSave}>
                Add
              </Button>
            </Link>
          </Col>
          <Col>
            <Button variant="dark" className="btn-add" onClick={clear}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default AddAuthors;




