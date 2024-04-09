import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form, Button } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../style.css";

const Books = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editFormData, setEditeditFormData] = useState({
    image: "",
    title: "",
    author: "",
    publicationDate: "",
    pageNumber: "",
    description: "",
    price: "",
    quantity: "",
    dateOfAddition: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditeditFormData({ ...editFormData, [name]: value });
  };

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(bookData);
  // }, []);

  const handleEdit = (id) => {
    handleShow();
  };
  const handledelete = (id) => {
    if (window.confirm("Are you sure you want to delete") == true) {
      alert(id);
    }
  };

  const handleUpdate = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="add-button">
        <Link to="/add-books">
          <Button variant="dark" className="btn-add">
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover className="tables">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Date</th>
            <th>Page Number</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date of Addition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.ISBN}</td>
                    <td>
                      <img src={item.image} alt="Book Cover" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.publicationDate}</td>
                    <td>{item.pageNumber}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.dateOfAddition}</td>
                    <td colSpan={2} className="btn">
                      <Button
                        variant="outline-dark"
                        className="btn-edit"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="btn-delete"
                        onClick={() => handledelete(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          return (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={editFormData.image}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={editFormData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author"
                name="author"
                value={editFormData.author}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPublicationDate">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter publication date"
                name="publicationDate"
                value={editFormData.publicationDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPageNumber">
              <Form.Label>Page Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter page number"
                name="pageNumber"
                value={editFormData.pageNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={editFormData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={editFormData.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter quantity"
                name="quantity"
                value={editFormData.quantity}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDateOfAddition">
              <Form.Label>Date of Addition</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter date of addition"
                name="dateOfAddition"
                value={editFormData.dateOfAddition}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          );
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            className="btn-Close"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="outline-dark" className="btn-update">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default Books;
