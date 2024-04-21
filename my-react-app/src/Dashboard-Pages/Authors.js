import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Authors = () => {
  const [show, setShow] = useState(false);
  const [editAuthorID, setEditAuthorID] = useState("");
  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editBookTitle, setEditBookTitle] = useState("");
  const [editContactNumber, setEditContactNumber] = useState("");
  const [editAwards, setEditAwards] = useState("");
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
        console.log(error);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (authorID) => {
    handleShow();
    setEditAuthorID(authorID);
    axios
      .get(`https://localhost:7200/api/Authors/${authorID}`)
      .then((result) => {
        const authorData = result.data;
        setEditName(authorData.name);
        setEditSurname(authorData.surname);
        setEditCategory(authorData.category);
        setEditBookTitle(authorData.bookTitle);
        setEditContactNumber(authorData.contactNumber);
        setEditAwards(authorData.awards);
      })
      .catch((error) => {
        toast.error("Failed to get Staff: " + error.message);
      });
  };

  const handleDelete = (authorID) => {
    if (window.confirm("Are you sure you want to delete this Author")) {
      axios
        .delete(`https://localhost:7200/api/Authors/${authorID}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Author has been deleted");
            getData();
          }
        })
        .catch((error) => {
          toast.error("Failed to delete this Author: " + error.message);
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7200/api/Authors/${editAuthorID}`;
    const authorData = {
      AuthorID: editAuthorID,
      Name: editName,
      Surname: editSurname,
      Category: editCategory,
      BookTitle: editBookTitle,
      ContactNumber: editContactNumber,
      Awards: editAwards,
    };
    axios
      .put(url, authorData)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Author has been updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to edit author: " + error.message);
      });
  };

  const clear = () => {
    setEditAuthorID("");
    setEditName("");
    setEditSurname("");
    setEditCategory("");
    setEditBookTitle("");
    setEditContactNumber("");
    setEditAwards("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="add-button">
        <Link to="/add-staff">
          <Button variant="dark" className="btn-add">
            Add Staff
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Category</th>
            <th>Book Title</th>
            <th>Contact Number</th>
            <th>Awards</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.category}</td>
                <td>{item.bookTitle}</td>
                <td>{item.contactNumber}</td>
                <td>{item.awards}</td>
                <td colSpan={2} className="btn">
                  <Button
                    variant="outline-dark"
                    className="btn-edit"
                    onClick={() => handleEdit(item.AuthorID)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="btn-delete"
                    onClick={() => handleDelete(item.AuthorID)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Authors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Row>
              <Col>
                <Form.Group controlId="fromauthorID">
                  <Form.Label>Author ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author ID"
                    value={editAuthorID}
                    onChange={(e) => setEditAuthorID(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Name"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromSurname">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Surname"
                    value={editSurname}
                    onChange={(e) => setEditSurname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Category"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromBookTitle">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Book Title"
                    value={editBookTitle}
                    onChange={(e) => setEditBookTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="fromContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Contact Number"
                    value={editContactNumber}
                    onChange={(e) => setEditContactNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formAwards">
                  <Form.Label>Awards</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Awards"
                    value={editAwards}
                    onChange={(e) => setEditAwards(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Authors;

       