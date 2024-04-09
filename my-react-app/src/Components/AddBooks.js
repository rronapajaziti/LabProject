import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function AddBooks() {
  const [formData, setFormData] = useState({
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
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPublicationDate">
        <Form.Label>Publication Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter publication date"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPageNumber">
        <Form.Label>Page Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter page number"
          name="pageNumber"
          value={formData.pageNumber}
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
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDateOfAddition">
        <Form.Label>Date of Addition</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter date of addition"
          name="dateOfAddition"
          value={formData.dateOfAddition}
          onChange={handleChange}
        />
      </Form.Group>
      <Row>
        {" "}
        <Col>
          <Button variant="dark" className="btn-addBooks">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddBooks;
