import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddBooks = () => {
  const [isbn, setISBN] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dataOfadition, setDateOfAddition] = useState("");
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://localhost:7200/api/Book`)
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
      ISBN: isbn,
      Image: image,
      Title: title,
      Author: author,
      PublicationDate: publicationDate,
      PageNumber: pageNumber,
      Description: description,
      Price: price,
      Quantity: quantity,
      DataOfAdition: dataOfadition,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Book has been added");
        setSuccess(true);
      })
      .catch((error) => {
        toast.error("Failed to add Book: " + error.message);
      });
  };
  const clear = () => {
    setISBN("");
    setImage("");
    setTitle("");
    setAuthor("");
    setPublicationDate("");
    setPageNumber("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setDateOfAddition("");
  };
  const handleClear = () => {
    clear();
  };
  return (
    <Form className="bookForm ">
      <ToastContainer></ToastContainer>
      <Row>
        <Col>
          <Form.Group controlId="formISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ISBN"
              name="ISBN"
              value={isbn}
              onChange={(e) => setISBN(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formPublicationDate">
            <Form.Label>Publication Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter publication date"
              name="publicationDate"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formPageNumber">
            <Form.Label>Page Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter page number"
              name="pageNumber"
              value={pageNumber}
              onChange={(e) => setPageNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDateOfAddition">
            <Form.Label>Date of Addition</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter date of addition"
              name="dateOfAddition"
              value={dataOfadition}
              onChange={(e) => setDateOfAddition(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <Link to="/Books">
            <Button
              variant="dark"
              className="btn-addBooks"
              onClick={handleSave}
            >
              Add
            </Button>
          </Link>
        </Col>
        <Col>
          <Button variant="dark" className="btn-addBooks" onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddBooks;
